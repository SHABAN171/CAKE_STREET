// src/routes/AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import CakeDetails from "../pages/CakeDetails";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";
import AdminDashboard from "../pages/AdminDashboard";
import Login from "../pages/Login";

export default function AppRoutes() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <div className="font-bold text-xl">Cake Street</div>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/cart" className="hover:underline">Cart</Link>
            <Link to="/orders" className="hover:underline">Orders</Link>
            <Link to="/admin" className="hover:underline">Admin</Link>
            <Link to="/login" className="hover:underline">Login</Link>
          </div>
        </nav>

        {/* Main content */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cake/:id" element={<CakeDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4">
          &copy; {new Date().getFullYear()} Cake Street. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
