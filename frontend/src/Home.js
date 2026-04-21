import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="Home">
      <h1>Welcome to CabService</h1>
      <p>Your reliable cab booking solution.</p>
      <button
        onClick={() => navigate("/login")}
        style={{
          marginTop: "2rem",
          padding: "0.75rem 2rem",
          fontSize: "1.1rem",
          cursor: "pointer",
        }}
      >
        Go to Login
      </button>
    </div>
  );
}

export default Home;
