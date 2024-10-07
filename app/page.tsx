import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
   <>
   <nav>
    <ul style={{display:"flex",gap:"2rem",listStyle:"none",fontSize:"3rem",justifyContent:"center",fontWeight:"bolder",color:"red",backgroundColor:"black"}}>
     <li><Link href={'/Home'}>Home</Link></li>
     <li><Link href={'/About'}>About</Link></li>
     <li><Link href={'/Service'}>Services</Link></li>
     <li><Link href={'./Service/Project'}>Projects</Link></li>
     <li><Link href={'/Contact'}>Contact</Link></li>
     <li><Link href={'./Contact/LocalContact'}>Mini-Contact</Link></li>
    </ul>
   </nav>
   <br/>
   <br/><br /><br /><br /><br /><br />
   <br/>
   <h1>Click the Navbar Section && Check Out...</h1>
   </>
  );
}
