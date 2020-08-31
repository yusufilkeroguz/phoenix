import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import { config } from "../../constants/firebase";

let auth;
let database;

export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const doSignOut = () => auth.signOut();

function Firebase() {
  app.initializeApp(config);

  auth = app.auth();
  database = app.database();

  return {
    auth,
    database
  };
}

export default Firebase;