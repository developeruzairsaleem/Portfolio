
import styles from "./Navbar.module.css";
import image from "../../images/logo.png"
export default function Navbar(){

return(
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <img style={{height:"50px"}} src={image} alt="" srcset="" />
        </div>
        <ul className={styles.mainNav}>
            <li className={styles.navItem}>About</li>
            <li className={styles.navItem}>Projects</li>
            <li className={styles.navItem}>Contant</li>
        </ul>
    </div>
)


}

