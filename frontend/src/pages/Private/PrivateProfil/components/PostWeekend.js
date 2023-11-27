import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const PostWeekend = ({ data }) => {
  const { control } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [moreInfos, setMoreInfos] = useState(false);

  return (
    <div className="post-weekend">
      <h2>{data.name}</h2>
      <p>Date : {data.date}</p>
      <p>Lieu : {data.lieu}</p>
      <Controller
        name="image"
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

      <p>Nombre de participantes : {data.howMuch}</p>
      <p>Activités : {data.activity}</p>
      <p>Tarif : {data.price} €</p>
      <div className="more">
        {!moreInfos ? (
          <button onClick={() => setMoreInfos(true)}>+ d'infos</button>
        ) : (
          <>
            <button onClick={() => setMoreInfos(false)}>- d'infos</button>
            <p id="description">{data.description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default PostWeekend;
