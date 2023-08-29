
import styles from "./Navbar.module.css";
import image from "../../images/logo.png";
import {useNavigate} from "react-router-dom"
export default function Navbar(){
const navigate = useNavigate()
return(
    <div className={styles.navContainer}>

    <div className={styles.navbar}>
        <div className={styles.logo} onClick={()=>{
          navigate('/')
          let item =  document.getElementById('home-section')
          if(item){
          item.scrollIntoView({behavior:'smooth'})
          }
        }}>
            <img style={{height:"50px"}} src={image} alt="" srcset="" />
        </div>
        <ul className={styles.mainNav}>
            <li className={styles.navItem} onClick={()=>{
                navigate('/projects')
            }}>Projects</li>
            <li className={styles.navItem} onClick={()=>{
                navigate('/contact')
            }} >Contact</li>
            <li className={styles.navItem} onClick={()=>{
                navigate('/myjourney')
            }} >Journey</li>
        </ul>
    </div>
    </div>
)


}

