import React, { useState } from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";

function Featured() {
  const [index, setIndex] = useState(0);

  const images = [
    "/img/featured3.png",
    "/img/featured.png",
    "/img/featured2.webp",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : index);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  console.log(index);
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => {
          return (
            <div  key={i} className={styles.imgContainer}>
              <Image
                className={styles.img}
                src={img}
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>
          );
        })}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image src="/img/arrowr.png" alt="" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}
// time 0.27:40
export default Featured;
