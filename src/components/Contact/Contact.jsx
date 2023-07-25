import styles from "./Contact.module.css"

export default function Contact (){


    return(
        <>
        <section className={styles.section}>
            <div className={styles.container}>
                <h3 className={styles.mainHeading}>
                    Contact Me
                </h3>
<div className={styles.main}>

                <input className={styles.input} placeholder="Enter your email" type="email" name="" id="" />
                <textarea className={styles.message} placeholder="Leave a message..." name="" id="" cols="30" rows="10" ></textarea>
                <button className={styles.submit}>Submit</button>
</div>
            </div>
        </section>
        </>
    )




}