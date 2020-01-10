import React, { Component } from "react";
import "./City.styles.scss";

class City extends Component {
  render() {
    const { cityName, image, price } = this.props.city;
    return (
      <div className="city col s12">
        <div className="image">
          <img src={image} />
        </div>
        <div className="city-name">{cityName}</div>
        <div className="price">${price}/night average</div>
      </div>
    );
  }
}

export default City;
