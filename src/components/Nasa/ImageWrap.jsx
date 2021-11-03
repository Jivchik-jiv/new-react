import React from "react";
import { Link, Route } from "react-router-dom";
import { nasaApi } from "../../api/nasa-api";
import IconButton from "../common/Buttons/IconButton";
import ImageDetailes from "./ImageDetailes";
import ImageView from "./ImageView";
import {ReactComponent as BackButton} from '../../Icons/back.svg';
import styles from "./Nasa.module.css";
import routes from "../../routes";

class ImageWrap extends React.Component {
  state = {
    image: {},
  };

  componentDidMount() {
    let date = this.props.match.params.imageDate;
    nasaApi.fetchImages(date).then((image) => {
      this.setState({ image });
    });
  }

  goBack=()=>{
    this.props.history.push(this.props.location?.state?.pathname||routes.nasa.images)
  }

  render() {
    let { title, hdurl, copyright, date, explanation } = this.state.image;
    return (
      <div className={styles.imgWrap}>
        <IconButton onClick={this.goBack} className={styles.iconBtn}><BackButton width="50" height="50"/></IconButton>
        <ImageView title={title} url={hdurl} />
        <div className={styles.imgDetailes}>
          {this.props.match.isExact && (
            <Link
              to={`${this.props.match.url}/info`}
              className={styles.detailesLink}
            >
              Show detailes
            </Link>
          )}

          <Route
            path={`${this.props.match.path}/info`}
            render={() => {
              return (
                <ImageDetailes
                  copyright={copyright}
                  date={date}
                  explanation={explanation}
                />
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default ImageWrap;
