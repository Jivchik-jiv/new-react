import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Authors from "./Authors";
import Books from "./Books";
import BookView from "./BookView";
import routes from "../../routes";
import Navigation from "./Navigation";
import axios from "axios";

const apiKey = "APzmJ0apdYgy4qZa8XvLXdIBabthuxwtDUYLGpe0";


const BooksShelf =()=> {

  const [images, setImages]=useState([]);

    
  useEffect(()=>{
    const controller= new AbortController();
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2021-01-01&end_date=2021-01-10`,{
      signal: controller.signal
    })
    .then(response=>{
      console.log("Get result");
        setImages(response.data)
      })
      .catch(error=>{
        debugger;
        console.log(error)
      })
    
    return ()=>{
      console.log("Unmounted");
      debugger;
      controller.abort()
    }
  },[])

    return (
      <div>
        <Navigation/>
        <Switch>
            <Route path={routes.booksShelf.bookView} component={BookView}/>
            <Route path={routes.booksShelf.books} component={Books} />
            <Route path={routes.booksShelf.authors} component={Authors} />
        </Switch>
        <div>
          {images.map(image=>{
            return <img src={image.url} key={image.url}/>
          })}
        </div>
        
      </div>
    );
}

export default BooksShelf;
