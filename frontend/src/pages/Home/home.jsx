import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🍰 Welcome to Cake Street</h1>
      <p style={styles.text}>
        Order your favorite cakes online with fast delivery and easy payment.
      </p>

      <div style={styles.buttonGroup}>
        <Link to="/login">
          <button style={styles.button}>Login</button>
        </Link>

        <Link to="/register">
          <button style={{ ...styles.button, backgroundColor: "#f08a5d" }}>
            Register
          </button>
        </Link>
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
