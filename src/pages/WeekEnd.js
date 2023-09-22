import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { SeeMoreData } from "../data/seeMoreData";

const WeekEnd = () => {
  const [formData, setFormData] = useState({
    theme: "",
    date: "",
    lieu: { location: "", pictures: "" },
    numberof: "",
    activity: [],
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.id);
    setFormData({ ...formData, [name]: value });
  };

  // Fonction de gestion de la soumission du formulaire
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log();
  // };

  return (
    <div className="seeMore">
      <Navigation />
      <h1>Week-end Bien-être</h1>
      {/* <h3>Quelques infos sur le week-end</h3> */}
      <div className="weekend-container">
        <div className="weekend-content">
          <form action="">
            <label htmlFor="name">Thème</label>
            <h2>
              <input onChange={(e) => handleChange(e)} type="text" id="name" />
            </h2>
            <label htmlFor="date">Date</label>
            <h2>
              <input onChange={(e) => handleChange(e)} type="date" id="date" />
            </h2>
            <label htmlFor="lieu">Lieu</label>
            <h2>
              <input onChange={(e) => handleChange(e)} type="text" />
            </h2>
            <input
              onChange={(e) => handleChange(e)}
              type="file"
              id="fileInput"
            />
            <button onClick="uploadImage()">Télécharger</button>
            <br />
            <label htmlFor="participante">Nombre de participante:</label>
            <select name="pets" id="pet-select">
              <option value="">--Combien sont-elles ?--</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="14">14</option>
            </select>
            <br />
            <label htmlFor="activity">Activités</label>
            <br />
            <textarea
              name="activity"
              id="activity"
              cols="20"
              rows="10"
            ></textarea>
            <br />
            <label htmlFor="price">Tarif</label>
            <br />
            <input type="text" />
            <span>&#8364;</span>
          </form>
        </div>
        <div className="info-media"></div>
      </div>
      <div className="consign">
        <p>{SeeMoreData[0].annulation}</p>
        <p>{SeeMoreData[0].conclusion}</p>
      </div>
    </div>
  );
};

export default WeekEnd;
