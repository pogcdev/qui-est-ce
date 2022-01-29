import React from "react";

const Card =  ({ possibilites }) => {
  // console.log(possibilites.possibilites[16])
  return (      
    
    // <li className="card">

    //   <img src={possibilites.possibilites[0].fichier} alt="" />
    //   <div className="infos">
    //     <h2>{possibilites.possibilites.prenom}</h2>
    //   </div>
    // </li>
    // <div className="card">
    //   <h1>{possibilites.possibilites[0].prenom}</h1>
    // </div>

    <div className="card">

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[0].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[1].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>
      
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[2].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[3].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[4].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[5].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[6].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[7].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[8].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[9].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[10].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[11].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[12].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[13].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[14].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[15].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[16].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[17].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[18].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[19].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[20].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[21].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[22].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img src={possibilites.possibilites[23].fichier} alt="personnage" />
          </div>
          <div className="flip-box-back">
            <img src="./fichier_json/personnages/croix.png" alt="croix" id="croix" width="100" height="100" />
          </div>
        </div>
      </div>

    </div>

    
  );
};

export default Card;
