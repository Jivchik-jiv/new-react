import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchNewsSaga } from '../../redux/news/news-actions';
import { fetchNews } from '../../redux/news/news-operations';
import { selectNews } from '../../redux/news/news-selectors';
import styles from './News.module.css';
import NewsList from './NewsList';
import SearchForm from './SearchForm';

// class News extends React.Component {
//   state = {
//     isLoading: false,
//     lastQuery: "",
//     currentPage: 1,
//   };

//   handleSubmit = (query) => {
//     if (query !== this.state.lastQuery) {
//       this.setState({ isLoading: true});
//       let options = { query, page: 1 };
//       this.props.fetchNews(options);
//       this.setState({ lastQuery: options.query, page: 1 });
//     }
//   };

//   componentDidUpdate(prevProps) {
//     if (prevProps.news !== this.props.news) {
//       this.setState({ isLoading: false });
//     }
//   }

//   getMoreNews = () => {
//     let { lastQuery, currentPage } = this.state;
//     let options = { query: lastQuery, page: currentPage + 1 };
//     this.setState({ isLoading: true });
//     this.props.fetchNews(options);
//     this.setState((state) => ({
//       currentPage: state.currentPage + 1,
//     }));
//   };

//   render() {
//     return (
//       <div className={styles.newsBox}>
//         <h1 className={styles.title}>News</h1>
//         <SearchForm handleSubmit={this.handleSubmit} />
//         <NewsList news={this.props.news} />
//         {this.state.isLoading ? (
//           <p className={styles.loader}>IS LOADING</p>
//         ) : this.props.news.length > 0 ? (
//           <button
//             type="button"
//             onClick={this.getMoreNews}
//             className={styles.btn}
//           >
//             Download more
//           </button>
//         ) : null}
//       </div>
//     );
//   }
// }



const News = ({news, fetchNews})=>{
  const [isLoading, setIsLoading] = useState(false);
  const [lastQuery, setLastQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSubmit=(query)=>{
    if (query !== lastQuery) {
      setIsLoading(true);
      let options = { query, page: 1 };
      fetchNews(options);
      setCurrentPage(1);
      setLastQuery(query);
    }
  }

  const getMoreNews=()=>{
    let options = { query: lastQuery, page: currentPage + 1 };
    setIsLoading(true);
    fetchNews(options);
    setCurrentPage(currentPage+1);
  }

  useEffect(()=>{
    setIsLoading(false)}, [news])

  return (
    <div className={styles.newsBox}>
      <h1 className={styles.title}>News</h1>
      <SearchForm handleSubmit={handleSubmit} />
      <NewsList news={news} />
      {isLoading ? (
        <p className={styles.loader}>IS LOADING</p>
      ) : news.length > 0 ? (
        <button
          type="button"
          onClick={getMoreNews}
          className={styles.btn}
        >
          Download more
        </button>
      ) : null}
    </div>
  );
}

 
const mapStateToProps = (state)=>({
    news: selectNews(state),

});


const mapDispatchToProps = (dispatch)=> ({
    fetchNews: (options)=>dispatch(fetchNewsSaga(options))
})

export default connect(mapStateToProps, mapDispatchToProps)(News);