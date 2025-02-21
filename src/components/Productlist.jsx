
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import fakeFetch from "./fakeFetch";



const ProductList = () =>{
    let newinfo;

    const[prodinfo,set_prodinfo]=useState([]);

    const {prodid} = useParams();
    console.log(prodid);
    

    useEffect(()=>{
        const fetchproductlist = async() =>{
            try{
                const response = await fakeFetch("https://asosexample.com/api/products");
                const data = await response.data;
                console.log(data[0]?.imgsrc);
                typeof(data[0]?.imgsrc)
                set_prodinfo(data);
            }
            catch(error){
                console.log('Error'+error);
            }

        }
            fetchproductlist();

    },
    
    
    [])
    newinfo = prodinfo.filter((element)=>(element.id===Number(prodid)));
    console.log(newinfo[0]?.name);
return(

<div className="product-page-container">
  
     <h2>{newinfo[0]?.name}</h2>
     <img src={newinfo[0]?.imgsrc} alt="Image"/>
     <br/>
    <select>
        <option value="small">S</option>
        <option value="medium">M</option>
        <option value="large">L</option>
    </select>
    <button className="btn-cart">Add to Cart</button>
    <button className="btn-wishlist">Add to Wishlist</button>
    

</div>

);
}

export default ProductList;