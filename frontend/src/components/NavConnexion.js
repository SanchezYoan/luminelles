import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

const NavConnexion = () => {
  const { toggleModals } = useContext(UserContext);
  const [navAccount, setNavAccount] = useState(false);
  const { currentUser } = useContext(UserContext);

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

  const toggleNavAccount = () => {
    setNavAccount((prevNavAccount) => !prevNavAccount);
  };

  return (
    <nav className="navbar">
      {!currentUser ? (
        <div>
          <button onClick={() => toggleModals("signUp")} className="btn">
            Inscription
          </button>
          <button onClick={() => toggleModals("signIn")} className="btn">
            Connexion
          </button>
        </div>
      ) : (
        <div className="user">
          <a id="envents" onClick={() => navigate("/private/comments")}>
            Évènements
          </a>

          <div id="usericon" onClick={toggleNavAccount}>
            <i className="fa-regular fa-user"></i>
          </div>

          {navAccount && (
            <ul className="nav-projects">
              <li
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
                onClick={() => navigate("/")}
              >
                Mon compte
              </li>
              <li
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
                onClick={() => {
                  logOut();
                }}
              >
                Se déconnecter
              </li>
            </ul>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavConnexion;
