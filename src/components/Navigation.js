import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
        <NavLink to="/qui-est-ce">
          <button>Jouer</button>
        </NavLink>
        <NavLink to="/qui-est-ce/difficulty">
          <button>Difficulté</button>
        </NavLink>
        <NavLink to="/qui-est-ce/multi">
          <button>Multijoueur</button>
        </NavLink>
        <NavLink to="/qui-est-ce/rules">
          <button>Règles</button>
        </NavLink>
    </nav>
  );
};

export default Navigation;
