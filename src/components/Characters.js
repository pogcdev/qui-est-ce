import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
let docu = require('./fichier_json/data.json');

const Characters = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(docu)
      .then((res) => setData(res.data[0].possibilites));
  }, []);

  return (
    <div className="characters">
      <div>
        {data.map((personnage) => (
          // console.log(personnages)
          <Card key={personnage.prenom} personnage={personnage} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
