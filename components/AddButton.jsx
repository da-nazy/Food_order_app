import React from 'react'
import styles from "../styles/Add.module.css";
export default function AddButton({setClose}) {
  return (
    <div onClick={()=>setClose(true)} className={styles.mainAddButton}>
        Add New Pizza
        </div>
  )
}
