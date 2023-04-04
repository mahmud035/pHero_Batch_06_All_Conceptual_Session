import React, { createContext } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import app from '../firebase/firebase.init';

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  //* create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //* update name
  const updateName = (name) => {
    return updateProfile(auth.currentUser, { displayName: name });
  };

  //* verify email
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const authInfo = { createUser, updateName, verifyEmail };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default UserContext;
