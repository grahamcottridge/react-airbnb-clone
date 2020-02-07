import React, { Component } from "react";
import Activity from "../activity/Activity.component";
import "../activity/Activity.styles.scss";

class Activities extends Component {
  render() {
    const activities = this.props.activities.map((activity, i) => {
      return (
        <div key={i} className="col s3">
          <Activity activity={activity} key={i} />
        </div>
      );
    });
    return <div className="activity">{activities}</div>;
  }
}

export default Activities;
