import React from "react";
import { Link, Route } from "react-router-dom";
import IconButton from "../common/Buttons/IconButton";
import ImageDetailes from "./ImageDetailes";
import ImageView from "./ImageView";
import {ReactComponent as BackButton} from '../../Icons/back.svg';
import styles from "./Nasa.module.css";
import routes from "../../routes";
import { connect } from "react-redux";
import { fetchNasaImages } from "../../redux/nasa/nasa-operations";
import { selectNasaImageView } from "../../redux/nasa/nasa-selectors";
import { clearImageView } from "../../redux/nasa/nasa-actions";

class ImageWrap extends React.Component {
  state = {
    image: {},
  };

  componentDidMount() {
    let date = this.props.match.params.imageDate;
    let params={isSingle: true, date}
    this.props.fetchImage(params)
  }

  componentWillUnmount(){
    this.props.clearImage()
  }

  goBack=()=>{
    this.props.history.push(this.props.location?.state?.pathname||routes.nasa.images)
  }

  render() {
    let { title, hdurl, copyright, date, explanation } = this.props.imageView;
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

const mapDispatchToProps= (dispatch)=>({
  fetchImage: (date)=>dispatch(fetchNasaImages(date)),
  clearImage: ()=>dispatch(clearImageView())
})

const mapStateToProps=(state)=>({
  imageView: selectNasaImageView(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageWrap);
