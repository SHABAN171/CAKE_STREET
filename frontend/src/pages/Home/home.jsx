import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Inline CSS */}
      <style>{`
        .home-container {
          height: 100vh;
          width: 100vw;
          background: linear-gradient(
            270deg,
            #ff9a9e,
            #fad0c4,
            #fbc2eb,
            #a18cd1,
            #ff9a9e
          );
          background-size: 600% 600%;
          animation: moveColors 12s ease infinite;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          position: relative;
        }

        @keyframes moveColors {
          0% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        .floating span {
          position: absolute;
          font-size: 38px;
          animation: float 8s infinite ease-in-out;
        }

        .floating span:nth-child(1) { left: 10%; animation-delay: 0s; }
        .floating span:nth-child(2) { left: 30%; animation-delay: 2s; }
        .floating span:nth-child(3) { left: 60%; animation-delay: 4s; }
        .floating span:nth-child(4) { left: 80%; animation-delay: 6s; }

        @keyframes float {
          0% { bottom: -50px; opacity: 0; }
          50% { opacity: 1; }
          100% { bottom: 110%; opacity: 0; }
        }

        .overlay {
          background: rgba(0,0,0,0.45);
          padding: 40px;
          border-radius: 18px;
          text-align: center;
          color: white;
          max-width: 520px;
          width: 90%;
          z-index: 2;
        }

        .title {
          font-size: 42px;
          margin-bottom: 10px;
        }

        .subtitle {
          font-size: 18px;
          margin-bottom: 25px;
        }

        .search-box {
          display: flex;
          gap: 10px;
          margin-bottom: 25px;
        }

        .search-box input {
          flex: 1;
          padding: 12px;
          border-radius: 25px;
          border: none;
          outline: none;
        }

        .search-box button {
          padding: 12px 20px;
          border-radius: 25px;
          border: none;
          background: #f08a5d;
          color: white;
          cursor: pointer;
        }

        .buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
        }

        .btn {
          padding: 12px 30px;
          font-size: 16px;
          border-radius: 30px;
          border: none;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .btn:hover {
          transform: scale(1.05);
        }

        .primary {
          background: #6a2c70;
          color: white;
        }

        .secondary {
          background: #f08a5d;
          color: white;
        }

        @media (max-width: 480px) {
          .title { font-size: 32px; }
          .search-box { flex-direction: column; }
        }
      `}</style>

      <div className="home-container">
        {/* Floating cakes */}
        <div className="floating">
          <span>🎂</span>
          <span>🧁</span>
          <span>🍰</span>
          <span>🎂</span>
        </div>

        <motion.div
          className="overlay"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="title"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            🍰 Cake Street
          </motion.h1>

          <motion.p
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Pata cake bora karibu na mtaa wako kwa urahisi.
          </motion.p>

          <motion.div
            className="search-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <input placeholder="📍 Andika mtaa wako..." />
            <button>Tafuta</button>
          </motion.div>

          <motion.div
            className="buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Link to="/login">
              <button className="btn primary">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn secondary">Register</button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3a2d19ff",
  },
  title: {
    fontSize: "36px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "30px",
    textAlign: "center",
    maxWidth: "400px",
  },
  buttonGroup: {
    display: "flex",
    gap: "20px",
  },
  button: {
    padding: "12px 30px",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor: "#6a2c70",
    color: "white",
  },
};

export default Home;
