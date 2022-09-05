import React, { useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom'
const Updateproduct =()=>{
    const [name,setName] = React.useState('');
    const [price,setPrice] = React.useState('');
    const [category,setCategory] = React.useState('');
    const [company,setCompany] = React.useState('');
   const params = useParams();
   const nav = useNavigate();

     useEffect(()=>{
         getProductDetails();
     },[]);

     const getProductDetails=async()=>{
        console.warn(params);
        let result = await fetch(`http://localhost:5000/products/${params.id}`,
        {
            headers:{
                Authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
           result = await result.json();
           setName(result.name);
           setPrice(result.price);
           setCompany(result.company);
           setCategory(result.category);
     }
    const updateproduct =async()=>{
        let result = await fetch(`http://localhost:5000/products/${params.id}`,
        {
            method:'Put',
            body:JSON.stringify({name,price,category,company}),
            headers:{'Content-Type':'application/json',
                Authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
           
          }
        }
        );

        result = await result.json();
        console.warn(result);
        nav('/');
    }

    return(
        <div className="addprod">
            <h1>Update Product</h1>
            <input  className="inputbox" type="text" placeholder='Enter Product Name'
             value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input className="inputbox" type="text" placeholder='Enter Product Price'
             value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            <input className="inputbox" type="text" placeholder='Enter Product Category'
              value={category}  onChange={(e)=>{setCategory(e.target.value)}}/>
            <input className="inputbox" type="text" placeholder='Enter Product Company'
               value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
            <button onClick={updateproduct} className="app1btn" >Update Product</button>
        </div>
    )
}

export default Updateproduct;