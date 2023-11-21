import React from "react";
import { useNavigate } from "react-router-dom";
const FinalMessage = () => {
  const navigate = useNavigate();

  const handleGoToHomePage = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="centerdivforMessage">
        <h1>Thanks for Shopping with Us 😊😊😊</h1>
        <h2>Come Again</h2>
      </div>

      <div class="finalbutton">
        <button onClick={handleGoToHomePage}>Home Page</button>
      </div>
    </div>
  );
};

export default FinalMessage;
