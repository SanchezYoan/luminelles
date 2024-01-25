// NewEvent.js
import React from "react";
import { Controller, useForm } from "react-hook-form";
import FormInput from "./FormInput"; // Assuming you have the FormInput component in a separate file

const NewEvent = ({ onSubmitCallback }) => {
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    console.log("Données du formulaire soumises: ", data);

    try {
      // Your image upload logic goes here

      onSubmitCallback(data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Thème</label>
      <br />
      <FormInput label="Thème" name="name" type="text" control={control} />
      <br />
      <label htmlFor="name">Description</label>
      <br />
      <FormInput
        label="Description"
        name="description"
        type="textarea"
        control={control}
      />
      <br />
      <label htmlFor="name">Date</label>
      <br />
      <FormInput label="Date" name="date" type="date" control={control} />
      <br />
      <label htmlFor="name">Lieu</label>
      <br />
      <FormInput label="Lieu" name="lieu" type="text" control={control} />
      <br />
      <label htmlFor="name">Activité</label>
      <br />
      <FormInput
        label="Activités"
        name="activity"
        type="textarea"
        control={control}
      />
      <br />
      <label htmlFor="name">Nombre de participantes</label>
      <Controller
        name="howMuch"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <select {...field} type="text">
            <option value="">?</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
          </select>
        )}
      />
      <br />
      <label htmlFor="name">Prix</label>
      <FormInput label="Tarif" name="price" type="text" control={control} />
      <span>&#8364;</span>
      <br />
      <button className="button" type="submit">
        Publier
      </button>
    </form>
  );
};

export default NewEvent;
