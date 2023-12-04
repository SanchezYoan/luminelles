import React from "react";
import { HomeData } from "../data/homeData";

const Home = () => {
  return (
    <div className="home">
      <div className="logo-luminelles">
        <img
          className="logo"
          src="./assets/img/logo-luminelles.png"
          alt="luminelles"
        />
      </div>
      <div className="intro">
        <div className="intro-container">
          <div className="intro-contents">
            <div>
              {HomeData[0].intro1}

              <i className="fa-solid fa-venus"></i>
            </div>
            <div>{HomeData[0].intro2}</div>
            <div className="profil">
              <img src="./assets/img/IMG-Arbre.jpg" alt="" />
              <img src="./assets/img/IMG-bienetre.png" alt="" />
              <img src="./assets/img/IMG-Yoga.jpg" alt="" />
            </div>
            <div>{HomeData[0].intro3}</div>
            <div>{HomeData[0].intro4}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
