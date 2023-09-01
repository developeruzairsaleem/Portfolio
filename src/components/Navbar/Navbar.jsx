
import styles from "./Navbar.module.css";
import image from "../../images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Navbar(){
    const [activateTransition,setActivateTransition] = useState(false)

return(
    <div className={styles.navContainer}>
    <div className={styles.navbar}>
        <NavLink to="/" className={styles.logo} >
            <img style={{height:"50px"}} src={image} alt="" srcset="" />
        </NavLink>
        <div className={styles.mainNav}>
            <NavLink to='/projects' className={({isActive})=>(
                isActive?styles.active:styles.navItem
            ) 
            }  >Projects</NavLink>
            <NavLink to='/contact' className={({isActive})=>(
                isActive?styles.active:styles.navItem
            ) 
            }  >Contact</NavLink>
            <NavLink to='/myjourney' className={({isActive})=>(
                isActive?styles.active:styles.navItem
            ) 
            }  
             >Journey</NavLink>
        </div>
    </div>
    </div>
)


}

