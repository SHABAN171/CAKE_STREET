// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  const cakes = [
    {
      id: 1,
      name: "Chocolate Fudge Cake",
      description: "Rich chocolate cake with fudge frosting and chocolate shavings.",
      price: 25,
      image: "https://images.unsplash.com/photo-1601971920544-3b0ec9edc9f6"
    },
    {
      id: 2,
      name: "Vanilla Sponge Cake",
      description: "Light and fluffy vanilla sponge topped with whipped cream.",
      price: 20,
      image: "https://images.unsplash.com/photo-1589308078054-20c1a7ec2e84"
    },
    {
      id: 3,
      name: "Red Velvet Cake",
      description: "Classic red velvet with cream cheese frosting.",
      price: 30,
      image: "https://images.unsplash.com/photo-1617196039967-f5a0e11839b1"
    },
    {
      id: 4,
      name: "Lemon Drizzle Cake",
      description: "Zesty lemon cake with tangy lemon glaze.",
      price: 22,
      image: "https://images.unsplash.com/photo-1617196039981-9f97d1c59f2c"
    },
    {
      id: 5,
      name: "Carrot Cake",
      description: "Moist carrot cake with walnuts and cream cheese icing.",
      price: 28,
      image: "https://images.unsplash.com/photo-1589307000453-0a0ec5838e4a"
    },
    {
      id: 6,
      name: "Strawberry Shortcake",
      description: "Fresh strawberries with whipped cream layers.",
      price: 27,
      image: ""
    },
     {
      id: 7,
      name: "Strawberry Shortcake",
      description: "Fresh strawberries with whipped cream layers.",
      price: 27,
      image: "https://images.unsplash.com/photo-1620911041312-959cb8ffb248"
    },
     {
      id: 8,
      name: "Strawberry Shortcake",
      description: "Fresh strawberries with whipped cream layers.",
      price: 27,
      image: "cake_street frontend/src/assets/image/pexels-cottonbro-4686838.jpg"
    }
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .home-wrapper {
          width: 100vw;
          overflow-x: hidden;
          background: #657699;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .home-content {
          padding: 2rem 1rem;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          text-align: center;
          color: #555;
          margin-bottom: 2rem;
        }

        .cake-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
          width: 100%;
        }

        .cake-card {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
        }

        .cake-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .cake-body {
          padding: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .cake-name {
          font-size: 1.2rem;
          font-weight: bold;
        }

        .cake-desc {
          font-size: 0.9rem;
          color: #555;
          margin: 0.5rem 0;
          flex: 1;
        }

        .cake-price {
          font-weight: bold;
          margin-bottom: 0.75rem;
        }

        .actions {
          display: flex;
          gap: 0.5rem;
        }

        .btn {
          flex: 1;
          text-align: center;
          padding: 0.5rem;
          color: #fff;
          border-radius: 4px;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .btn-blue {
          background: #2563eb;
        }

        .btn-blue:hover {
          background: #1e40af;
        }

        .btn-green {
          background: #16a34a;
        }

        .btn-green:hover {
          background: #15803d;
        }

        footer {
          background: #111827;
          color: #e5e7eb;
          padding: 2rem 1rem;
          margin-top: auto;
        }

        .footer-content {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .footer-title {
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .footer-text {
          font-size: 0.9rem;
          color: #9ca3af;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 1.5rem;
          font-size: 0.8rem;
          color: #9ca3af;
        }
      `}</style>

      <div className="home-wrapper">
        <div className="home-content">
          <h1 className="title">Cake Street</h1>
          <p className="subtitle">
            Order your favorite cake and pay after delivery or pickup
          </p>

          <div className="cake-grid">
            {cakes.map(cake => (
              <div key={cake.id} className="cake-card">
                <img
                  src={`${cake.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={cake.name}
                  className="cake-img"
                />
                <div className="cake-body">
                  <div className="cake-name">{cake.name}</div>
                  <div className="cake-desc">{cake.description}</div>
                  <div className="cake-price">${cake.price}</div>
                  <div className="actions">
                    <Link to={`/cake/${cake.id}`} className="btn btn-blue">
                      Customize
                    </Link>
                    <Link to="/cart" className="btn btn-green">
                      Cart
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer>
          <div className="footer-content">
            <div>
              <div className="footer-title">Cake Street</div>
              <div className="footer-text">
                Freshly baked cakes made with love. Order online and pay offline.
              </div>
            </div>
            <div>
              <div className="footer-title">Contact</div>
              <div className="footer-text">📍 Bakery Street, City</div>
              <div className="footer-text">📞 +255 700 000 000</div>
            </div>
            <div>
              <div className="footer-title">Hours</div>
              <div className="footer-text">Mon - Sat: 8am - 8pm</div>
              <div className="footer-text">Sunday: Closed</div>
            </div>
          </div>
        
        </footer>
      </div>
    </>
  );
}
