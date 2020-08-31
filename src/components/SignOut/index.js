import React from 'react';

import { withFirebase, doSignOut } from '../Firebase';

const SignOut = () => (
  <a href="/" type="button" onClick={e => {
    e.preventDefault()
    return doSignOut();
  }}
  >
    Sign Out
  </a>
);

export default withFirebase(SignOut);