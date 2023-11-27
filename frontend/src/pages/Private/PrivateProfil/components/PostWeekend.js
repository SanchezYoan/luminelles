import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const PostWeekend = ({ data }) => {
  const { control } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [moreInfos, setMoreInfos] = useState(false);
  const [participants, setParticipants] = useState(0);

  const handleAddParticipant = () => {
    // console.log(typeof Number(data.howMuch));
    // console.log(typeof participants);
    if (participants < Number(data.howMuch)) {
      setParticipants(participants + 1);
    }
    if (participants === Number(data.howMuch)) {
      alert("Malheursement, les réservations sont complète");
    }
  };
  return (
    <div className="post-weekend">
      <h2>{data.name}</h2>
      <p>Date : {data.date}</p>
      <p>Lieu : {data.lieu}</p>
      <Controller
        name="photo"
        id="img-location"
        control={control}
        render={({ field }) => (
          <>
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Aperçu de l'image"
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              />
            ) : (
              <input
                type="file"
                onChange={(e) => {
                  field.onChange(e);
                  setImagePreview(URL.createObjectURL(e.target.files[0]));
                }}
              />
            )}
          </>
        )}
      />
      <br />

      <p>
        Nombre de participantes : {participants} / {data.howMuch}
      </p>
      <p>Activités : {data.activity}</p>
      <p>Tarif : {data.price} €</p>
      <div className="more-container">
        {!moreInfos ? (
          <button className="more" onClick={() => setMoreInfos(true)}>
            <i class="fa-solid fa-plus"></i>{" "}
            <i class="fa-solid fa-circle-info"></i>
          </button>
        ) : (
          <>
            <button className="mins" onClick={() => setMoreInfos(false)}>
              <i class="fa-solid fa-minus"></i>{" "}
              <i class="fa-solid fa-circle-info"></i>
            </button>
            <p id="description">{data.description}</p>
            <button className="add" onClick={() => handleAddParticipant()}>
              participer
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PostWeekend;
