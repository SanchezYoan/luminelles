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
          <span id="envents" onClick={() => navigate("/private/comments")}>
            Évènements
          </span>

          <div id="usericon" onClick={toggleNavAccount}>
            <i className="fa-regular fa-user"></i>
          </div>

          {navAccount && (
            <ul className="nav-account">
              <li
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
                onClick={() => navigate("/")}
              >
                <button>Mon compte</button>
              </li>
              <li
                className={(nav) =>
                  nav.isActive ? "nav-active hover" : "hover"
                }
                onClick={() => {
                  logOut();
                }}
              >
                <button>Se déconnecter</button>
              </li>
            </ul>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavConnexion;
