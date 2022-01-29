import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("../fichier_json/data.json")
      .then((res) => setData(res.data));
  }, []);

  // fetch("../fichier_json/data.json")
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))

  return (
    <div className="countries">
      <div>
        {data.map((possibilites) => (
            // console.log(possibilites.possibilites)
            <Card possibilites={possibilites} key={possibilites.possibilites}/>
        ))}
      </div>
    </div>
  );
};

export default Countries;
