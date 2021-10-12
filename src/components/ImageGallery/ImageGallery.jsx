import React from "react";
import styles from "./ImageGallery.module.css";
import Images from "./Images";
import { imagesAPI } from "../../api/api";
import Searchbar from "./Searchbar";
import Button from "./Button";
import GalleryModal from "./GalleryModal";
import Loader from "react-loader-spinner";

class ImageGallery extends React.Component {
  state = {
    images: [],
    query: "",
    currentPage: 1,
    showModal: false,
    bigImageUrl: "",
    isLoading: false
  };

  componentDidMount() {
    imagesAPI.fetchImages().then((images) => {
      this.setState({ images });
    });
  }

  onSearchSubmit = (query) => {
    imagesAPI.fetchImages(query).then((images) => {
      this.setState({ images, query, currentPage: 1 });
    });
  };

  getMoreImages = () => {
    let { query, currentPage } = this.state;
    this.setState({isLoading: true});
    imagesAPI.fetchImages(query, currentPage + 1).then((images) => {
      this.setState((prevState) => {
        return {
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
          isLoading: false
        };
      });
    });
  };

  onImageClick = (url) => {
    this.setState({ bigImageUrl: url, showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className={styles.gallery}>
        <Searchbar onSearchSubmit={this.onSearchSubmit} />
        <Images images={this.state.images} onImageClick={this.onImageClick} />
        {this.state.isLoading?<Loader
        style={{textAlign:"center"}}
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
        />
    :<Button handleClick={this.getMoreImages} />}
        
        {this.state.showModal && (
          <GalleryModal
            url={this.state.bigImageUrl}
            hideModal={this.hideModal}
          />
        )}
      </div>
    );
  }
}

export default ImageGallery;
