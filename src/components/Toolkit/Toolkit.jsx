import styles from "./Toolkit.module.css"
import {FaNodeJs,FaGithub,FaGitAlt,FaNpm,FaReact,FaHtml5,FaCss3Alt} from "react-icons/fa"
import{SiMongodb,SiExpress,SiRedux,SiJavascript,SiTailwindcss} from "react-icons/si"
export default function Toolkit (){



    return(
        <section className={styles.section}>
        <div className={styles.container}>

            <h3 className={styles.mainHeading}>
                My Toolkit
            </h3>
            <p className={styles.para}>
            I specialize in making web apps that look great and offer seamless interactions, ensuring a positive user experience.
            </p>

            <div className={styles.iconsContainer}>
                <FaNpm  className={styles.icon}/>
                <FaReact className={styles.icon}/>
                <SiRedux className={styles.icon}/>
                <FaHtml5 className={styles.icon}/>
                <FaCss3Alt className={styles.icon}/>
                <SiJavascript className={styles.icon}/>
                <FaGitAlt className={styles.icon}/>
                <FaGithub className={styles.icon}/>
                <SiTailwindcss className={styles.icon}/>
                <SiExpress className={styles.icon}/>
                <FaNodeJs className={styles.icon}/>
                <SiMongodb className={styles.icon}/>
            </div>
        </div>
        </section>
    )


}