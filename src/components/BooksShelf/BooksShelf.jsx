import React from "react";
import { Route, Switch } from "react-router-dom";
import Authors from "./Authors";
import Books from "./Books";
import BookView from "./BookView";
import routes from "../../routes";
import Navigation from "./Navigation";

class BooksShelf extends React.Component {

  render() {
    return (
      <div>
        <Navigation/>
        <Switch>
            <Route path={routes.booksShelf.bookView} component={BookView}/>
            <Route path={routes.booksShelf.books} component={Books} />
            <Route path={routes.booksShelf.authors} component={Authors} />
        </Switch>
        
      </div>
    );
  }
}

export default BooksShelf;
