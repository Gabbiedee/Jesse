import styles from "./Home.module.css"
import { Link } from "react-router-dom"
const Home = () => {
  return (
   <div className={styles.main}>
    <h1>Health and Wellness</h1>
    <div>
            <ul className={styles.navbar}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/membership">Membership</Link></li>
                <li><Link to="/career">Career</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
        <div className={styles.hero}>
            <h1>Welcome to Health and Wellness</h1>
            <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0V0rkMTWMII1B1GbQWdxOXUUBGS_S8F2UJw&s" alt="Health and Wellness"/>
            <p>Welcome to Living Wright Healthcare Services where our mission is to enhance the well-being of our community by providing top-tier online healthcare services and innovative health solutions. Our dedicated team of healthcare professionals and experts is committed to delivering personalized care and exceptional service to every individual we serve.</p> 
        </div>
   </div>
  )
}

export default Home