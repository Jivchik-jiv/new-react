import React from 'react';
import styles from './ImageGallery.module.css';

class Searchbar extends React.Component {
    state={
        query: ""
    }

    handleInputChange =(e)=>{
        this.setState({query: e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.onSearchSubmit(this.state.query)
    }

    render() { 
        return <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.searchBtn}>
            <span className={styles.searchLabel}>Search</span>
          </button>
      
          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
      </header>;
    }
}
 
export default Searchbar;
