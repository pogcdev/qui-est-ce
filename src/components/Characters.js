import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Characters = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/b/61f6b461fb3ece3ad7ce7091")
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
