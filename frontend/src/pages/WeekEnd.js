import React from "react";
import { useForm } from "react-hook-form";
// import { SeeMoreData } from "../../src/data/seeMoreData";

const WeekEnd = () => {
  const { register, handleSubmit, formState, errors } = useForm();
  const { isSubmitting } = formState;

  const wait = function (duration = 1000) {
    return new Promise((resolve) => {
      window.setTimeout(resolve, duration);
    });
  };

  console.log(errors);

  // Fonction de gestion de la soumission du formulaire
  const onSubmit = async (data) => {
    await wait(2000);
    console.log("Données du formaulaire soumises: ", data);
  };

  return (
    <div className="seeMore">
      {/* <Navbar /> */}
      <h1>Week-end Bien-être</h1>
      {/* <h3>Quelques infos sur le week-end</h3> */}
      <div className="weekend-container">
        <div className="weekend-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Thème</label>
            <h2>
              <input {...register("thème", { required: true })} id="name" />
            </h2>
            <label htmlFor="date">Date</label>
            <h2>
              <input
                type="date"
                {...register("date", { required: true })}
                id="date"
              />
            </h2>
            <label htmlFor="lieu">Lieu</label>
            <h2>
              <input
                type="text"
                {...register("location", { required: true })}
                name="lieu"
              />
            </h2>
            <input type="file" id="fileInput" />
            {/* <button onClick="uploadImage()">Télécharger</button> */}
            <br />
            <label htmlFor="participante">Nombre de participante:</label>
            <select name="howmuch" id="pet-select">
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
              // {...register("activité", { required: true })}
              name="activity"
              id="activity"
              cols="20"
              rows="10"
            ></textarea>
            <br />
            <label htmlFor="price">Tarif</label>
            <br />
            <input
              type="text"
              // {...register("price", { required: true })}
              name="price"
            />
            <span>&#8364;</span>
            <br />
            <button type="submit" disabled={isSubmitting}>
              Soumettre
            </button>
          </form>
        </div>
        <div className="info-media"></div>
      </div>
      {/* <div className="consign">
        <p>{SeeMoreData[0].annulation}</p>
        <p>{SeeMoreData[0].conclusion}</p>
      </div> */}
    </div>
  );
};

export default WeekEnd;
