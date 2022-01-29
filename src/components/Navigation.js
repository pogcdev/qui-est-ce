import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
        <NavLink to="/difficulty">
          <button>Difficulté</button>
        </NavLink>
        <NavLink to="/multi">
          <button>Multijoueur</button>
        </NavLink>
        <NavLink to="/rules">
          <button>Règles</button>
        </NavLink>
        <NavLink to="*">
          <button>Jouer</button>
        </NavLink>
    </nav>
  );
};

export default Navigation;
