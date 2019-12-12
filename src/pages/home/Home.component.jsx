import React from "react";

import "./Home.styles.scss";

import SearchBox from "../../components/searchbox/SearchBox.component";

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="home col s12"></div>
          <div className="upper-fold">
            <SearchBox />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
