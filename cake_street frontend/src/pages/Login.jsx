// src/pages/AdminLogin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ⚠️ DEMO ADMIN CREDENTIALS (DEV ONLY)
  const DEMO_ADMIN = {
    email: "admin@gmail.com",
    password: "Admin123",
  };

  const useDemoAdmin = () => {
    setEmail(DEMO_ADMIN.email);
    setPassword(DEMO_ADMIN.password);
  };

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("/api/auth/admin/login", {
        email,
        password,
      });

      if (res.data.role !== "admin") {
        setError("Access denied. Not an admin.");
        return;
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", "admin");
      navigate("/admin/dashboard");
    } catch (err) {
      setError("login failed. please check your credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .admin-login-page {
          min-height: 100vh;
          width: 100vw;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0d0329, #040007);
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .admin-login-card {
          background: white;
          width: 100%;
          max-width: 420px;
          padding: 32px;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }

        .admin-login-title {
          text-align: center;
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 24px;
          color: #1f2937;
        }

        .admin-error {
          background: #fee2e2;
          color: #b91c1c;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 16px;
          font-size: 14px;
        }

        .admin-input {
          width: 100%;
          padding: 14px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          margin-bottom: 16px;
          font-size: 15px;
        }

        .admin-input:focus {
          outline: none;
          border-color: #8b6e7d;
          box-shadow: 0 0 0 3px rgba(236,72,153,0.3);
        }

        .admin-button {
          width: 100%;
          background: #ec4899;
          color: white;
          font-weight: 700;
          padding: 14px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.1s ease;
        }

        .admin-button:hover {
          background: #412e36;
        }

        .admin-button:disabled {
          background: #f9a8d4;
          cursor: not-allowed;
        }

        .demo-button {
          width: 100%;
          background: #f3f4f6;
          border: 1px dashed #9ca3af;
          color: #374151;
          padding: 10px;
          border-radius: 8px;
          margin-bottom: 14px;
          cursor: pointer;
          font-size: 14px;
        }

        .admin-footer {
          text-align: center;
          font-size: 25px;
          color: #123674;
          margin-top: 24px;
        }
      `}</style>

      <div className="admin-login-page">
        <div className="admin-login-card">
          <h1 className="admin-login-title">Admin Login 🔐</h1>

          {error && <div className="admin-error">{error}</div>}

          {/* Demo admin button */}
          {<button className="demo-button" onClick={useDemoAdmin}>
            Use Details for Admin (DEV)
          </button>}

          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="admin-input"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="admin-input"
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="admin-button"
          >
            {loading ? "Loading..." : "Login as Admin"}
          </button>

          <p className="admin-footer">
            only admins allowed to access this panel
          </p>
        </div>
      </div>
    </>
  );
}
