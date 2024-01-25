import React from "react";
import { Controller } from "react-hook-form";

export default function FormInput({ label, name, type, control }) {
  return (
    <Controller
      label={label}
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => <input {...field} type={type} id={name} />}
    />
  );
}
