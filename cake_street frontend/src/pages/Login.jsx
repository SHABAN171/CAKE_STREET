// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post("/api/auth/login", { email, password })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        navigate("/admin"); // redirect admin
      })
      .catch(() => alert("Login failed"));
  };

  return (
    <div className="p-6 max-w-sm mx-auto mt-12 bg-gray-50 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
}
