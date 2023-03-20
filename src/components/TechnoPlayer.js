import React from "react";

const TechnoPlayer = ({ videoUrl }) => {
  return (
    <div syle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20px"
      }}
    >
      {videoUrl && (
        <iframe
          width="560"
          height="315"
          src={videoUrl}
          title="Techno Player"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default TechnoPlayer;
