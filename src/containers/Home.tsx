import React from "react";
import { BorderCard } from "../components/Card";
import { YoutubePlayer } from "../components/Music";
import "../styles/containers/home.scss";

function Home() {
  return (
    <div className="home-container">
      <YoutubePlayer />
      <BorderCard width="25%" height="300px" placeholder="Hacker news" />
    </div>
  );
}

export default Home;
