import React from "react";
import axios from "axios";
import "./Home.styles.scss";
import SearchBox from "../../components/searchbox/SearchBox.component";
import Spinner from "../../components/spinner/Spinner.component";
import Cities from "../../components/cities/Cities.component";
import Activities from "../../components/activities/Activities.component";

class Home extends React.Component {
  state = {
    cities: [],
    europeCities: {},
    asiaCities: {},
    exoticCities: {},
    activities: []
  };

  async componentDidMount() {
    const citiesUrl = `${window.apiHost}/cities/recommended`;
    const europeCitiesUrl = `${window.apiHost}/cities/europe`;
    const asiaCitiesUrl = `${window.apiHost}/cities/asia`;
    const exoticCitiesUrl = `${window.apiHost}/cities/exotic`;

    const citiesPromises = [];

    citiesPromises.push(axios.get(citiesUrl));
    citiesPromises.push(axios.get(europeCitiesUrl));
    citiesPromises.push(axios.get(asiaCitiesUrl));
    citiesPromises.push(axios.get(exoticCitiesUrl));

    Promise.all(citiesPromises).then(data => {
      const recommendedCities = data[0].data;
      const europeCities = data[1].data;
      const asiaCities = data[2].data;
      const exoticCities = data[3].data;

      this.setState({
        cities: recommendedCities,
        europeCities,
        asiaCities,
        exoticCities
      });
    });
    const activitiesUrl = `${window.apiHost}/activities/today`;
    const activities = await axios(activitiesUrl);
    this.setState({
      activities: activities.data
    });
  }

  render() {
    if (this.state.cities.length === 0) {
      return <Spinner />;
    }

    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="home col s12">
              <div className="upper-fold">
                <SearchBox />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid lower-fold">
          <div className="row">
            <div className="col s12">
              <Activities
                activities={this.state.activities}
                header="Today in your area"
              />
            </div>
            <div className="col s12">
              <Cities
                cities={this.state.cities}
                header="Recommended Cities For You"
              />
            </div>
            <div className="col s12">
              <Cities
                cities={this.state.europeCities.cities}
                header={this.state.europeCities.header}
              />
            </div>
            <div className="col s12">
              <Cities
                cities={this.state.asiaCities.cities}
                header={this.state.asiaCities.header}
              />
            </div>
            <div className="col s12">
              <Cities
                cities={this.state.exoticCities.cities}
                header={this.state.exoticCities.header}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
