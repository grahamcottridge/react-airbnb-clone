import React from "react";
import "./Home.styles.scss";
import SearchBox from "../../components/searchbox/SearchBox.component";
import axios from "axios";

class Home extends React.Component {
  componentDidMount() {
    const recommendedCities = axios.get();
  }

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
