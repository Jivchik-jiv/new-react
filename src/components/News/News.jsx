import React from 'react';
import {newsApi} from '../../api/api';
import styles from './News.module.css';
import NewsList from './NewsList';
import SearchForm from './SearchForm';

class News extends React.Component {
    state = {
        news:[],
        query: "",
        currentPage:1,
        isLoading: false
    }


    componentDidUpdate(prevProps, prevState){
        if(prevState.query!==this.state.query){
            this.setState({isLoading: true})
            newsApi.fetchNews(this.state.query).then(news=>{
                this.setState({news, currentPage: 1, isLoading: false})
            });
        }
    }

    onChangeQuery=(newQuery)=>{
            this.setState({query: newQuery})
    }

    getMoreNews =()=> {
        const {query, currentPage} = this.state;
        this.setState({isLoading: true});
        newsApi.fetchNews(query, currentPage+1)
        .then(news=>{
            this.setState(prevState=>({
                news: [
                    ...prevState.news,
                    ...news
                ],
                currentPage: prevState.currentPage + 1,
                isLoading: false
            }))
        })
    }

    render() { 
        return <div className= {styles.newsBox}>
            <h1 className = {styles.title}>News</h1>
            <SearchForm onChangeQuery= {this.onChangeQuery}/>
            <NewsList news = {this.state.news}/>
            {this.state.isLoading
            ?<p className ={styles.loader}>IS LOADING</p>
            :<button type = "button" onClick = {this.getMoreNews} className = {styles.btn}>Download more</button>}
            
            
        </div>;
    }
}
 
export default News;