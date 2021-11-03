import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from "./BooksShelf.module.css";

const Navigation = ()=>{
    return <nav>
    <ul>
      <li>
        <NavLink to={routes.booksShelf.books} activeClassName={styles.active}>
          Books
        </NavLink>
      </li>
      <li>
        <NavLink to={routes.booksShelf.authors} activeClassName={styles.active}>
          Authors
        </NavLink>
      </li>
    </ul>
  </nav>
}

export default Navigation;