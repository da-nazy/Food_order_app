import React,{useEffect,useState} from 'react';
import axios from "axios";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
import Add from '../components/Add';
import AddButton from '../components/AddButton';
export default function Home({admin,myCookie,url}) {
   const [close,setClose]=useState(false);
   const [pizza,setPizza]=useState(null);
   
   const getPizza=()=>{
     axios.get(`${url}/api/products`).then(function(data){
        setPizza(data.data.payload);
       
     }).catch(function(error){
     console.log(error)
     })
   }

    useEffect(()=>{
     if(!pizza){
      getPizza();
     }
      console.log('test',pizza)
    })


  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Nework</title>
        <meta name="description" content="Best Pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {admin&&<AddButton  setClose={(e)=>setClose(e)}/>}
     {pizza&&<PizzaList pizzaList={pizza}/>}
      {close&&<Add appurl={url} setClose={(e)=>setClose(e)}/>}
    </div>
  )
}

export const getServerSideProps =async (ctx)=>{
  const myCookie=ctx.req?.cookies||"";
  let admin="";
 
  if(myCookie.token!==process.env.TOKEN){
    admin=false;
  }else{
    admin=true;
  }
 
  let url=process.env.host;
return{
  props:{
 
    admin,
    myCookie,
    url
  }
}
}

