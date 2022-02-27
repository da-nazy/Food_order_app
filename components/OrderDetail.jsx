import React, { useState } from 'react'
import styles from "../styles/OrderDetail.module.css";
export default function OrderDetail() {
      
    const [customer,setCustomer]=useState("");
    const [address,setAddress]=useState("");
    const [phone,setPhone]=useState("");

    const handleClick=()=>{

    }
    return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
          You will pay $12 after delivery.

          </h1>  
          <div className={styles.item}>
              <label>Name Surname</label>
              <input placeholder='John Doe' type="text" className={styles.input} onChange={(e)=>setCustomer(e.target.value)} />
          </div>
          <div className={styles.item}>
              <label>Phone Number</label>
              <input placeholder='+1 234 567 89'
               type="text" 
               className={styles.input}
                onChange={(e)=>setAddress(e.target.value)} />
          </div>
          <div className={styles.item}>
              <label>Address</label>
              <input placeholder='John Doe'
               type="text"
                className={styles.input} 
                onChange={(e)=>setPhone(e.target.value)} />
          </div>
      <button className={styles.button} onClick={handleClick}>
          Order
      </button>
    </div>
    </div>
  )
}
// time 1:32:34