import React from "react";
import { usePseudo } from "../../../context/pseudoContext";
import PseudoForm from "./PseudoForm";
import Navbar from "../../../components/Navbar";

export default function PrivateProfil() {
  const { pseudo } = usePseudo();
  return (
    <div>
      {/* <Navbar /> */}
      <h1>Bonjour {pseudo}</h1>
      <PseudoForm />
    </div>
  );
}
