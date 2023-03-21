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
        title="techno-video"
        src={videoUrl}
        width="100%"
        height="auto"
        style={{ display: "block", margin: "0 auto" }}
        allowFullScreen
        allow="autoplay"
        />
      )}
    </div>
  );
};

export default TechnoPlayer;
