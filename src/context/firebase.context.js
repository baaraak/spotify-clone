import React, { useEffect, useState } from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const FirebaseContext = React.createContext(null);

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

  useEffect(() => {
    app.initializeApp(config);
    app.auth().onAuthStateChanged(u => {
      setUser(u);
    });
  }, []);

  const loginLocal = ({ email, password }) =>
    app.auth().signInWithEmailAndPassword(email, password);
  const register = ({ email, password }) =>
    app.auth().createUserWithEmailAndPassword(email, password);

  return (
    <FirebaseContext.Provider
      value={{ user, loginLocal, register }}
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
