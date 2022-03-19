import React,{useState} from 'react'
import { useRouter } from 'next/router';
import styles from "../../styles/Login.module.css"
export default function Login() {
    const [username,setUsername]=useState(null);
    const [password,setPassword]=useState(null);
    const [error,setError]=useState(false);
      const router=useRouter();
  return (
    <div className={styles.container}>Login</div>
  )
}
//time 2:11:07