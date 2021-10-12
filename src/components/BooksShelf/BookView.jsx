import axios from 'axios';
import React from 'react';
import styles from "./BooksShelf.module.css";
 
class BookView extends React.Component {
    state = {
        book: {
            name:null,
            id: null,
            description: null,
            imgUrl: null,
            authorId: null
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:3001/books/${this.props.match.params.bookId}`)
        .then(({data})=>{
            this.setState({book: data})
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps.location.pathname!==this.props.location.pathname){
            axios.get(`http://localhost:3001/books/${this.props.match.params.bookId}`)
            .then(({data})=>{
            this.setState({book: data})
        })
        }
        
    }

    render() { 
        let {name, description, imgUrl}=this.state.book;
        return <div className={styles.bookView}>
                <h2>{name}</h2>
                <img src={imgUrl} alt="" className={styles.img}/>
                <p>{description}</p>
            </div>;
    }
}
 
export default BookView;