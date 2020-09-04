import React, { Fragment } from "react";

import { withAuthorization } from "../Session";
import Header from "../Header";
import Card from "../Card";

import { faUser, faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import Chart from "../Chart";

import "../../styles/homepage.scss";

const HomePage = (props) => {
  props.firebase.database.ref("rt").on("value", (val) => {
    console.log(val)
  });

  return (
    <Fragment>
      <Header />

      <div className="cards">
        <Card url={process.env.REACT_APP_REALTIME_ACTIVE_USERS} icon={faUser} title={"Active Users"} />
        <Card url={process.env.REACT_APP_REALTIME_DOWNLOADS} icon={faDownload} title={"Downloads"} />
        <Card url={process.env.REACT_APP_REALTIME_SESSION_DURATION} icon={faEye} title={"Avg. Session Duration"} />
        <Card url={process.env.REACT_APP_REALTIME_PAID_USERS} icon={faDownload} title={"Paid Users"} />
      </div>

      <div className="charts">
        <Chart url={process.env.REACT_APP_DAILY_ACTIVE_USERS} title={"Daily Active Users"} />
        <Chart url={process.env.REACT_APP_DAILY_DOWNLOADS} title={"Daily Installs"} />
      </div>
    </Fragment>
  )
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);