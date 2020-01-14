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

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="home col s12">
            <div className="upper-fold">
              <SearchBox />
            </div>
          </div>
          <div className="col s12">
            <Cities cities={this.state.cities} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
