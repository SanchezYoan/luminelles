import React from "react";
import { HomeData } from "../data/homeData";
import Navigation from "../components/Navigation";
import NavConnexion from "../components/NavConnexion";

const Home = () => {
  return (
    <div className="home">
      <Navigation />

      <div className="logo-luminelles">
        <img
          className="logo"
          src="./assets/img/logo-luminelles.png"
          alt="luminelles"
        />
      </div>
      <div className="intro">
        <div className="intro-container">
          <div>
            {HomeData[0].intro1}

            <i className="fa-solid fa-venus"></i>
          </div>
          <div>{HomeData[0].intro2}</div>
          <div>{HomeData[0].intro3}</div>
          <div>{HomeData[0].intro4}</div>
        </div>
        <div className="img-intro">
          <div className="profil">
            {/* <img src="./assets/img/profil.png" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;