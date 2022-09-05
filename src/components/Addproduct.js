import React from "react";
import { useNavigate } from "react-router-dom";
const Addproduct =()=>{
    const [name,setName] = React.useState('');
    const [price,setPrice] = React.useState('');
    const [category,setCategory] = React.useState('');
    const [company,setCompany] = React.useState('');
    const[error,setError] = React.useState(false);
    const nav = useNavigate();

    const addProduct =async()=>{
        if(!name || !price || !category || !company){
            setError(true);
            return false
        }
        console.warn(name,price,category,company);
        const userId = JSON.parse(localStorage.getItem('users'))._id;
        let result = await fetch("http://localhost:5000/addproduct",{
            method:"post",
            body:JSON.stringify({
                 name,price,category,company,userId
            }),
            headers:{
                'Content-Type':'application/json',
             
                    Authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                
            }
        });

        result = await result.json();
        nav('/');
    }
    return(
        <div className="addprod">
            <h1>Add Product</h1>
            <input  className="inputbox" type="text" placeholder='Enter Product Name'
             value={name} onChange={(e)=>{setName(e.target.value)}}/>
             { error && !name &&<span className="invalid-input">Enter valid name</span>}
            <input className="inputbox" type="text" placeholder='Enter Product Price'
             value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
           { error && !price &&<span className="invalid-input">Enter valid price</span>}
            <input className="inputbox" type="text" placeholder='Enter Product Category'
              value={category}  onChange={(e)=>{setCategory(e.target.value)}}/>
            { error && !category &&<span className="invalid-input">Enter valid category</span>}
            <input className="inputbox" type="text" placeholder='Enter Product Company'
               value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
             { error && !company &&<span className="invalid-input">Enter valid company</span>}
            <button onClick={addProduct} className="app1btn" >Add Product</button>
        </div>
    )
}

export default Addproduct;