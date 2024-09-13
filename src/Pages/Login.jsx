import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [emailInput, setemailInput] = useState("");
  const [passwordInput, setpaswwordInput] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    if (!emailInput || !passwordInput) {
      return alert("enter empty fields");
    }

    console.log({
      emailInput,
      passwordInput,
    });

    setemailInput("");
    setpaswwordInput("");
  };
  return (
    <div className={styles.main}>
      <div>
        <h1>Health and Wellness</h1>
        <div>
          <ul className={styles.navbar}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/membership">Membership</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className={styles.hero}>
          <h1>This is the Login Page</h1>
          <form onSubmit={formHandler}>
            <div className={styles.formDiv}>
              <div className={styles.inputDiv}>
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="email"
                  value={emailInput}
                  onChange={(e) => {
                    setemailInput(e.target.value);
                  }}
                />
              </div>
              <div className={styles.inputDiv}>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={passwordInput}
                  onChange={(e) => {
                    setpaswwordInput(e.target.value);
                  }}
                />
              </div>
              <div className={styles.inputDiv}>
                <input type="submit" id="submit" value="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
