import React from "react";
import ImagesListWrap from "./ImagesListWrap";
import styles from "./Nasa.module.css";
import Loader from "react-loader-spinner";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import { fetchNasaImages } from "../../redux/nasa/nasa-operations";
import { selectNasaSearchedImages } from "../../redux/nasa/nasa-selectors";
import { clearSearchedImages } from "../../redux/nasa/nasa-actions";

class ImageSearch extends React.Component {
  state = {
    isLoading: false,
    startDate: "",
    endDate: "",
  };

  componentDidMount() {
    if (!this.props.match.isExact) {
      let dates = this.getDates(this.props.location.pathname);
      this.setState({
        isLoading: true,
        startDate: dates.start,
        endDate: dates.end,
      });
      
      this.props.fetchImages(dates)

    }
  }

  componentDidUpdate(prevProps){
    let isPrevEpmpty=prevProps.searchedImages.length===0;
    let isThisFull=this.props.searchedImages.length>0;
    if(isPrevEpmpty&&isThisFull){
      this.setState({isLoading: false})
    }

    if (this.props.match.isExact&&isThisFull){
      this.props.clearImages();
      this.setState({startDate:"", endDate:""})
    }
  }

  componentWillUnmount(){
    this.props.clearImages()
  }

  

  getDates = (str) => {
    let datesArr = str.match(/(\d{4}-\d\d-\d\d)_(\d{4}-\d\d-\d\d)/);
    return {start: datesArr[1], end: datesArr[2]};
  };

  handleDateChange = (e) => {
    switch (e.target.name) {
      case "start":
        this.setState({ startDate: e.target.value });
        break;
      case "end":
        this.setState({ endDate: e.target.value });
        break;
      default:
        break;
    }
  };

  handleSubmit = () => {
    this.setState({isLoading: true});
    this.props.clearImages()
    this.props.history.push(
      `${this.props.match.path}/${this.state.startDate}_${this.state.endDate}`
    );

    let dates={start: this.state.startDate, end: this.state.endDate};

    this.props.fetchImages(dates)
  };

  render() {
    return (
      <div className={styles.searchWrap}>
        <SearchForm
          onSubmit={this.handleSubmit}
          onDateChange={this.handleDateChange}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
        {this.state.isLoading && <Loader type="Circles" color="#45009e" />}
        {this.props.searchedImages.length>0 && (
          <ImagesListWrap {...this.props} title="Images of the selected days" isSearched={true}/>
        )}
      </div>
    );
  }
}

const mapDispatchToProps=(dispatch)=>({
  fetchImages: (dates)=>dispatch(fetchNasaImages(dates)),
  clearImages: ()=>dispatch(clearSearchedImages())
})

const mapStateToProps=(state)=>({
  searchedImages: selectNasaSearchedImages(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageSearch);
