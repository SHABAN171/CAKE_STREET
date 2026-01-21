// src/pages/Cart.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import "./Cart.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get("/api/orders/cart")
      .then(res => setCartItems(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleCheckout = () => {
    axios.post("/api/orders/checkout", { items: cartItems })
      .then(() => {
        alert("Order placed! Admin will confirm offline payment");
        setCartItems([]);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between p-2 border rounded bg-white shadow">
                <span>{item.cake.name} x{item.quantity}</span>
                <span>${item.cake.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={handleCheckout}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Place Orders
          </button>
        </>
      )}
    </div>
  );
}
