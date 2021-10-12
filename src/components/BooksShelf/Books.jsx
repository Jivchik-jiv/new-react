import axios from "axios";
import React from "react";
import { NavLink} from "react-router-dom";


class Books extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    //Данный компонент используется в двух разных местах. Если он открывается из компонента Authors, то в него передаются пропсы books с необходимыми данными. 
    // Если он открывается из компонента BookShelf, то пропсы не передаются, и необходимо получить список книг из базы данных.
    if (!this.props.books) {
      axios.get("http://localhost:3001/books").then(({ data }) => {
        this.setState({ books: data });
      });
    } else {
      this.setState({ books: this.props.books });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.books) {
      if (prevProps.match.params.authorId !== this.props.match.params.authorId) {
        this.setState({ books: this.props.books });
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Books</h1>
        <ul>
          {this.state.books &&
            this.state.books.map((book) => {
              return (
                <li key={book.id}>
                  <NavLink to={`/booksshelf/books/${book.id}`} key={book.id}>
                    {book.name}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default Books;
