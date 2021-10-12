import axios from "axios";
import React from "react";
import { NavLink, Route } from "react-router-dom";
import Books from "./Books";
import styles from "./BooksShelf.module.css";

class Authors extends React.Component {
  state = {
    authors: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3001/authors?_embed=books").then(({ data }) => {
      this.setState({ authors: data });
    });
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <ul>
          {this.state.authors &&
            this.state.authors.map((author) => {
              return (
                <li key={author.id}>
                  <NavLink
                    to={`${this.props.match.url}/${author.id}/books`}
                    key={author.id}
                    activeClassName={styles.active}
                  >
                    {author.name}
                  </NavLink>
                </li>
              );
            })}
        </ul>
        {this.state.authors.length&&(
        <Route
          path={`${this.props.match.path}/:authorId/books`}
          render={(props) => {  
          
            let authorId=Number(props.match.params.authorId);
            let {books}= this.state.authors.find(author=>author.id===authorId);
            
          return <Books books={books} {...props}
         />}}
        />)}
      </div>
    );
  }
}

export default Authors;
