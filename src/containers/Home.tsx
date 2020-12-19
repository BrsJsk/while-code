import React from "react";
import { BorderCard } from "../components/Card";
import "../styles/containers/home.scss";

function Home() {
  return (
    <div className="home-container">
      <BorderCard width="70%" height="300px" />
      <BorderCard width="25%" height="300px" />
    </div>
  );
}

export default Home;
