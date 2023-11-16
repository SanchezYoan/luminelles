import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Observator
      setCurrentUser(currentUser);
      setLoadingData(false);
    });
    return unsubscribe;
  }, []);

  const signUp = (email, pwd) => {
    createUserWithEmailAndPassword(auth, email, pwd)
      .then((userCredential) => {
        // Sign up
        console.log("SUCCESS" + userCredential);
      })
      .catch((error) => {
        console.log("ERROR CODE: " + error.code);
        console.log("ERROR MESSAGE: " + error.message);
      });
  };

  const signIn = (email, pwd) => {
    signInWithEmailAndPassword(auth, email, pwd)
      .then((userCredential) => {
        // Sign in

        console.log("SUCCESS" + userCredential);
      })
      .catch((error) => {
        console.log("ERROR CODE: " + error.code);
        console.log("ERROR MESSAGE: " + error.message);
      });
  };

  //modal
  const [user, setUser] = useState({ name: "", isAuthentificated: false });
  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false,
  });

  const toggleModals = (modal) => {
    if (modal === "signIn") {
      setModalState({
        signUpModal: false,
        signInModal: true,
      });
    }
    if (modal === "signUp") {
      setModalState({
        signUpModal: true,
        signInModal: false,
      });
    }
    if (modal === "close") {
      setModalState({
        signUpModal: false,
        signInModal: false,
      });
    }
    if (modal === "connected") {
      setUser({
        isAuthentificated: true,
      });
    }
    if (modal === "disconnected") {
      setUser({
        isAuthentificated: false,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{ modalState, toggleModals, signUp, signIn, currentUser, user }}
    >
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
