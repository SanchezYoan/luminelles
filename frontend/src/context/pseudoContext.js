import React, { createContext, useContext, useState } from "react";

const PseudoContext = createContext();

export const PseudoProvider = ({ children }) => {
  const [pseudo, setPseudo] = useState("Utilisatrice Anonyme");

  const updatePseudo = (newPseudo) => {
    setPseudo(newPseudo);
  };

  return (
    <PseudoContext.Provider value={{ pseudo, updatePseudo }}>
      {children}
    </PseudoContext.Provider>
  );
};

export const usePseudo = () => {
  const context = useContext(PseudoContext);
  if (!context) {
    throw new Error("usePseudo must be used within a PseudoProvider");
  }
  return context;
};
