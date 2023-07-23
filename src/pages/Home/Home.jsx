import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
export default function Home(){
    const[str,setStr]= useState("");
    const[index,setIndex]=useState(0);
    const string ="hello there";



    useEffect(()=>{
let rev;
 const namee= setInterval(()=>{

    if(index<string.length){

        setStr(str+string[index])
        setIndex(index+1)
        
    }

else{
    clearInterval(namee)
     rev= setInterval(() => {
    if(str.length){

        setStr(str.slice(0,-1))
        console.log("hello")
    }
    else{
        clearInterval(rev)
    }
}, 1000);




}


  },1000)




return ()=>{
    clearInterval(namee)
    clearInterval(rev)
}



    })


    return(<>
        <Navbar/>
        <h1>Hey! I am Uzair. I</h1>
        {str}



    </>
    )

};