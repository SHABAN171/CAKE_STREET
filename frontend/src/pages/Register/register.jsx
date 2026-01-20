import { Link } from "react-router-dom";

function Register() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Create Account</h2>

      <form style={styles.form}>
        <input
          type="text"
          placeholder="Full Name"
          style={styles.input}
          required
        />

        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          required
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          required
        />

        <button style={styles.button}>Register</button>
      </form>

<<<<<<< Updated upstream
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
=======
        .register-btn {
          padding:16px 40px;
          font-size:20px;
          border:none;
          border-radius:12px;
          cursor:pointer;
          background-color:#6a2c70;
          color:white;
          z-index:2;
        }

        .toy-form {
          width:350px;
          padding:20px;
          border-radius:16px;
          background: rgba(255,255,255,0.95);
          box-shadow:0 10px 25px rgba(18, 114, 15, 0.25);
          display:flex;
          flex-direction:column;
          align-items:center;
          cursor: grab;
        }

        .toy-img {
          width:80px;
          margin-bottom:20px;
        }

        .input-wrapper {
          position: relative;
          width: 100%;
          margin-bottom: 16px;
        }

        .input-wrapper svg {
          position: absolute;
          left:12px;
          top:50%;
          transform: translateY(-50%);
          fill:#6a2c70;
        }

        .input-field {
          width:87%;
          padding:12px 12px 12px 40px;
          border-radius:10px;
          border:1px solid #ccc;
          font-size:16px;
          color:white;
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

        .login-link, .home-link {
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
          <button className="register-btn" onClick={() => setShowForm(true)}>
            Register
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

            {/* Inputs with icons */}
            <motion.div className="input-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
              </svg>
              <input className="input-field" type="text" placeholder="Username" />
            </motion.div>

            <motion.div className="input-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <input className="input-field" type="email" placeholder="Email" />
            </motion.div>

            <motion.div className="input-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.48 21 3 13.52 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <input className="input-field" type="tel" placeholder="Phone" />
            </motion.div>

            <motion.div className="input-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M12 17a2 2 0 0 0 2-2v-2a2 2 0 1 0-4 0v2a2 2 0 0 0 2 2zm6-6v-2a6 6 0 0 0-12 0v2H4v12h16V11h-2z"/>
              </svg>
              <input className="input-field" type="password" placeholder="Password" />
            </motion.div>

            <motion.button
              className="submit-btn"
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.7 }}
            >
              Register
            </motion.button>

            <Link to="/login" className="login-link">
              Already have account? Login
            </Link>
          </motion.div>
        )}
      </div>
    </>
>>>>>>> Stashed changes
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
    backgroundColor: "#f08a5d",
    color: "white",
    cursor: "pointer",
  },
};

export default Register;
