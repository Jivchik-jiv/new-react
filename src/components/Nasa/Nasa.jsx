import React from "react";
import { Route, Switch } from "react-router-dom";
import ImageWrap from "./ImageWrap";
import ImageSearch from "./ImageSearch";
import ImagesListWrap from "./ImagesListWrap";
import styles from "./Nasa.module.css";
import routes from "../../routes";
import Navigation from "./Navigation";

class Nasa extends React.Component {
  render() {
    return (
      <div className={styles.nasa}>
        <h1>Nasa</h1>
        <Navigation />
        <Switch>
          <Route path={routes.nasa.imageView} component={ImageWrap} />
          <Route path={routes.nasa.images} component={ImagesListWrap} />
          <Route path={routes.nasa.search} component={ImageSearch} />
        </Switch>
      </div>
    );
  }
}

export default Nasa;
