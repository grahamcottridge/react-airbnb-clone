import React, { Component } from "react";
import "./SingleFullVenue.styles.scss";
import axios from "axios";
import Point from "./Point";

class SingleFullVenue extends Component {
  state = {
    singleVenue: {},
    points: []
  };

  async componentDidMount() {
    const vId = this.props.match.params.vid;
    const url = `${window.apiHost}/venue/${vId}`;
    const axiosResponse = await axios.get(url);
    const singleVenue = axiosResponse.data;

    const pointsUrl = `${window.apiHost}/points/get`;
    const pointsAxiosResponse = await axios.get(pointsUrl);

    const points = singleVenue.points.split(",").map((point, i) => {
      return (
        <Point key={i} pointDesc={pointsAxiosResponse.data} point={point} />
      );
    });

    this.setState({ singleVenue });
  }

  render() {
    const sv = this.state.singleVenue;
    return (
      <div className="row single-venue">
        <div className="col s12 center">
          <img src={sv.imageUrl} />
        </div>
        <div className="col s8 location-details offset-s2">
          <div className="col s8 left-details">
            <div className="location">{sv.location}</div>
            <div className="title">{sv.title}</div>
            <div className="guests">{sv.guests}</div>
            <div className="divider"></div>
            {this.state.points}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleFullVenue;
