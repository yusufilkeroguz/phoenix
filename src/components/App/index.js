import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { withAuthentication } from '../Session';

import Homepage from "../Homepage";
import SignIn from "../SignIn";
import { HOMEPAGE, SIGNIN } from "../../constants/routes";


function App(props) {
  return (
    <Fragment>
      <Router>
        <Route path={HOMEPAGE} component={Homepage} />
        <Route path={SIGNIN} component={SignIn} />
      </Router>
    </Fragment>
  );
}

export default withAuthentication(App);
