import React from "react";
import {Link,useNavigate} from 'react-router-dom';

const Nav = ()=>{
    const auth  = localStorage.getItem('users');
    const nav =  useNavigate();
    const logout=()=>{
        localStorage.clear();
        nav('/signup')
    }
    return(
        <div>
           <img  alt="logo" className="ecom"
           src="https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png"/>
            {
                auth? 
                <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li> <Link to="/profile">Profile</Link> </li> 
                <l1> <Link className="log" onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></l1>
                </ul>

                :
                <ul className="nav-ul nav-right">
                <li><Link to="/signup">SignUp</Link></li>
                    <li> <Link to="/login">Login</Link> </li>
                    </ul>
            }
            
        </div>
    )
}

export default Nav;