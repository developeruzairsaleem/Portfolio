import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import Typewriter from "typewriter-effect";

export default function Home(){

    return(<>
        <Navbar/>

        <div className={styles.container}>

        <h1 className={styles.mainHeading}>Hey! I am Uzair. I</h1>
        <div className={styles.typeContainer}>

        <Typewriter className={styles.typeWriter}
 
             onInit={(typewriter) => {
                 typewriter
                    .changeDelay(50)
                    .typeString("am a Full-Stack Web Developer")
                     .pauseFor(1000)
                     .deleteAll()
                     .changeDelay(50)
                     .typeString("love everything about code")
                     .pauseFor(1000)
                    .deleteAll()
                    .changeDelay(50)
                    .typeString("also teach programming to people")
                    .pauseFor(1000)
                    .deleteAll()
                    .changeDelay(50)
                    .typeString("solve problems")
                    .start();
 }}
/>
        </div>
        </div>
    </>
    )

};







































// let rev;



//  const namee= setInterval(()=>{

//     if(index<string.length){

//         setStr(str+string[index])
//         setIndex(index+1)

//     }

// else{
//     clearInterval(namee)
//      rev= setInterval(() => {
//     if(str.length){

//         setStr(str.slice(0,-1))
//         console.log("hello")
//     }
//     else{
//         clearInterval(rev)
//     }
// }, 200);

// }

//   },200)


// return ()=>{
//     clearInterval(namee)
//     clearInterval(rev)
// }