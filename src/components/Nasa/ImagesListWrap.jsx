import React from "react";
import { nasaApi } from "../../api/nasa-api";
import Loader from 'react-loader-spinner';
import ImagesList from "./ImagesList";

class ImagesListWrap extends React.Component {
  state = {
    images: [],
    isLoading: false,
  };

  componentDidMount() {
    if(this.props.images){
      this.setState({images: this.props.images})
    }else{
      this.setState({isLoading: true})
      nasaApi.fetchImages().then((images) => {
        this.setState({ images,  isLoading: false});
      });
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.images){
      if(prevProps.images.length!==this.props.images.length){
        this.setState({images: this.props.images})
      }
    }
  }

  render() {
    let {images, isLoading}=this.state;
    return (
      <div>
        <h2>{this.props.title || "Top images"}</h2>
        {isLoading&&<Loader type="Circles" color="#45009e"/>}
        {images.length>0&&<ImagesList images={images}/>}
      </div>
    );
  }
}

export default ImagesListWrap;

