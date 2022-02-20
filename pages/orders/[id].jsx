import React from 'react'
import Image from "next/image";
import styles from '../../styles/Order.module.css';
function Order() {
    const status=0;

    const statusClass=(index)=>{
      if(index-status<1) return styles.done;
      if(index-status===1) return styles.inProgress;
      if(index-status>1) return styles.undone;

    };

  return (
    <div className={styles.container}>
 <div className={styles.left}>
     <div className={styles.row}>
     <table className={styles.table}>
                <tr className={styles.trTitle}>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
                <tr className={styles.tr}>
                    <td>
                       <span className={styles.id}>129837819237</span> 
                    </td>
                   <td>
                   <span className={styles.name}>
                      John Doe
                    </span>
                   </td>
                   <td>
                       <span className={styles.address}>Elton st. 212-33 LA</span>
                   </td>
                 
                   <td>
                       <span className={styles.total}>$19.90</span>
                   </td>
                </tr>

               
               
            </table>
     </div>
     <div className={styles.row}>
         <div className={statusClass(0)}>
             <Image className={styles.checkedIcon} alt="" src="/img/paid.png" width={30} height={30}/>
        <span>Payment</span>
        <div className={styles.checkedIcon}>
            <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="" />
        </div>
         </div>
         <div className={statusClass(1)}>
             <Image alt="" src="/img/bake.png" width={30} height={30}/>
        <span>Preparing</span>
        <div className={styles.checkedIcon}>
            <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="" />
        </div>
         </div>
         <div className={statusClass(2)}>
             <Image className={styles.checkedIcon} alt="" src="/img/bike.png" width={30} height={30}/>
        <span>On The Way</span>
        <div className={styles.checkedIcon}>
            <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="" />
        </div>
         </div>
         <div className={statusClass(3)}>
             <Image  className={styles.checkedIcon} alt="" src="/img/delivered.png" width={30} height={30}/>
        <span>Delivered</span>
        <div className={styles.checkedIcon}>
            <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="" />
        </div>
         </div>
     </div>
 </div>
 <div className={styles.right}>
 <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2> 
            <div className={styles.title}>
                <b className={styles.totalTextTitle}> Subtotal:</b>$79.60
            </div>

            <div className={styles.title}>
                <b className={styles.totalTextTitle}>Discount:</b>$79.60
            </div>

            <div className={styles.title}>
                <b className={styles.totalTextTitle}> Total:</b>$79.60
            </div>
            <button disabled className={styles.button}>PAID</button>
            </div>
 </div>
    </div>
  )
}
// time 1.19.53
export default Order