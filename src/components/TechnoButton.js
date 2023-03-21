import React, { useState } from "react";
import axios from "axios";
// import config, { API_KEY } from "../config";
import '../styles.css'


require('dotenv').config();


const API_KEY = process.env.REACT_APP_API_KEY;

const TechnoButton = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=random+techno&key=${API_KEY}`
      );
      const videoId =
        response.data.items[
          Math.floor(Math.random() * response.data.items.length)
        ].id.videoId;
      const newVideoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      setVideoUrl(newVideoUrl);
      setButtonClicked(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button 
        onClick={handleClick}
        className={`strobe ${videoUrl ? ' centered-button' : ''}`}
        style={{
          backgroundColor: '#7a04eb',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '20px',
          fontSize: '1.2rem',
          cursor: 'pointer',
          outline: 'none',
          boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)',
          fontFamily: 'Orbitron, sans-serif'
        }}
      >
        {buttonClicked ? "Send Me More Techno" : "Send Me Techno"}
      </button>
      {videoUrl && (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "20px"
        }}>
          <iframe
            title="techno-video"
            src={videoUrl}
            width="100%"
            height="auto"
            style={{ display: "block", margin: "0 auto" }}
            allowFullScreen
            allow="autoplay"
          />
        </div>
      )}
    </div>
  );
};

export default TechnoButton;
