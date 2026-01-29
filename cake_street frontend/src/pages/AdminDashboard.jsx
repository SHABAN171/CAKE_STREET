import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [orders, setOrders] = useState([]);

  // 🔹 DEMO ORDERS (later utachukua backend)
  useEffect(() => {
    setOrders([
      {
        id: 1,
        customer: "Amina",
        item: "Chocolate Cake",
        status: "pending",
        date: "2026-01-20",
      },
      {
        id: 2,
        customer: "John",
        item: "Birthday Cake",
        status: "onprocess",
        date: "2026-01-21",
      },
      {
        id: 3,
        customer: "Fatma",
        item: "Wedding Cake",
        status: "completed",
        date: "2026-01-19",
      },
    ]);
  }, []);

  const filteredOrders =
    activeFilter === "all"
      ? orders
      : orders.filter((o) => o.status === activeFilter);

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: system-ui, sans-serif;
          background: #f9fafb;
        }

        .dashboard {
          display: flex;
          height: 100vh;
          overflow: hidden;
        }

        /* SIDEBAR */
        .sidebar {
          width: 240px;
          background: #111827;
          color: white;
          padding: 20px;
        }

        .sidebar h2 {
          font-size: 22px;
          margin-bottom: 30px;
          text-align: center;
        }

        .menu-btn {
          display: block;
          width: 100%;
          padding: 12px;
          margin-bottom: 10px;
          border-radius: 8px;
          background: transparent;
          border: none;
          color: white;
          text-align: left;
          cursor: pointer;
          font-size: 15px;
        }

        .menu-btn.active,
        .menu-btn:hover {
          background: #ec4899;
        }

        /* MAIN CONTENT */
        .content {
          flex: 1;
          padding: 30px;
          overflow-y: auto;
        }

        .content h1 {
          font-size: 26px;
          margin-bottom: 20px;
          color: #111827;
        }

        .orders {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }

        .order-card {
          background: white;
          padding: 20px;
          border-radius: 16px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
        }

        .order-card h3 {
          margin: 0 0 10px;
          font-size: 18px;
        }

        .order-card p {
          margin: 4px 0;
          font-size: 14px;
          color: #374151;
        }

        .status {
          margin-top: 12px;
          display: inline-block;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
        }

        .pending {
          background: #fef3c7;
          color: #92400e;
        }

        .onprocess {
          background: #dbeafe;
          color: #1e40af;
        }

        .completed {
          background: #dcfce7;
          color: #166534;
        }

        .empty {
          color: #6b7280;
          font-size: 14px;
        }
      `}</style>

      <div className="dashboard">
        {/* SIDEBAR */}
        <div className="sidebar">
          <h2>Admin Panel</h2>

          <button
            className={`menu-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            📦 Orders Zote
          </button>

          <button
            className={`menu-btn ${
              activeFilter === "pending" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("pending")}
          >
            🕒 Pending
          </button>

          <button
            className={`menu-btn ${
              activeFilter === "onprocess" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("onprocess")}
          >
            🔄 On Process
          </button>

          <button
            className={`menu-btn ${
              activeFilter === "completed" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("completed")}
          >
            ✅ Completed
          </button>
        </div>

        {/* CONTENT */}
        <div className="content">
          <h1>Orders</h1>

          {filteredOrders.length === 0 ? (
            <p className="empty">Hakuna orders kwa category hii</p>
          ) : (
            <div className="orders">
              {filteredOrders.map((order) => (
                <div key={order.id} className="order-card">
                  <h3>{order.item}</h3>
                  <p>
                    <strong>Customer:</strong> {order.customer}
                  </p>
                  <p>
                    <strong>Date:</strong> {order.date}
                  </p>

                  <span className={`status ${order.status}`}>
                    {order.status.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
