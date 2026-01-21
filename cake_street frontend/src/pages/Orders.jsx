// src/pages/Orders.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map(o => (
          <div key={o.id} className="border p-3 rounded mb-3 bg-white shadow">
            <p><strong>{o.cake.name}</strong> x{o.quantity}</p>
            <p>Status: <span className={`font-bold ${o.status === "paid" ? "text-green-600" : "text-yellow-600"}`}>{o.status}</span></p>
            {o.message && <p>Message: {o.message}</p>}
          </div>
        ))
      )}
    </div>
  );
}
