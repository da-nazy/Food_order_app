import React,{useEffect,useState} from 'react';
import axios from "axios";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
import Add from '../components/Add';
import AddButton from '../components/AddButton';
export default function Home({pizzaList,admin,myCookie}) {
   const [close,setClose]=useState(false);
   console.log("this is admin",myCookie.token)
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Nework</title>
        <meta name="description" content="Best Pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {admin&&<AddButton setClose={(e)=>setClose(e)}/>}
      <PizzaList pizzaList={pizzaList}/>
      {close&&<Add setClose={(e)=>setClose(e)}/>}
    </div>
  )
}

export const getServerSideProps =async (ctx)=>{
  const myCookie=ctx.req?.cookies||"";
  let admin="";
  console.log(myCookie.token,process.env.TOKEN)
  if(myCookie.token!==process.env.TOKEN){
    admin=false;
  }else{
    admin=true;
  }
  const res= await axios.get(`${process.env.host}/api/products`);
return{
  props:{
    pizzaList:res.data.payload,
    admin,
    myCookie
  }
}
}

