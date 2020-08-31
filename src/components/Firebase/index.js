import FirebaseContext, { withFirebase } from './context';
import Firebase, { doSignInWithEmailAndPassword, doSignOut } from './firebase';

export { FirebaseContext, doSignInWithEmailAndPassword, doSignOut, withFirebase };

export default Firebase;