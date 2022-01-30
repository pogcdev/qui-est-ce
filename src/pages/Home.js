import React from "react";
import Characters from "../components/Characters";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Characters />
    </div>
  );
};

export default Home;
