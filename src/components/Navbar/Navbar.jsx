
import styles from "./Navbar.module.css";
export default function Navbar(){

return(
    <div className={styles.navbar}>
        <div className={styles.logo}>Uzair <span className={styles.logo__inner}>Khan</span></div>
        <ul className={styles.mainNav}>
            <li className={styles.navItem}>About</li>
            <li className={styles.navItem}>Projects</li>
            <li className={styles.navItem}>Contant</li>
        </ul>
    </div>
)


}

