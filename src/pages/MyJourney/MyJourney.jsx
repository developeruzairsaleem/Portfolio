import React, { useState, useRef, useEffect } from "react";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import styles from "./MyJourney.module.css";
import { data } from "./data";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function MyJourney() {

  const myData = data;
  const [isActive, setIsActive] = useState(null);
  const contentRef = useRef([]);

  useEffect(() => {
    contentRef.current = myData.map(() => React.createRef());
  }, []);

  useEffect(() => {
    if (contentRef.current[isActive]) {
      const scrollHeight = contentRef.current[isActive].current.scrollHeight;
      contentRef.current[isActive].current.style.maxHeight = isActive === null ? "0px" : `${scrollHeight}px`;
    }
  }, [isActive]);


  return (<>
    <Navbar/>
    <div className={styles.main}>
    <div className={styles.completeHead}>

      <div className={styles.container}>
        <h1 className={styles.mainHeading}>My Journey as a Frontend Developer</h1>
        <p className={styles.mainPara}>
        Hello! I'm Uzair, and I'm a frontend developer from Pakistan. Let me take you through my adventure of becoming a web developer, starting from scratch.

        </p>
      </div>
    </div>
        <div className={styles.accordion}>
        <div className={styles.container}>

        <h2 className={styles.secondaryHeading}>Timeline of Progression</h2>
          {myData.map((item, index) => (
            <div key={index} className={styles.accordionItem}>
              <div
                className={styles.head}
                onClick={() => {
                  if (isActive === index) {
                    setIsActive(null);
                  } else {
                    setIsActive(index);
                  }
                }}
              >
                <h2 className={styles.accordionHeading}>
                  {item.title} - {item.year}
                </h2>
                {
                    isActive===index?<BiMinusCircle className={styles.icon}/>:
                    <BiPlusCircle className={styles.icon}/>
                }
                </div>
              <div
                className={styles.body}
                ref={contentRef.current[index]}
                style={{
                  maxHeight: isActive === index ? `${contentRef.current[index]?.current?.scrollHeight}px` : "0px",
                  transition: "max-height 0.3s ease",
                  overflow: "hidden",
                }}
              >
                <p className={styles.accordionPara}>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  </>
  );
}