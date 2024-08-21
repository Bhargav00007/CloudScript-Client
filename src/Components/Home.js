import React, { useState } from 'react';
import Notes from './Note';
import fadingImage from './fading.jpg'; 
import fadingSound from './fading.mp3'; 

function Home() {
  // State to manage whether the audio is playing
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(fadingSound)); 
  audio.loop = true;

  const togglePlayPause = () => {
    if (isPlaying) {
      audio.pause(); 
    } else {
      audio.play(); 
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='container'>
      <div className="card my-5 bg-dark" style={{ width: "20rem", position: "relative" }}>
        <img src={fadingImage} className="card-img-top" alt="Fading Image" style={{ width: "100%", height: "auto" }} />
        <div className="card-img-overlay d-flex flex-column justify-content-end" style={{ color: "white", padding: "10px", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <h5 className="card-title">Fading</h5>
          <p className="card-text">Listen to music while making notes.</p>
          <button className="btn btn-primary" onClick={togglePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>
      <h1 style={{ color: "green" }}>Home</h1>
      <hr style={{ color: "white" }} />
      <Notes />
    </div>
  );
}

export default Home;
