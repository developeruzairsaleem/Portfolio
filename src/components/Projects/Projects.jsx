import styles from "./Projects.module.css"
import image1 from "../../images/uzairkhansquare.jpeg"
export default function Projects(){


return(
    <>
       <section className={styles.section}>
        <div className={styles.container}>
            <h3 className={styles.mainHeading}> 
            Projects
            </h3>

            <div className={styles.project}>
                <div className={styles.left}>
                    <img className={styles.image} src={image1} alt="" />
                </div>
                <div className={styles.right}>
                    {/* <h4 className={styles.secondaryHeading}>A Blog Platform</h4> */}
                    <p className={styles.description}>
                    A blog platform where users can create, edit, and delete blog posts with ease . 
                    </p>
                    <div className={styles.buttonContainer}></div>
                    <button className={styles.website}> Visit Site</button>
                    <button className={styles.code}> Visit Code</button>
                </div>
            </div>
             


        </div>
       </section>
    </>
)

}