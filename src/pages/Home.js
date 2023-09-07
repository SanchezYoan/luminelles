import React from "react";
import { projectsData } from "../data/presentation";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <SocialNetwork />
      <div className="logo-luminelles">
        <img src="./img/logo-luminelles.png" alt="luminelles" />
      </div>
      <div className="intro">
        <div className="intro-container">
          <div>{projectsData[0].intro1}</div>
          <div>{projectsData[0].intro2}</div>
          <div>{projectsData[0].intro3}</div>
          <div>{projectsData[0].intro4}</div>
        </div>
        <div className="img-intro">
          <div className="profil">
            <img src="./img/profil.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
