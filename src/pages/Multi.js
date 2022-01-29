import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Multi = () => {
  return (
    <div className="multi">
      <Logo />
      <Navigation />
      <h1>Multijoueur</h1>
      <button className="copierLien">Copier le lien</button>
    </div>
  );
};

export default Multi;
