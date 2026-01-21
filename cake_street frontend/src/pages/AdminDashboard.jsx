// src/pages/AdminDashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [cakes, setCakes] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/cakes").then(res => setCakes(res.data));
    axios.get("/api/orders").then(res => setOrders(res.data));
  }, []);

  const handlePaymentConfirm = (id) => {
    axios.patch(`/api/orders/${id}`, { status: "paid" })
      .then(() => setOrders(prev => prev.map(o => o.id === id ? {...o, status:"paid"} : o)))
      .catch(err => console.error(err));
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-2xl font-bold mb-3">Cakes</h2>
        {cakes.map(c => <div key={c.id} className="border p-3 rounded mb-2 flex justify-between bg-white shadow">{c.name}</div>)}
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-3">Orders</h2>
        {orders.map(o => (
          <div key={o.id} className="border p-3 rounded mb-2 bg-white flex justify-between items-center shadow">
            <span>{o.cake.name} x{o.quantity} ({o.status})</span>
            {o.status !== "paid" && <button onClick={() => handlePaymentConfirm(o.id)} className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">Confirm</button>}
          </div>
        ))}
      </div>
    </div>
  );
}
