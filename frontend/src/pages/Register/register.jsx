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

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
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
