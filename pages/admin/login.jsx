<<<<<<< HEAD
import styles from '../../styles/Login.module.css';
import React,{useState} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import axios from 'axios';
=======
import React,{useState} from 'react'
import { useRouter } from 'next/router';
import styles from "../../styles/Login.module.css"
>>>>>>> fb01310dae0b5e54cc66e56d46bcfba2b62b2c60
export default function Login() {
    const [username,setUsername]=useState(null);
    const [password,setPassword]=useState(null);
    const [error,setError]=useState(false);
<<<<<<< HEAD
    const router=useRouter();
    const handleClick=async()=>{
      try{
  await axios.post("http://localhost:3000/api/login",{
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
=======
      const router=useRouter();
  return (
    <div className={styles.container}>Login</div>
  )
}
//time 2:11:07
>>>>>>> fb01310dae0b5e54cc66e56d46bcfba2b62b2c60
