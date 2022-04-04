import styles from '../../styles/Login.module.css';
import React,{useState} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import axios from 'axios';
export default function Login() {
    const [username,setUsername]=useState(null);
    const [password,setPassword]=useState(null);
    const [error,setError]=useState(false);
    const router=useRouter();
    const handleClick=async()=>{
      try{
  await axios.post(`${process.env.host}/api/login`,{
    username,password
  });
   router.push("/admin");
  
   console.log(router);
      }catch(err){
        console.log(err.message);
        setError(true)
      }
    }
  return (
    <div className={styles.container}>
   <div className={styles.wrapper}>
   <h1>Admin Dashboard</h1>
   <input 
    placeholder='username'
    type="username"
    className={styles.input}
    onChange={(e)=>setUsername(e.target.value)}
   />
    <input 
    placeholder='password'
    type="password"
    className={styles.input}
    onChange={(e)=>setPassword(e.target.value)}
   />
   <button onClick={handleClick} className={styles.button}>
     Sign in
   </button>
   {error&&<span className={styles.error}>Wrong Credentials !</span>}
   </div>
    </div>
  )
}
//00:38:51
