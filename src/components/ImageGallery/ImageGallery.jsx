import React from "react";
import styles from "./ImageGallery.module.css";
import Images from "./Images";
import Searchbar from "./Searchbar";
import Button from "./Button";
import GalleryModal from "./GalleryModal";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import {fetchImages } from "../../redux/image-gallery/imageGallery-operations";
import { selectImages } from "../../redux/image-gallery/imageGallery-selectors";


class ImageGallery extends React.Component {
  state = {
    query: "",
    currentPage: 1,
    showModal: false,
    bigImageUrl: "",
    isLoading: false
  };

  componentDidMount() {
    this.setState({isLoading: true});
    this.props.fetchImages();
  }

  componentDidUpdate(prevProps){
    if(prevProps.images!==this.props.images){
      this.setState({isLoading: false})
    }
  }

  onSearchSubmit = (query) => {
    this.props.fetchImages({query, page:1});
    this.setState({currentPage: 1, query})
  };

  getMoreImages = () => {
    let { query, currentPage } = this.state;
    let options= {query, page:currentPage+1};
    this.setState({isLoading: true});
    this.props.fetchImages(options);
    this.setState(state=>({currentPage: state.currentPage+1}))
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
        <Images onImageClick={this.onImageClick} images={this.props.images}/>
        {this.state.isLoading?<Loader
        style={{textAlign:"center"}}
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
        />
    :this.state.query
    ?<Button handleClick={this.getMoreImages} />
  :null}
        
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

const mapDispatchToProps=(dispatch)=> ({
  fetchImages: (query)=>dispatch(fetchImages(query))
})

const mapStatetoProps =(state)=> ({
  images: selectImages(state)
})

export default connect(mapStatetoProps, mapDispatchToProps)(ImageGallery);
