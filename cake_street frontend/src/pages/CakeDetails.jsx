// src/pages/CakeDetails.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function CakeDetails() {   // <--- Hapa default export
  const { id } = useParams();
  const [cake, setCake] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(`/api/cakes/${id}`)
      .then(res => setCake(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleOrder = () => {
    axios.post("/api/orders", { cakeId: id, quantity, message })
      .then(() => alert("Order placed! Admin will confirm offline payment"))
      .catch(err => console.error(err));
  };

  if (!cake) return <p className="p-4 text-center">Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-gray-50 rounded shadow mt-6">
      <img src={cake.image} alt={cake.name} className="w-full h-64 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{cake.name}</h1>
      <p className="mt-2 text-gray-700">{cake.description}</p>
      <p className="mt-1 font-bold text-lg">${cake.price}</p>

      <div className="mt-4 flex flex-col gap-3">
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          className="border p-2 rounded w-32"
        />
        <textarea
          placeholder="Message on cake"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button onClick={handleOrder} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Place Order
        </button>
      </div>
    </div>
  );
}
