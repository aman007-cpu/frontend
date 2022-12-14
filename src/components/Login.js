import React, { useEffect } from "react";
import { useNavigate } from "react-router";
const Login =()=>{
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const nav = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('users');
        if(auth){
            nav('/')
        }
    },[]);
    const handlelogin= async()=>{
      let result  = await fetch("http://localhost:5000/login",{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        }
      });
      result = await result.json()
      console.warn(result);
      if(result.auth){
        localStorage.setItem("users",JSON.stringify(result.user));
        localStorage.setItem("token",JSON.stringify(result.auth));
         nav('/')
      }
      else{
        alert("please enter correct details");
      }
    }
    return(
        <div className="register">
             <form className="regis-container">
            <h1 className="title-reg">Login</h1>
               <input  className="inputbox" type="text" placeholder='Enter your email Id'
             onChange={(e)=>setEmail(e.target.value)} value={email}/>
             <input  className="inputbox" type="password" placeholder='Enter your Password'
             onChange={(e)=>setPassword(e.target.value)} value={password}/>
             <button onClick={handlelogin} className="appbtn" type="button">Login</button>
            </form>
        </div>
    )
}
export default Login