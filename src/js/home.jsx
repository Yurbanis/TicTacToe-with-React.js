import React, { useState } from "react";
import "../styles/index.css";

const Home = ({ handleStart }) => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [isStartDisabled, setIsStartDisabled] = useState(true);

  function handlePlayer1Change(event) {
    setPlayer1(event.target.value);
    setIsStartDisabled(!event.target.value || !player2);
  }

  function handlePlayer2Change(event) {
    setPlayer2(event.target.value);
    setIsStartDisabled(!event.target.value || !player1);
  }

  function handleStartClick() {
    handleStart(player1, player2);
  }

  return (
    <div className="home-container">
      
      <h1>Enter player names</h1>
      
      <div className="form-container">
       
        <input
          type="text"
          id="player1"
          placeholder="Player one username"
          value={player1}
          onChange={handlePlayer1Change}
        />
        
        <input
          type="text"
          id="player2"
          placeholder="Player two username"
          value={player2}
          onChange={handlePlayer2Change}
        />
      </div>
      
      <button
        className="btn btn-light btn-sm botonX "
        onClick={handleStartClick}
        disabled={isStartDisabled}
      >
        <span className="letraX">X</span> 
      </button>
      <button
        className="btn btn-light btn-sm botonO "
        onClick={handleStartClick}
        disabled={isStartDisabled}
      >
        <span className="letraO">o</span> 
      </button>
    </div>
  );
};

export default Home;
