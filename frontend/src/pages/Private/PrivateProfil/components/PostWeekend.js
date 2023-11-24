import React from "react";

const PostWeekend = ({ data, img }) => {
  console.log("Image URL in PostWeekend:", img);
  return (
    <div className="post-weekend">
      <h2>{data.name}</h2>
      <p>Date : {data.date}</p>
      <p>Lieu : {data.lieu}</p>
      {data.imageUrl && (
        <img
          src={data.imageUrl}
          alt="image"
          style={{ maxWidth: "100%", maxHeight: "200px" }}
        />
      )}
      <p>Nombre de participantes : {data.howMuch}</p>
      <p>Activités : {data.activity}</p>
      <p>Tarif : {data.price} €</p>
    </div>
  );
};

export default PostWeekend;
