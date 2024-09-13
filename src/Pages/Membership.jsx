import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Membership = () => {
  const [nameInput, setnameInput] = useState("");
  const [emailInput, setemailInput] = useState("");
  const [passwordInput, setpaswwordInput] = useState("");
  const [numberInput, setnumberInput] = useState("");

  const formHandler = (e) => {
    e.preventDefault();

    if (!nameInput || !emailInput || !passwordInput || !numberInput) {
      return alert("enter empty fields");
    }

    console.log({
      nameInput,
      emailInput,
      passwordInput,
      numberInput,
    });

    setnameInput("");
    setemailInput("");
    setpaswwordInput("");
    setnumberInput("");
  };

  return (
    <div className={styles.main}>
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
        <h1>This is the Membership Page</h1>
        <p>
          Your one-stop solution for all health-related needs. Join us and be a
          part of a healthier community.
        </p>
        <img
          src="https://th.bing.com/th?id=OIP.A5rZGnnmCAixyCKce89DzwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          alt="Membership Image"
        />
        <form onSubmit={formHandler}>
          <div className={styles.formDiv}>
            <div className={styles.inputDiv}>
              <label>Full name</label>
              <input
                type="text"
                value={nameInput}
                placeholder="fullname"
                onChange={(e) => {
                  setnameInput(e.target.value);
                }}
              />
            </div>
            <div className={styles.inputDiv}>
              <label>Email address</label>
              <input
                type="email"
                value={emailInput}
                placeholder="email"
                onChange={(e) => {
                  setemailInput(e.target.value);
                }}
              />
            </div>
            <div className={styles.inputDiv}>
              <label>Password</label>
              <input
                type="password"
                value={passwordInput}
                placeholder="password"
                onChange={(e) => {
                  setpaswwordInput(e.target.value);
                }}
              />
            </div>
            <div className={styles.inputDiv}>
              <label>Phone number</label>
              <input
                type="number"
                placeholder="phone no"
                value={numberInput}
                onChange={(e) => {
                  setnumberInput(e.target.value);
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
  );
};

export default Membership;
