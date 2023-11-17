import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

const NavConnexion = () => {
  const { toggleModals } = useContext(UserContext);
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      toggleModals("disconnected");
      navigate("/");
    } catch (err) {
      alert(
        `For some reasons we can't deconnect, please check your internet connexion and retry`
      );
    }
  };

  return (
    <nav className="navbar navbar-light px-4 justify-content-end">
      {!user.isAuthentificated ? (
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
        </div>
      ) : (
        <div className="user">
          <button>EVENEMENTS</button>
          <div>
            <div className="user-icon">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="nav-con">
              <button onClick={() => navigate("/")}>Mon compte</button>
              <button
                onClick={() => {
                  logOut();
                  console.log(user);
                }}
              >
                se déconnecter
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavConnexion;
