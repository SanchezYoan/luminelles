import React from "react";

const Event = ({ formData }) => {
  // Utilisez les données du formulaire comme bon vous semble
  return (
    <div>
      <h2>Récapitulatif de l'événement</h2>
      <p>Thème: {formData.theme}</p>
      <p>Date: {formData.date}</p>
      {/* Ajoutez d'autres champs selon vos besoins */}
    </div>
  );
};

export default Event;
