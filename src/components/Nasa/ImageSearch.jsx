import React from "react";
import { nasaApi } from "../../api/nasa-api";
import ImagesListWrap from "./ImagesListWrap";
import styles from "./Nasa.module.css";
import Loader from "react-loader-spinner";
import SearchForm from "./SearchForm";

class ImageSearch extends React.Component {
  state = {
    images: null,
    isLoading: false,
    startDate: "",
    endDate: "",
  };

  componentDidMount() {
    if (!this.props.match.isExact) {
      let dates = this.getDates(this.props.location.pathname);
      this.setState({
        isLoading: true,
        images: null,
        startDate: dates[0],
        endDate: dates[1],
      });
      nasaApi.fetchImages(dates).then((result) => {
        this.setState({ images: result, isLoading: false });
      });
    }
  }

  getDates = (str) => {
    let datesArr = str.match(/(\d{4}-\d\d-\d\d)_(\d{4}-\d\d-\d\d)/);
    return [datesArr[1], datesArr[2]];
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
    this.setState({ isLoading: true, images: null });
    this.props.history.push(
      `${this.props.location.pathname}/${this.state.startDate}_${this.state.endDate}`
    );
    nasaApi
      .fetchImages([this.state.startDate, this.state.endDate])
      .then((result) => {
        this.setState({ images: result, isLoading: false });
      });
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
        {this.state.images && (
          <ImagesListWrap images={this.state.images} {...this.props} />
        )}
      </div>
    );
  }
}

export default ImageSearch;
