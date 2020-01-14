import React from "react";
import City from "../city/City.component";
import SlickSlider from "../slider/Slider.component";

function Cities(props) {
  const cities = props.cities.map((city, i) => {
    return (
      <div key={i} className="col s3">
        <City city={city} key={i} />
      </div>
    );
  });
  return <SlickSlider elements={cities} />;
}

export default Cities;
