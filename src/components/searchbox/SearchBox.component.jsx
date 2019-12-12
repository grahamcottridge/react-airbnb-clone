import React from "react";

import "./SearchBox.styles.scss";

class SearchBox extends React.Component {
  state = {
    where: "",
    checkIn: "",
    checkOut: "",
    guests: 0
  };

  changeWhere = e => {
    this.setState({ where: e.target.value });
  };

  changeCheckIn = e => {
    this.setState({ checkIn: e.target.value });
  };

  changeCheckOut = e => {
    this.setState({ checkOut: e.target.value });
  };

  changeGuests = e => {
    this.setState({ guests: e.target.value });
  };

  render() {
    return (
      <div className="home-search-box col m4">
        <h1>Book unique places to stay and things to do.</h1>

        <form className="search-box-form">
          <div className="col m12">
            <div className="form-label">Where</div>
            <div className="input-field" id="where">
              <input
                onChange={this.changeWhere}
                className="browser-default"
                placeholder="Anywhere"
                value={this.state.where}
                type="text"
              />
            </div>
          </div>
          <div className="col m6">
            <div className="form-label">Check-in</div>
            <div className="input-field" id="check-in">
              <input
                onChange={this.changeCheckIn}
                className="browser-default"
                placeholder="check-in"
                value={this.state.checkIn}
                type="date"
              />
            </div>
          </div>
          <div className="col m6">
            <div className="form-label">Check-out</div>
            <div className="input-field" id="check-in">
              <input
                onChange={this.changeCheckOut}
                className="browser-default"
                placeholder="check-in"
                value={this.state.checkOut}
                type="date"
              />
            </div>
          </div>
          <div className="col m12">
            <div className="form-label">Guests</div>
            <div className="input-field" id="guests">
              <input
                onChange={this.changeGuests}
                className="browser-default"
                placeholder="Anywhere"
                value={this.state.guests}
                type="number"
              />
            </div>
          </div>
          <div className="col m12 submit-btn">
            <div className="input-field" id="submit-btn">
              <input
                className="btn-large waves-effect waves-light red accent-2"
                type="submit"
              ></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
