import React, { useState } from "react";

// --- added lightweight local components to replace missing imports ---
const Button = ({ children, className = "", ...props }) => (
  <button {...props} className={`px-3 py-2 ${className}`}>
    {children}
  </button>
);

const Card = ({ children, className = "", ...props }) => (
  <div {...props} className={`rounded-lg ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div {...props} className={`${className}`}>{children}</div>
);

// simple icon components (inline SVG / emoji fallback)
const Cake = ({ className = "" }) => <span className={className} role="img" aria-label="cake">🎂</span>;
const ShoppingCart = ({ className = "" }) => <span className={className} role="img" aria-label="cart">🛒</span>;
const Truck = ({ className = "" }) => <span className={className} role="img" aria-label="truck">🚚</span>;
const CheckCircle = ({ className = "" }) => <span className={className} role="img" aria-label="check">✅</span>;

// Inline CSS for Cake Street branding
const styles = `
  /* ensure page covers entire viewport width */
  .html, body {
    width: 100vw;
    margin: 0;
  }

  .cake-gradient {
    background: linear-gradient(135deg, #f472b6, #fb7185);
  }
  .glass {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.85);
  }
  .btn-primary {
    background: linear-gradient(135deg, #ec4899, #f43f5e);
    color: white;
  }
  .btn-primary:hover {
    opacity: 0.9;
  }
  .badge {
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 12px;
    font-weight: 500;
  }
  .badge-baking { background: #fce7f3; color: #be185d; }
  .badge-way { background: #ffedd5; color: #c2410c; }
  .badge-done { background: #dcfce7; color: #166534; }
`;

const cakes = [
  { id: 1, name: "Chocolate Truffle Cake", price: 25 },
  { id: 2, name: "Vanilla Strawberry Cake", price: 22 },
  { id: 3, name: "Red Velvet Cake", price: 30 },
];

const nextStatus = {
  "In Baking": "On the way",
  "On the way": "Delivered",
};

export default function OrderPage() {
  const [orders, setOrders] = useState([]);

  const placeOrder = (cake, payment) => {
    const newOrder = {
      id: `CS-${Math.floor(Math.random() * 100000)}`,
      cake: cake.name,
      price: cake.price,
      date: new Date().toLocaleDateString(),
      status: "In Baking",
      payment,
    };
    setOrders([newOrder, ...orders]);
  };

  const advanceStatus = (id) => {
    setOrders(
      orders.map((o) =>
        o.id === id && nextStatus[o.status]
          ? { ...o, status: nextStatus[o.status] }
          : o
      )
    );
  };

  return (
    <> 
      <style>{styles}</style>
      <div className="min-h-screen cake-gradient p-4 sm:p-6 font-[Poppins]">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-pink-700 flex items-center gap-2">
          <Cake className="w-7 h-7" /> Cake Street – Order Cakes
        </h1>

        {/* Cake Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {cakes.map((cake) => (
            <Card key={cake.id} className="rounded-2xl shadow glass">
              <CardContent className="p-5 grid gap-3">
                <p className="font-medium text-gray-800">{cake.name}</p>
                <p className="text-pink-600 font-semibold">${cake.price}</p>

                <div className="grid grid-cols-2 gap-2">
                  <Button
                    onClick={() => placeOrder(cake, "M-Pesa")}
                    className="bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm"
                  >
                    M-Pesa
                  </Button>
                  <Button
                    onClick={() => placeOrder(cake, "Card")}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm"
                  >
                    Card
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Orders */}
        <h2 className="text-xl sm:text-2xl font-semibold text-pink-700 mb-4">My Orders</h2>

        {orders.length === 0 ? (
          <Card className="rounded-2xl border-dashed border-pink-200 bg-white">
            <CardContent className="p-8 text-center text-pink-400">
              <ShoppingCart className="mx-auto w-10 h-10 mb-2" />
              <p className="font-medium">You have no orders yet</p>
              <p className="text-sm">Choose a cake above to get started 🍰</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 pb-10">
            {orders.map((order) => (
              <Card key={order.id} className="rounded-2xl shadow bg-white">
                <CardContent className="p-5 grid gap-3">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-pink-400">#{order.id}</p>
                    <span className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-600">
                      {order.payment}
                    </span>
                  </div>

                  <p className="font-medium text-gray-800">{order.cake}</p>
                  <p className="text-sm text-gray-500">Date: {order.date}</p>

                  {/* Status */}
                  <div className="flex items-center gap-2 text-sm">
                    {order.status === "In Baking" && <Cake className="w-4 h-4 text-pink-500" />}
                    {order.status === "On the way" && <Truck className="w-4 h-4 text-orange-500" />}
                    {order.status === "Delivered" && <CheckCircle className="w-4 h-4 text-green-600" />}
                    <span className={`badge ${order.status === "In Baking" ? "badge-baking" : order.status === "On the way" ? "badge-way" : "badge-done"}`}>
                      {order.status}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-pink-700">${order.price}</p>
                    {order.status !== "Delivered" && (
                      <Button
                        onClick={() => advanceStatus(order.id)}
                        className="btn-primary rounded-xl text-sm"
                      >
                        Update Status
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
