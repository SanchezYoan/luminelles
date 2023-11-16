import React from "react";
import { usePseudo } from "../../../../context/pseudoContext";
import PseudoForm from "../components/PseudoForm";

export default function PrivateProfil() {
  const { pseudo } = usePseudo();
  return (
    <div>
      <h1>Bonjour {pseudo}</h1>
      <PseudoForm />
    </div>
  );
}
