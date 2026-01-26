// src/routes/AppRoutes.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import Home from "../pages/Home";
import CakeDetails from "../pages/CakeDetails";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";
import AdminDashboard from "../pages/AdminDashboard";
import Login from "../pages/Login";

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          overflow-x: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .nav {
          background: linear-gradient(90deg, #1e3a8a, #2563eb);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .logo {
          font-size: 1.4rem;
          font-weight: bold;
          color: #fff;
        }

        .nav-links {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .nav-link {
          text-decoration: none;
          color: #e5e7eb;
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }

        .nav-link:hover {
          background: rgba(255,255,255,0.15);
          color: #fff;
        }

        .active {
          background: #facc15;
          color: #111827;
          font-weight: bold;
        }

        .page-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
        }

        .page-content {
          flex: 1;
        }

        footer {
          background: #111827;
          color: #9ca3af;
          text-align: center;
          padding: 1rem;
          font-size: 0.85rem;
        }
      `}</style>

      <nav className="nav">
        <div className="logo">🎂 Cake Street</div>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>
          <Link
            to="/cart"
            className={`nav-link ${isActive("/cart") ? "active" : ""}`}
          >
            Cart
          </Link>
          <Link
            to="/orders"
            className={`nav-link ${isActive("/orders") ? "active" : ""}`}
          >
            Orders
          </Link>
          <Link
            to="/admin"
            className={`nav-link ${isActive("/admin") ? "active" : ""}`}
          >
            Admin
          </Link>
          <Link
            to="/login"
            className={`nav-link ${isActive("/login") ? "active" : ""}`}
          >
            Login
          </Link>
        </div>
      </nav>
    </>
  );
}

export default function AppRoutes() {
  return (
    <Router>
      <div className="page-wrapper">
        <Header />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cake/:id" element={<CakeDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <footer>
          © {new Date().getFullYear()} Cake Street. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
