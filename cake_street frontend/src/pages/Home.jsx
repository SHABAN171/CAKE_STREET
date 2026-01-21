// src/pages/Home.jsx
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  // Sample data ya 6 cakes tofauti
  const cakes = [
    {
      id: 1,
      name: "Chocolate Fudge Cake",
      description: "Rich chocolate cake with fudge frosting and chocolate shavings.",
      price: 25,
      image: "https://images.unsplash.com/photo-1601971920544-3b0ec9edc9f6?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Vanilla Sponge Cake",
      description: "Light and fluffy vanilla sponge topped with whipped cream.",
      price: 20,
      image: "https://images.unsplash.com/photo-1589308078054-20c1a7ec2e84?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Red Velvet Cake",
      description: "Classic red velvet with cream cheese frosting and fresh berries.",
      price: 30,
      image: "https://images.unsplash.com/photo-1617196039967-f5a0e11839b1?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Lemon Drizzle Cake",
      description: "Zesty lemon cake with tangy lemon glaze for a refreshing treat.",
      price: 22,
      image: "https://images.unsplash.com/photo-1617196039981-9f97d1c59f2c?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      name: "Carrot Cake",
      description: "Moist carrot cake with walnuts and cream cheese icing.",
      price: 28,
      image: "https://images.unsplash.com/photo-1589307000453-0a0ec5838e4a?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      name: "Strawberry Shortcake",
      description: "Fluffy cake layered with fresh strawberries and whipped cream.",
      price: 27,
      image: "https://images.unsplash.com/photo-1620911041312-959cb8ffb248?auto=format&fit=crop&w=500&q=80"
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Cake Street</h1>
      <p className="text-center text-gray-700 mb-6">Choose your favorite cake and customize your order!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cakes.map(cake => (
          <div key={cake.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <img src={cake.image} alt={cake.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-3">{cake.name}</h3>
            <p className="text-gray-600 mt-1">{cake.description}</p>
            <p className="font-bold mt-2">${cake.price}</p>
            <div className="mt-3 flex gap-2">
              <Link
                to={`/cake/${cake.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Customize
              </Link>
              <Link
                to="/cart"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
