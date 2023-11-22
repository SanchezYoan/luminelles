import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PostWeekend from "./Private/PrivateProfil/components/PostWeekend";

const WeekEnd = () => {
  const { handleSubmit, control } = useForm();
  const [activity, setActivity] = useState();

  // Fonction de gestion de la soumission du formulaire
  const onSubmit = async (data) => {
    console.log("Données du formaulaire soumises: ", data);
  };

  return (
    <div className="seeMore">
      <h1>Week-end Bien-être</h1>
      <div className="weekend-container">
        <div className="weekend-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Thème</label>
            <h2>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} id="name" />}
              />
            </h2>
            <label htmlFor="date">Date</label>
            <h2>
              <Controller
                name="date"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input {...field} type="date" id="date" />
                )}
              />
            </h2>
            <label htmlFor="lieu">Lieu</label>
            <h2>
              <Controller
                name="lieu"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} type="text" />}
              />
            </h2>
            <input type="file" id="fileInput" />
            {/* <button onClick="uploadImage()">Télécharger</button> */}
            <br />
            <label htmlFor="participante">Nombre de participante:</label>

            <Controller
              name="howMuch"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select {...field} type="text">
                  <option value="">--Combien sont-elles ?--</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                  <option value="12">12</option>
                  <option value="14">14</option>
                </select>
              )}
            />
            <br />
            <label htmlFor="activity">Activités</label>
            <br />
            <Controller
              name="activity"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <textarea
                  {...field}
                  id="activity"
                  cols="10"
                  rows="10"
                  onChange={(e) => setActivity(e.target.value)}
                  value={activity}
                ></textarea>
              )}
            />
            <br />
            <label htmlFor="price">Tarif</label>
            <br />
            <Controller
              name="price"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input {...field} type="text" id="price" />
              )}
            />

            <span>&#8364;</span>
            <br />
            <button type="submit">Soumettre</button>
          </form>
        </div>
        <div className="info-media">
          <PostWeekend />
        </div>
      </div>
      {/* <div className="consign">
        <p>{SeeMoreData[0].annulation}</p>
        <p>{SeeMoreData[0].conclusion}</p>
      </div> */}
    </div>
  );
};

export default WeekEnd;
