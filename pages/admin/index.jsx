import React from 'react'
import  Image from "next/image"
import styles from "../../styles/Admin.module.css"
import axios from 'axios'
export default function index({orders,products}) {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
         <tbody>
         <tr className={styles.trTitle}>
             <th>Image</th>
             <th>Id</th>
             <th>Title</th>
             <th>Price</th>
             <th>Action</th>
        </tr>    
         </tbody> 

         <tbody>
             {products.map(prodct=>(

             )}
         <tr className={styles.trTitle}>
             <td>
                 <Image 
                 src="/img/pizza.png"
                 width={50}
                 height={50}
                 objectFits="cover"
                 alt=""
                 />
             </td>
             <td>PizzaId</td>
             <td>Pizza Title</td>
             <td>$50</td>
             <td>
               <button className={styles.button}>Edit</button> 
               <button className={styles.button}>Delete</button>
             </td>
        </tr>    
         </tbody> 

        </table>
    </div>
    <div className={styles.item}> 
    <h1 className={styles.title}>Orders</h1>
    <table className={styles.table}>
         <tbody>
         <tr className={styles.trTitle}>
             <th>Id</th>
             <th>Customer</th>
             <th>Total</th>
             <th>Payment</th>
             <th>Status</th>
             <th>Action</th>
        </tr>    
         </tbody> 

         <tbody>
         <tr className={styles.trTitle}>
             <td>
               {" 8921379812379127".slice(0,5)}...
             </td>
             <td>John Doe</td>
             <td>$50</td>
             <td>paid</td>
             <td>Preparing</td>

             <td>
               <button >Next Stage</button> 
            </td>
        </tr>    
         </tbody> 

        </table>
    </div>
    </div>
  )
}
export const getServerSideProps=async()=>{
    const productRes=await axios.get("http://localhost3000/api/products");
    const orderRes =await axios.get("http://localhost:3000/api/orders")
    return{
        props:{
            orders:orderRes.data,
            pizzas:productRes.data,
        }
    }
}
//time 1:50:40