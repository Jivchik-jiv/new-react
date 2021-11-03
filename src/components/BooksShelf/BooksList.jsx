import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import BookPreview from './BookPreview';
import styles from './BooksShelf.module.css';


const BooksList =({books})=> {

    return <ul className={styles.listPreview}>
    { books.map((book) => {
        return (
          <li key={book.id} className={styles.itemPreview}>
            <NavLink to={`${routes.booksShelf.books}/${book.id}`} key={book.id} >
              <BookPreview name={book.name} url={book.imgUrl}/>
            </NavLink>
          </li>
        );
      })}
  </ul>
}


export default BooksList;