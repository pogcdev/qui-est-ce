import React from "react";

const Card = ({ personnage }) => {
  return (
    <div className="card">
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={personnage.fichier} alt={personnage.prenom} />
          </div>
          <div className="flip-box-back">
            <img src="https://zupimages.net/viewer.php?id=22/04/gp1x.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
