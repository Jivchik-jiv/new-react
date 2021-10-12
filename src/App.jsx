import React from 'react';
import { Redirect, Route, Switch} from 'react-router-dom'
import BooksShelf from './components/BooksShelf';
import Homepage from './components/Homepage';
import ImageGallery from './components/ImageGallery';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import Sendbox from './components/Sendbox';




const App = () => {
    return (
        <div>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route path="/imagegallery" component={ImageGallery}/>
                <Route path="/sendbox" component ={Sendbox}/>
                <Route path="/booksshelf" component ={BooksShelf}/>
                <Redirect from="/redirect" to="/" />
                <Route  component ={NotFound}/>
               
              
            </Switch>
        </div>
    )
}

export default App;