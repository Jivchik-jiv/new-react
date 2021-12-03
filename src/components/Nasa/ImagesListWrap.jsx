import React from "react";
import Loader from 'react-loader-spinner';
import ImagesList from "./ImagesList";
import { connect } from "react-redux";
import { selectNasaSearchedImages, selectNasaTopImages } from "../../redux/nasa/nasa-selectors";
import { fetchNasaImages } from "../../redux/nasa/nasa-operations";

class ImagesListWrap extends React.Component {
  state = {
    isLoading: false,
  };

  componentDidMount() {
    if(this.props.topImages.length===0&&!this.props.isSearched){
      this.setState({isLoading:true})
      this.props.fetchTopImages()
    }
    
    
  }

  componentDidUpdate(prevProps){
    if(prevProps.topImages!==this.props.topImages){
      
        this.setState({isLoading: false})
    } 
  }

  render() {
    let { isLoading}=this.state;
    let {topImages, isSearched, searchedImages}=this.props;
    let images=isSearched?searchedImages:topImages;
    return (
      <div>
        <h2>{this.props.title || "Top images"}</h2>
        {isLoading&&<Loader type="Circles" color="#45009e"/>}
        {<ImagesList images={images}/>}
      </div>
    );
  }
}

const mapStateToProps=(state)=>({
  topImages:selectNasaTopImages(state),
  searchedImages: selectNasaSearchedImages(state)
});

const mapDispatchToProps=(dispatch)=>({
  fetchTopImages: ()=>dispatch(fetchNasaImages())
})

export default connect(mapStateToProps, mapDispatchToProps)(ImagesListWrap);

