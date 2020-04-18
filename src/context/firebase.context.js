import React, { useEffect, useState } from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { useHistory } from 'react-router-dom';

const FirebaseContext = React.createContext(null);

const getUserProfileDetails = profile => ({
  email: profile.email,
  id: profile.uid,
  displayName: profile.displayName,
  photoURL: profile.photoURL,
});

const config = {
  apiKey: 'AIzaSyD6OoLkGyOU70tVQjYh_KR09c8ynOGZzZc',
  authDomain: 'spotify-544a2.firebaseapp.com',
  databaseURL: 'https://spotify-544a2.firebaseio.com',
  projectId: 'spotify-544a2',
  storageBucket: 'spotify-544a2.appspot.com',
  messagingSenderId: '222450021060',
  appId: '1:222450021060:web:7f49571c063149bae9cf91',
  measurementId: 'G-BWGJ6LMVTK',
};

export function FirebaseProvider(props) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    app.initializeApp(config);
    app.auth().onAuthStateChanged(u => {
      if (u) {
        console.log(0);
        setUser(getUserProfileDetails(u));
      }
      setIsLoading(false);
    });
  }, []);

  const loginLocal = ({ email, password }) =>
    app.auth().signInWithEmailAndPassword(email, password);

  const signup = ({ email, password, name: displayName }) =>
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async user => {
        const { currentUser } = app.auth();
        await currentUser.updateProfile({
          displayName,
        });
        setUser(getUserProfileDetails(currentUser));
      });

  const logout = () =>
    app
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        history.push('/login');
      });

  if (isLoading) {
    return 'loading...';
  }
  return (
    <FirebaseContext.Provider
      value={{ user, loginLocal, signup, logout }}
      {...props}
    />
  );
}

export const useFirebase = props => {
  const context = React.useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error(`useFirebase must be used within a FirebaseContext`);
  }
  return context;
};
