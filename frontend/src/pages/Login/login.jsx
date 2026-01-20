import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Login() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* Inline CSS */}
      <style>{`
        body { margin:0; font-family:sans-serif; }
        .container {
          height: 100vh;
          width: 100vw;
          background: linear-gradient(270deg,#fbc2eb,#a18cd1,#ff9a9e);
          background-size: 600% 600%;
          animation: gradientAnim 15s ease infinite;
          overflow: hidden;
          display:flex;
          justify-content:center;
          align-items:center;
          position:relative;
        }

        @keyframes gradientAnim {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }

        /* Floating cakes / sparkles */
        .floating span {
          position:absolute;
          font-size:32px;
          animation: float 8s infinite ease-in-out;
        }

        .floating span:nth-child(1){ left:5%; animation-delay:0s; }
        .floating span:nth-child(2){ left:25%; animation-delay:2s; }
        .floating span:nth-child(3){ left:50%; animation-delay:4s; }
        .floating span:nth-child(4){ left:75%; animation-delay:6s; }
        .floating span:nth-child(5){ left:90%; animation-delay:1s; }

        @keyframes float {
          0%{bottom:-50px; opacity:0;}
          50%{opacity:1;}
          100%{bottom:110%; opacity:0;}
        }

        /* Login button */
        .login-btn {
          padding:16px 40px;
          font-size:20px;
          border:none;
          border-radius:12px;
          cursor:pointer;
          background-color:#6a2c70;
          color:white;
          z-index:2;
        }

        /* Toy form */
        .toy-form {
          width:320px;
          padding:20px;
          border-radius:16px;
          background: rgba(255,255,255,0.95);
          box-shadow:0 10px 25px rgba(0,0,0,0.25);
          display:flex;
          flex-direction:column;
          align-items:center;
          cursor: grab;
        }

        .toy-img {
          width:80px;
          margin-bottom:20px;
        }

        .input-field {
          width:100%;
          padding:12px;
          margin-bottom:16px;
          border-radius:10px;
          border:1px solid #ccc;
          font-size:16px;
        }

        .submit-btn {
          width:100%;
          padding:12px;
          border-radius:10px;
          border:none;
          background-color:#f08a5d;
          color:white;
          cursor:pointer;
          font-size:16px;
          margin-bottom:8px;
        }

        .register-link, .home-link {
          font-size:14px;
          color:#6a2c70;
          text-decoration:none;
          margin-top:8px;
        }

        .home-link {
          align-self:flex-start;
          margin-bottom:12px;
        }
      `}</style>

      <div className="container">
        {/* Floating cakes */}
        <div className="floating">
          <span>🎂</span>
          <span>🧁</span>
          <span>🍰</span>
          <span>✨</span>
          <span>🎂</span>
        </div>

        {!showForm && (
          <button className="login-btn" onClick={() => setShowForm(true)}>
            Login
          </button>
        )}

        {showForm && (
          <motion.div
            className="toy-form"
            drag
            dragConstraints={{ top: -200, bottom: 200, left: -100, right: 100 }}
            initial={{ y: -400, rotate: -15 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
          >
            {/* Home link */}
            <Link to="/" className="home-link">🏠 Back to Home</Link>

            {/* Toy image */}
            <motion.img
              className="toy-img"
              src="https://cdn-icons-png.flaticon.com/512/3617/3617335.png"
              alt="cake toy"
              initial={{ scale: 0.5, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            />

            {/* Inputs */}
            <motion.input
              className="input-field"
              type="text"
              placeholder="Username"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            />
            <motion.input
              className="input-field"
              type="password"
              placeholder="Password"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            />

            <motion.button
              className="submit-btn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Login
            </motion.button>

            <Link to="/register" className="register-link">
              Don’t have account? Register
            </Link>
          </motion.div>
        )}
      </div>
    </>
  );
}

<<<<<<< HEAD
const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
  },
  title: {
    marginBottom: "20px",
  },
  form: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#6a2c70",
    color: "white",
    cursor: "pointer",
  },
};

=======
>>>>>>> 495567076b5789dda611eb4abee5df9775692130
export default Login;
