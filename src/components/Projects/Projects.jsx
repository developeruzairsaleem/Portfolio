import styles from "./Projects.module.css"
import image1 from "../../images/uzairkhansquare.jpeg"
import image2 from '../../images/hangman.JPG'
import image3 from '../../images/hangman2.JPG'
import image4 from '../../images/hangman3.JPG'
import image5 from '../../images/hangman5.JPG'
import image6 from '../../images/quiz1.JPG'
import image7 from '../../images/quiz2.JPG'
export default function Projects(){


return(
    <>
       <section id="project-section" className={styles.section}>
        <div className={styles.container}>
            <h3 className={styles.mainHeading}> 
            Projects
            </h3>

                <div className={styles.basicProjects}>
                        <div className={styles.basicProject}>
                        <div className={styles.basicImageContainer}>
                                <img className={styles.basicImage} src={image5} alt="" srcset="" />
                        </div>
                                <h3 className={styles.basicTitle}>Interactive Quiz App</h3>
                                <p className={styles.basicDescription}>Dive into the world of trivia with my Simple Quiz App, created with vanilla JavaScript!</p>
                                <div className={styles.basicButtons}>
                                <button className={styles.basicWebsite}>See in Action</button>
                                <button className={styles.basicCode}>GitHub Repo</button>
                                </div>
                        </div>
                        <div className={styles.basicProject}>
                        <div className={styles.basicImageContainer}>

                                <img className={styles.basicImage} src={image5} alt="" srcset="" />
                        </div>
                                <h3 className={styles.basicTitle}>Interactive Quiz App</h3>
                                <p className={styles.basicDescription}>Dive into the world of trivia with my Simple Quiz App, created with vanilla JavaScript!</p>
                                <div className={styles.basicButtons}>
                                <button className={styles.basicWebsite}>See in Action</button>
                                <button className={styles.basicCode}>GitHub Repo</button>
                                </div>
                        </div>
                        <div className={styles.basicProject}>
                        <div className={styles.basicImageContainer}>

                                <img className={styles.basicImage} src={image7} alt="" srcset="" />
                        </div>
                                <h3 className={styles.basicTitle}>Interactive Quiz App</h3>
                                <p className={styles.basicDescription}>Dive into the world of trivia with my Simple Quiz App, created with vanilla JavaScript!</p>
                                <div className={styles.basicButtons}>
                                <button className={styles.basicWebsite}>See in Action</button>
                                <button className={styles.basicCode}>GitHub Repo</button>
                                </div>
                        </div>
                        <div className={styles.basicProject}>
                        <div className={styles.basicImageContainer}>
                                <img className={styles.basicImage} src={image7} alt="" srcset="" />
                        </div>
                                <h3 className={styles.basicTitle}>Interactive Quiz App</h3>
                                <p className={styles.basicDescription}>Dive into the world of trivia with my Simple Quiz App, created with vanilla JavaScript!</p>
                                <div className={styles.basicButtons}>
                                <button className={styles.basicWebsite}>See in Action</button>
                                <button className={styles.basicCode}>GitHub Repo</button>
                                </div>
                        </div>
                       
                        </div>



            <div className={styles.project}>
                <div className={styles.left}>
                    <img className={styles.image} src={image1} alt="" />
                </div>
                <div className={styles.right}>
                    {/* <h4 className={styles.secondaryHeading}>A Blog Platform</h4> */}
                    <p className={styles.description}>
                    A blog platform where users can create, edit, and delete blog posts with ease . 
                    </p>
                    <div className={styles.buttonContainer}>

                    <a href="https://coin-base-app-by-uzair.onrender.com">
                    <button className={styles.website}> visit website</button>

                    </a>
                    <a href="https://github.com/Uzairsaleemkhan/coin-base-modified-frontend">

                    <button className={styles.code}> visit code</button>
                    </a>
                    </div>
                </div>
            </div>






            </div>
             

       </section>
    </>
)

}