import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Authors from "./Authors";
import Books from "./Books";
import styles from "./BooksShelf.module.css";
import BookView from "./BookView";

class BooksShelf extends React.Component {

  getId =()=>{
    let pathname=this.props.location.pathname;
    let id=pathname.match(/\w+$/)[0];
    return id

  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/booksshelf/books" activeClassName={styles.active}>
                Books
              </NavLink>
            </li>
            <li>
              <NavLink to="/booksshelf/authors" activeClassName={styles.active}>
                Authors
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
            <Route path="/booksshelf/books/:bookId" component={BookView}/>
            <Route path="/booksshelf/books" component={Books} />
            <Route path="/booksshelf/authors" component={Authors} />
        </Switch>
        
      </div>
    );
  }
}

export default BooksShelf;
