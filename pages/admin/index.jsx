import React,{useState} from 'react'
import  Image from "next/image"
import styles from "../../styles/Admin.module.css"
import axios from 'axios'
export default function Index({orders,products,url}) {
  const[pizzaList,setPizzaList]=useState(products);
  const[orderList,setorderList]=useState(orders);
  const status=["preparing","on the way","delivered"];
 
  const handleDelete=async(id)=>{
    try{
   const res=await axios.delete(`${url}/api/products/`+id);
   setPizzaList(pizzaList.filter((pizza)=>pizza._id!==id));
    }catch(err){
      console.log(err);
    }
  }

  const handleStatus=async(id)=>{
    
    const item=orderList.filter(order=>order._id===id)[0];
    const currentStatus=item.status;
    console.log(item);
    try{
     const res=await axios.put(`${url}/api/orders/`+id,{status:currentStatus+1 });
    setorderList([res.data,
        ...orderList.filter(order=>order._id!==id),
    ])
    }catch(err){
      console.log(err)
    }
  }


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
         {pizzaList.map((product)=>(
         <tbody key={product._id}>
   
         <tr className={styles.trTitle}>
             <td>
                 <Image 
                 src={product.img}
                 width={50}
                 height={50}
                 objectFits="cover"
                 alt=""
                 />
             </td>
             <td>{product._id.slice(0,5)}...</td>
             <td>{product.title}</td>
             <td>${product.prices[0]}</td>
             <td>
               <button className={styles.button}>Edit</button> 
               <button className={styles.button} onClick={()=>handleDelete(product._id)}>Delete</button>
             </td>
        </tr>   
        </tbody> 
             ))}


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
         {orderList.map((order,i)=>{
   return <tbody key={i}>
   <tr className={styles.trTitle}>
     <td>
       {console.log(order?._id?.slice(0,5))}
       {order?._id?.slice(0,5)}...
     </td>
     <td>{order.customer}</td>
     <td>${order.total}</td>
     <td><span>{order.method===0?"cash":"paid"}</span></td>
     <td>{status[order.status]}</td>
     <td>
       <button onClick={()=>handleStatus(order._id)}>Next Stage</button> 
    </td>
      </tr>    
         </tbody> 
         })}
        

        </table>
    </div>
    </div>
  )
}
export const getServerSideProps=async(ctx)=>{
  const myCookie=ctx.req?.cookies||"";
  if(myCookie.token!==process.env.TOKEN){
    return {
      redirect:{
        destination:"/admin/login",
        permanent:false,
      }
    }
  }
    const productRes=await axios.get(`${process.env.host}/api/products`);
    const orderRes =await axios.get(`${process.env.host}/api/orders`)
    let url=process.env.host;
    return{
        props:{
            orders:orderRes.data,
            products:productRes.data.payload,
            url
        }
    }
}
