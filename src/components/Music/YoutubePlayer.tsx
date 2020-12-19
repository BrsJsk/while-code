import React from "react";
import { BorderCard } from "../Card";

//TODO: Create configuration modal
export function YoutubePlayer() {
  const handleConfigurationClick = () => {
    console.log("hii");
  };
  return (
    <BorderCard
      width="70%"
      height="300px"
      placeholder="Music"
      handleConfigurationClick={() => handleConfigurationClick()}
    >
      <iframe
        title="Music player"
        width="100%"
        height="100%"
        src="https://www.youtube-nocookie.com/embed/esX7SFtEjHg"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </BorderCard>
  );
}
