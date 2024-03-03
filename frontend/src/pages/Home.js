import React, { useEffect } from "react";
import { HomeData } from "../data/homeData";
import NavConnexion from "../components/NavConnexion";
import SignUpModal from "../components/SignUpModal";
import SignInModal from "../components/SignInModal";

const Home = () => {
  useEffect(() => {
    // Fonction pour gérer le scroll
    const handleScroll = () => {
      // Obtenez la valeur de défilement normalisée
      const scrollValue =
        (window.scrollY + window.innerHeight) / document.body.offsetHeight;

      // Obtenez toutes les div "intro-container"
      const introContainers = document.querySelectorAll(".intro-container");

      // Parcourez les div "intro-container"
      introContainers.forEach((introContainer, index) => {
        // Appliquez le style de translation en fonction de l'index
        // introContainer.style.transform = "translateX(-50px)";

        // const translateXValue = index === 0 ? -20 : 55;

        // Appliquez le style de translation en fonction de la valeur de défilement
        if (scrollValue > 1.1 && index === 0) {
          introContainer.style.transform = `translateX(-20%)`;
        }
        if (scrollValue > 1.2 && index === 1) {
          introContainer.style.transform = `translateX(55%)`;
        }
      });
    };

    // Ajoutez un écouteur d'événement pour le scroll lors du montage du composant
    window.addEventListener("scroll", handleScroll);

    // Retirez l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <NavConnexion />
      <SignUpModal />
      <SignInModal />
      <div className="logo-luminelles">
        <img
          className="logo"
          src="./assets/img/logo-luminelles.png"
          alt="luminelles"
        />
      </div>
      <div className="intro">
        <div className="intro-container" id="intro1">
          <div className="intro-content">
            <div>
              {HomeData[0].intro1}

              <i className="fa-solid fa-venus"></i>
            </div>
            <div>{HomeData[0].intro2}</div>
            {/* <div className="profil">
              <img src="./assets/img/IMG-Arbre.jpg" alt="" />
              <img src="./assets/img/IMG-bienetre.png" alt="" />
              <img src="./assets/img/IMG-Yoga.jpg" alt="" />
            </div> */}
          </div>
        </div>
        <div className="intro-container" id="intro2">
          <div className="intro-content">
            <div>{HomeData[0].intro4}</div>
            <div>{HomeData[0].intro3}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
