import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PostWeekend from "./Private/PrivateProfil/components/PostWeekend";
import axios from "axios";

const WeekEnd = () => {
  const { handleSubmit, control } = useForm();
  const [eventData, setEventData] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

  // Fonction de gestion de la soumission du formulaire
  const onSubmit = async (data) => {
    console.log("Données du formulaire soumises: ", data);

    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const response = await axios.post(
        "http://localhost:5000/upload",
        formData
      );
      console.log("Response from server:", response.data);

      const imageUrl = response.data.imageUrl;

      setEventData([...eventData, { ...data, imageUrl }]);
      setImagePreview(null); // Clear image preview after submission
    } catch (error) {
      console.error("Error uploading image:", error);
    }
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
                render={({ field }) => (
                  <input {...field} type="text" id="lieu" />
                )}
              />
            </h2>
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    type="file"
                    onChange={(e) => {
                      field.onChange(e);
                      setImagePreview(URL.createObjectURL(e.target.files[0]));
                    }}
                  />
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Aperçu de l'image"
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  )}
                </>
              )}
            />
            <br />
            <label htmlFor="participante">Nombre de participante :</label>

            <Controller
              name="howMuch"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select {...field} type="text">
                  <option value="">-Combien sont-elles ?-</option>
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
            <button className="button" type="submit">
              Publier
            </button>
          </form>
        </div>
      </div>
      <div className="event">
        {eventData.map((event, index) => (
          <PostWeekend data={event} img={imagePreview} key={index} />
        ))}
      </div>
      {/* <div className="consign">
        <p>{SeeMoreData[0].annulation}</p>
        <p>{SeeMoreData[0].conclusion}</p>
      </div> */}
    </div>
  );
};

export default WeekEnd;
