import React,{useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
const SignUp=()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const nav = useNavigate();
    useEffect(()=>{
        const auth  = localStorage.getItem('users');    
        if(auth){
            nav('/')
        }
       
    },[])
    const collectData =async()=>{
      console.warn(name,email,password);
      let result  = await fetch("http://localhost:5000/register",{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json'
        }
      });
      result = await result.json();
      console.warn(result);
      localStorage.setItem("users",JSON.stringify(result.result));
      localStorage.setItem("token",JSON.stringify(result.auth));
      nav('/')
    }

    return(
        <div className="register">
            <form className="regis-container">
            <h1 className="title-reg">
                Register
            </h1>
            <input className="inputbox" type="text" placeholder="Enter Your Name"
            value={name} onChange={(e)=>setName(e.target.value)}/>
            
            <input className="inputbox" type="text" placeholder="Enter Your Email Id"
             value={email} onChange={(e)=>setEmail(e.target.value)}/>
            
            <input className="inputbox" type="Password" placeholder="Enter a Password"
             value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={collectData} className="appbtn" type="button">SignUp</button>
            </form>
        </div>
    )
}
export default SignUp