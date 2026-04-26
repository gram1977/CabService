import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./App";

function Login({ email, setEmail, password, setPassword }) {
  const navigate = useNavigate();
  const { setLoggedIn, setRole } = useContext(LoginContext); // Add setRole from context
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Logging with:", { email, password });
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";
      console.log(`Using API URL: ${API_URL}`);
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(`Backend response: ${JSON.stringify(data)}`);
        setLoggedIn(true);
        console.log(`User role: ${data.user.role}`);
        if (setRole && data.user.role) {
          setRole(data.user.role); // Store role in context
        }
        // Optionally, navigate to a dashboard or home page
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Server error: " + error.message);
    }
  };
  /*  
    In Login.js, when the user types in the input fields, onChange calls setEmail or setPassword. 
    These functions update the state in App.js directly.
    Because React state is shared via props, any change made in Login.js is reflected in App.js instantly.
  */
  return (
    <div
      className="Login"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {/*
        The outer { ... } tells JSX: "evaluate this as JavaScript."
        The inner { ... } is the JavaScript object itself.
       */}
      <h1
        style={{
          textIndent: "5em",
          marginTop: 0,
          marginBottom: "1.5rem",
          color: "#8B8000",
          fontWeight: "bold",
        }}
      >
        🚕Grewal Cab Booking Service🚗
      </h1>
      <h1>Login</h1>
      <h3
        style={{
          textIndent: "5em",
          marginTop: 0,
          marginBottom: "1.5rem",
          color: "#888",
          fontWeight: 400,
        }}
      >
        (Shortcut: Ctrl+L for Logout)
      </h3>
      <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="form-row">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-row">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button
        style={{ marginTop: "1rem" }}
        onClick={() => navigate("/register")}
      >
        Create New User
      </button>
      <h3
        style={{
          textIndent: "5em",
          marginTop: "auto",
          marginBottom: "1.5rem",
          color: "#888",
          fontWeight: 400,
        }}
      >
        🎪Address: 69- College Road, Civil Lines, Ludhiana PIN:141001
        <br />
        📞Cell: 9999-080593
      </h3>
    </div>
  );
}

export default Login;
