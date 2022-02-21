import React,{useEffect} from 'react';
import axios from "axios";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
export default function Home({pizzaList}) {
   console.log(pizzaList)
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Nework</title>
        <meta name="description" content="Best Pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList pizzaList={pizzaList}/>
    </div>
  )
}

export const getServerSideProps =async ()=>{
  const res= await axios.get("http://localhost:3000/api/products");
return{
  props:{
    pizzaList:res.data.payload
  }
}
}

