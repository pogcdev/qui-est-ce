import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Characters = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("./data.json")
      .then((res) => setData(res.data[0].possibilites));
  }, []);

  // fetch("../fichier_json/data.json")
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))

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
