import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

const Navbar = () => {
  const { toggleModals } = useContext(UserContext);

  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      alert(
        `For some reasons we can't deconnect, please check your internet connexion and retry`
      );
    }
  };

  return (
    <nav className="navbar navbar-light bg-light px-4 justify-content-end">
      <div>
        <button
          onClick={() => toggleModals("signUp")}
          className="btn btn-primary"
        >
          Sign Up
        </button>
        <button
          onClick={() => toggleModals("signIn")}
          className="btn btn-primary ms-2"
        >
          Sign In
        </button>
        <button
          className="btn btn-danger ms-2"
          onClick={() => {
            logOut();
          }}
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
