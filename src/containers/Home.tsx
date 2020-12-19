import React from "react";
import { BorderCard } from "../components/Card";
import "../styles/containers/home.scss";

function Home() {
  return (
    <div className="home-container">
      <BorderCard width="70%" height="300px" placeholder="Music"/>
      <BorderCard width="25%" height="300px" placeholder="Hacker news"/>
    </div>
  );
}

export default Home;
