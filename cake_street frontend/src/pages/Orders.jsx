import React, { useState } from "react";

/* ---------- UI COMPONENTS ---------- */
const Button = ({ children, className = "", ...props }) => (
  <button {...props} className={`btn ${className}`}>
    {children}
  </button>
);

const Card = ({ children, className = "" }) => (
  <div className={`card ${className}`}>{children}</div>
);

const CardContent = ({ children }) => (
  <div className="card-content">{children}</div>
);

/* ---------- ICONS ---------- */
const Cake = () => <span role="img" aria-label="cake">🎂</span>;
const ShoppingCart = () => <span role="img" aria-label="cart">🛒</span>;
const Truck = () => <span role="img" aria-label="truck">🚚</span>;
const CheckCircle = () => <span role="img" aria-label="check">✅</span>;

/* ---------- INTERNAL CSS ---------- */
const styles = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Poppins, Arial, sans-serif;
  }

  .page {
    min-height: 100vh;
    width: 100vw;
    padding: 20px;
    background: linear-gradient(135deg, #f472b6, #fb7185);
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    color: #9d174d;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
  }

  .cake-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-bottom: 32px;
  }

  .card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 12px 24px rgba(0,0,0,0.1);
  }

  .card-content {
    padding: 20px;
    display: grid;
    gap: 12px;
  }

  .price {
    color: #db2777;
    font-weight: 600;
  }

  .btn {
    padding: 10px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    font-size: 14px;
  }

  .btn-mpesa {
    background: #16a34a;
    color: white;
  }

  .btn-card {
    background: #2563eb;
    color: white;
  }

  .btn-primary {
    background: linear-gradient(135deg, #ec4899, #f43f5e);
    color: white;
  }

  .orders-title {
    font-size: 22px;
    font-weight: 600;
    color: #9d174d;
    margin-bottom: 16px;
  }

  .empty {
    text-align: center;
    color: #db2777;
    padding: 40px;
  }

  .badge {
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 500;
  }

  .baking {
    background: #fce7f3;
    color: #be185d;
  }

  .way {
    background: #ffedd5;
    color: #c2410c;
  }

  .done {
    background: #dcfce7;
    color: #166534;
  }

  .order-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .order-id {
    font-size: 12px;
    color: #db2777;
  }

  .payment {
    font-size: 12px;
    background: #fce7f3;
    color: #be185d;
    padding: 4px 10px;
    border-radius: 999px;
  }
`;

/* ---------- DATA ---------- */
const cakes = [
  { id: 1, name: "Chocolate Truffle Cake", price: 25 },
  { id: 2, name: "Vanilla Strawberry Cake", price: 22 },
  { id: 3, name: "Red Velvet Cake", price: 30 },
];

const nextStatus = {
  "In Baking": "On the way",
  "On the way": "Delivered",
};

/* ---------- PAGE ---------- */
export default function OrderPage() {
  const [orders, setOrders] = useState([]);

  const placeOrder = (cake, payment) => {
    const orderId = `CS-${Math.floor(Math.random() * 100000)}`;
    setOrders([
      {
        id: orderId,
        cake: cake.name,
        price: cake.price,
        date: new Date().toLocaleDateString(),
        status: "In Baking",
        payment,
      },
      ...orders,
    ]);
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

      <div className="page">
        <h1 className="title">
          <Cake /> Cake Street – Order Cakes
        </h1>

        {/* Cakes */}
        <div className="cake-grid">
          {cakes.map((cake) => (
            <Card key={cake.id}>
              <CardContent>
                <strong>{cake.name}</strong>
                <span className="price">${cake.price}</span>

                <div style={{ display: "grid", gap: "8px" }}>
                  <Button
                    className="btn-mpesa"
                    onClick={() => placeOrder(cake, "M-Pesa")}
                  >
                    M-Pesa
                  </Button>
                  <Button
                    className="btn-card"
                    onClick={() => placeOrder(cake, "Card")}
                  >
                    Card
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Orders */}
        <h2 className="orders-title">My Orders</h2>

        {orders.length === 0 ? (
          <Card>
            <div className="empty">
              <ShoppingCart />
              <p>No orders yet</p>
            </div>
          </Card>
        ) : (
          orders.map((order) => (
            <Card key={order.id}>
              <CardContent>
                <div className="order-row">
                  <span className="order-id">#{order.id}</span>
                  <span className="payment">{order.payment}</span>
                </div>

                <strong>{order.cake}</strong>
                <small>Date: {order.date}</small>

                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  {order.status === "In Baking" && <Cake />}
                  {order.status === "On the way" && <Truck />}
                  {order.status === "Delivered" && <CheckCircle />}
                  <span
                    className={`badge ${
                      order.status === "In Baking"
                        ? "baking"
                        : order.status === "On the way"
                        ? "way"
                        : "done"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>

                <div className="order-row">
                  <strong className="price">${order.price}</strong>
                  {order.status !== "Delivered" && (
                    <Button
                      className="btn-primary"
                      onClick={() => advanceStatus(order.id)}
                    >
                      Update Status
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </>
  );
}
