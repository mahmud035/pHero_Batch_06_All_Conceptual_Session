import React, { createContext } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import app from '../firebase/firebase.init';

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

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

  //* google signin
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //* logout
  const logout = () => {
    return signOut(auth);
  };

  const authInfo = {
    createUser,
    updateName,
    verifyEmail,
    signInWithGoogle,
    logout,
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default UserContext;
