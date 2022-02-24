import React, { useState } from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/Image";
import axios from "axios";
import {useDispatch} from "react-redux";
import { addProduct } from "../../redux/cartSlice";
function Product({pizza}) {
  const [size, setSize] = useState(0);
  const [price,setPrice]=useState(pizza.prices[0]);
  const [extras,setExtra]=useState([]);
  const [quantity,setQuantity]=useState(1)
  // dispatch
  const dispatch=useDispatch();

  const changePrice=(number)=>{
   setPrice(price+number);
   console.log(price)
  }
const handleSize=(sizeIndex)=>{
const difference=pizza.prices[sizeIndex]-pizza.prices[size];
setSize(sizeIndex);
changePrice(difference);
}

const handleChange=(e,option)=>{
  const checked=e.target.checked;
  console.log(option.price);
  if(checked){
  changePrice(option.price);
  setExtra(prev=>[...prev,option])
  }else{
    changePrice(-option.price);
    setExtra(extras.filter(extra=>extra._id!==option._id))
  }
}
  const handleClick=()=>{
    dispatch(addProduct({...pizza,extras,price,quantity}))
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} alt="" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredient</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((option)=>
             <div key={option._id} className={styles.option}>
             <input
               type="checkbox"
               id={option.text}
               name={option.text}
               className={styles.checkbox}
               onChange={(e)=>handleChange(e,option)}
             />
             <label htmlFor={option.text}>{option.text}</label>
           </div>
           )}
          
         
         
          
        </div>
        <div className={styles.add}>
          <input 
          onChange={(e)=>setQuantity(e.target.value)}
           type="number"
            defaultValue={1}
             className={styles.quantity}/>
          <button 
          className={styles.button} onClick={handleClick}>Add too Cart</button>
        </div>
      </div>
    </div>
  );
}
// our header params which is id
export const getServerSideProps =async ({params})=>{
  const res= await axios.get(`http://localhost:3000/api/products/${params.id}`);
return{
  props:{
    pizza:res.data.payload
  }
}
}
//time 1:02:16

export default Product;
