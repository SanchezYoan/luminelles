import React from "react";
import Navigation from "../components/Navigation";
import { SeeMoreData } from "../data/seeMoreData";

const SeeMore = () => {
  // console.log(SeeMoreData[0].infos[0].i1);

  return (
    <div className="seeMore">
      <Navigation />
      <h2>Bienvenue sur la page Luminelle's</h2>
      <h3>Quelques infos sur le week-end</h3>
      <div className="infos-container">
        <div className="info-content">
          {SeeMoreData[0].infos.map((info, index) => {
            return (
              <li key={index}>
                <i class="fa-regular fa-hand-point-right"></i>
                {info}
                <i class="fa-solid fa-bowl-food"></i>
              </li>
            );
          })}
        </div>
        <div className="info-media"></div>
      </div>
      <div className="consign">
        <p>{SeeMoreData[0].annulation}</p>
      </div>
    </div>
  );
};

export default SeeMore;
