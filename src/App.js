import React, { useState } from "react";
import TechnoButton from "./components/TechnoButton";
import TechnoPlayer from "./components/TechnoPlayer";


const App = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleTechnoSelected = (videoUrl) => {
    setVideoUrl(videoUrl);
  };

  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
        <TechnoButton onTechnoSelected={handleTechnoSelected} />
        <TechnoPlayer videoUrl={videoUrl} />
    </div>
  );
};

export default App;
