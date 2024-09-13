import styles from "./Home.module.css"
import { Link } from "react-router-dom"

const Career = () => {
  return (
    <div className={styles.main}><h1>Health and Wellness</h1>
    <div>
        <ul className={styles.navbar}>
        <li><Link to="/">Home</Link></li>
                <li><Link to="/membership">Membership</Link></li>
                <li><Link to="/career">Career</Link></li>
                <li><Link to="/login">Login</Link></li>
        </ul>
    </div>
    <div className={styles.hero}>
        <h1>This is the Career Page</h1>
        <img src="https://th.bing.com/th?id=OIP.SETvXkcSgYhO3E6qY-QZpwHaGk&w=265&h=235&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Career Image"/>
        <h2>Oops... no vacancy at the moment, please keep checking our website for future job openings</h2>
    </div></div>
  )
}

export default Career