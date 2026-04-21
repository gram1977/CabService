import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  // Updated handleSubmit with API call
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Registering with:", { email, password, role });
      const API_PORT = process.env.REACT_APP_API_PORT || 3001;
      const response = await fetch(`http://localhost:${API_PORT}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(`Backend response: ${JSON.stringify(data)}`);
        navigate("/login");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      alert("Server error: " + error.message);
    }
  };

  return (
    <div className="Register">
      <h1>Register</h1>
      <form
        className="register-form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="form-row">
          <label htmlFor="email">Email:</label>
          <input
            type="text" // changed from "email" to "text"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            placeholder="Enter your email" // added placeholder
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
            autoComplete="current-password" // changed from "new-password"
            placeholder="Enter your password" // added placeholder
          />
        </div>
        <div className="form-row">
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select role</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
      <button style={{ marginTop: "1rem" }} onClick={() => navigate("/login")}>
        Back to Login
      </button>
    </div>
  );
}

export default Register;
