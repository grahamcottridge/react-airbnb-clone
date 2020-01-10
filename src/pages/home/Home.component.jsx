import React from "react";
import "./Home.styles.scss";
import SearchBox from "../../components/searchbox/SearchBox.component";
import Spinner from "../../components/spinner/Spinner.component";
import Cities from "../../components/cities/Cities.component";
import axios from "axios";

class Home extends React.Component {
  state = {
    cities: []
  };

  async componentDidMount() {
    const recommendedCities = await axios.get(
      `${window.apiHost}/cities/recommended`
    );
    this.setState({
      cities: recommendedCities.data
    });
  }

  render() {
    if (this.state.cities.length === 0) {
      return <Spinner />;
    }

    const recCities = <Cities cities={this.state.cities} />;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="home col s12"></div>
          <div className="upper-fold">
            <SearchBox />
          </div>
        </div>
        {recCities}
      </div>
    );
  }
}

export default Home;
