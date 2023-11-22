import React from "react";

const PostWeekend = ({ data }) => {
  console.log(data.name);
  return (
    <div className="post-weekend">
      <h2>{data.name}</h2>
      <p>Date: {data.date}</p>
      <p>Lieu: {data.lieu}</p>
      <p>Nombre de participantes: {data.howMuch}</p>
      <p>Activités: {data.activity}</p>
      <p>Tarif: {data.price} €</p>
    </div>
  );
};

export default PostWeekend;
