import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch} from 'react-router-dom'
import Homepage from './components/Homepage';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import routes from './routes';


const Nasa = lazy(()=>import('./components/Nasa' /*webpackChunkName: "nasa" */) );
const ImageGallery = lazy(()=>import('./components/ImageGallery' /*webpackChunkName: "image-gallery" */) );
const Sendbox = lazy(()=>import('./components/Sendbox' /*webpackChunkName: "sendbox" */) );
const BooksShelf = lazy(()=>import('./components/BooksShelf' /*webpackChunkName: "books-shelf" */) );


const App = () => {
    return (
        <div>
            <Navigation/>
            <Suspense fallback={null}>
            <Switch>
                <Route exact path={routes.home} component={Homepage}/>
                <Route path={routes.imageGallery} component={ImageGallery}/>
                <Route path={routes.sendbox} component ={Sendbox}/>
                <Route path={routes.booksShelf.main} component ={BooksShelf}/>
                <Route path={routes.nasa.main} component={Nasa}/>
                <Route  component ={NotFound}/>
                <Redirect from="/redirect" to="/" />
               
              
            </Switch>
            </Suspense>
        </div>
    )
}

export default App;


// Видео 1 час. 9урок. Необходимо рефакторить редьюсер. Разбить на несколько.