import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList=()=>{
    const [products,setProducts] = useState('');
     useEffect(()=>{
          getProducts();
     },[]);
     const getProducts=async()=>{
         let result = await fetch("http://localhost:5000/products",{
            headers:{
                Authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
         });
         result = await result.json();
         setProducts(result);
     }
     const deleteproduct =async(id)=>{
        let result  = await fetch(`http://localhost:5000/products/${id}`,{
            method:"Delete",
            headers:{
                Authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        if(result){
            getProducts();
        }
     }
    const SeachHandle =async(event)=>{
        
        let key  =  event.target.value;
        if(key){
            let result = await fetch(`http://localhost:5000/search/${key}`,{
                headers:{
                    Authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            result = await result.json();
            if(result){
                setProducts(result);
            }
        }
        else{
            getProducts();
        }
        
    }
        return(
            <div className="product-list">
                <h2>Product List</h2>
                <input className="search" type="text" placeholder="Search Product"
                 onChange={SeachHandle}
                />
                <ul>
                    <li>S. No</li>
                    <li>Name</li>
                    <li>Price</li>
                    <li>Category</li>
                    <li>Operation</li>
                </ul>
                {
                products.length>0 ? products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li className="del">
                            <button className="delbtn" onClick={() => deleteproduct(item._id)}>Delete</button>
                            <Link className="upd" to={"/update/"+item._id}>Update</Link>
                            </li>

                    </ul>
                )
                :<h1>No Result Found</h1>
            }
            </div>
        )
}

export default ProductList;