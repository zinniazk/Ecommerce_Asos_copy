import { useEffect, useState } from "react";
//import { asos_clothes_men_all } from "../utils/data";
import fakeFetch from "./fakeFetch";
import { Link } from "react-router-dom";

const Card = () =>{
    const asos_clothes_men_all=[];
    const[all_men_clothes_price,set_all_men_clothes_price]=useState([]);
    const[filtered_data,set_filtered_data]=useState([]);
   // const[all_men_clothes_category,set_all_men_clothes_category]=useState(asos_clothes_men_all);

    const[selectedprice1,set_selectedprice1]=useState("allprice");
    const[selectedprice2,set_selectedprice2]=useState("allprice");
    const[selectedcategory,set_selectedcategory]=useState("allcategory");
    const[input,set_input]=useState("");

    let newpricedata,newsearchdata;

    useEffect(()=>{
        const fetchproduct = async()=>{
            try{
                const response= await fakeFetch("https://asosexample.com/api/products");
                const  asos_clothes_men_all= await response.data;
              //  console.log(asos_clothes_men_all);
                set_all_men_clothes_price(asos_clothes_men_all);
                set_filtered_data(asos_clothes_men_all);

            }
            catch(error){
                console.log("Try again"+error);

            }
        };
        fetchproduct();

    },[]);

    function handlePrice(e){
        
        console.log(e.target.value);
        if(e.target.value!=="allprice")
        {

           // set_filtered_data(all_men_clothes_price);
            console.log("main if reached");
            console.log(filtered_data);
    
       const{price1,price2}=JSON.parse(e.target.value);
       set_selectedprice1(price1);
       set_selectedprice2(price2);
       console.log(price1);
       console.log(price2);
       console.log(selectedcategory);
      
      
       // newpricedata = JSON.parse(JSON.stringify(asos_clothes_men_all));
       //console.log(newpricedata);
       
       if(selectedcategory==="allcategory"){
        console.log("if reached")
       set_filtered_data( all_men_clothes_price.filter((element)=>((element.price>price1 && element.price<price2)||(price1==="allprice"))));
       }
       else
       {
        console.log("else reached");
       set_filtered_data( all_men_clothes_price.filter((element)=>(((element.price>price1 && element.price<price2)||price1==="allprice")&&element.category===selectedcategory)));
       }

       // console.log(newpricedata);
        console.log(all_men_clothes_price);
    }
    else{
        set_selectedprice1(e.target.value);
       // newpricedata = JSON.parse(JSON.stringify(asos_clothes_men_all));
       set_filtered_data(all_men_clothes_price);
        if(selectedcategory==="allcategory"){
            console.log("if reached")
           set_filtered_data( all_men_clothes_price);
           }
           else
           {
            console.log("else reached");
           set_filtered_data( all_men_clothes_price.filter((element)=>element.category===selectedcategory));
           }

    }
    console.log("Filtered data");
    console.log(filtered_data);
    }
      // console.log(newfilterdata);    

    

    function handleCategory(e){
    if(e.target.value!=="allcategory"){
       // newpricedata = JSON.parse(JSON.stringify(asos_clothes_men_all));
        console.log("Category");
        console.log(e.target.value);
        console.log(all_men_clothes_price);

        
       set_selectedcategory(e.target.value);
        console.log("hi, first if reached");

        if(selectedprice1==="allprice"){
            console.log("hi, second if reached");
            set_filtered_data(all_men_clothes_price.filter((element)=>(e.target.value==="allcategory"||element.category===e.target.value)));
            }
        else
            {
                console.log("hi, else reached");
            set_filtered_data( all_men_clothes_price.filter((element)=>(element.price>selectedprice1 && element.price<selectedprice2 && (e.target.value==="allcategory"||element.category===e.target.value))));
            }
        
        

        console.log(selectedcategory);
        console.log(newpricedata);
        console.log(selectedprice1);
        console.log(selectedprice2);
        console.log(all_men_clothes_price);

        }

        else{
            set_selectedcategory(e.target.value);

           // newpricedata = JSON.parse(JSON.stringify(asos_clothes_men_all));
            if(selectedprice1==="allprice"){
                console.log("if reached")
               set_filtered_data( all_men_clothes_price);
               }
               else
               {
                console.log("handle category else reached");
               set_filtered_data( all_men_clothes_price.filter((element)=>element.price>selectedprice1 && element.price<selectedprice2));
               }
 
        }

    }



    // function resetFilter(){
    //     set_all_men_clothes_price(asos_clothes_men_all);
    // }

    function handleInput(e){
        set_input(e.target.value);
       console.log(e.target.value);    
    }
    function handleSearch(){
        console.log(input);
        console.log(all_men_clothes_price);
        console.log("Filtered data before");
        console.log(filtered_data);
       // newsearchdata = JSON.parse(JSON.stringify(asos_clothes_men_all));
       
       console.log("Filtered data after");
       console.log(filtered_data);
        console.log(filtered_data);
        console.log(input.toLowerCase());
        if(input!=""){
            console.log("if reached");
            console.log(filtered_data);
        
        set_filtered_data(all_men_clothes_price.filter((element)=>element.name.toLowerCase().includes(input.toLowerCase())));  
        }
        else
        set_filtered_data(all_men_clothes_price);
    console.log(all_men_clothes_price);

    }
   
    return(
        
        <div className="card-container">
            <div className="search-container">
                <input type="text" className="search-box" onChange={handleInput}/>
                <button className="btn-search" onClick={handleSearch}>Search</button>
            </div>

            <div className="filter-container">
                <strong>Price</strong>
            <select id="price" onChange={handlePrice}>
                <option value="allprice">Select</option>
                <option value='{"price1":1,"price2":20}'>£1-£20</option>
                <option value='{"price1":20,"price2":50}'>£20-£50</option>
                <option value='{"price1":50,"price2":100}'>£50-£100</option>
                <option value='{"price1":100,"price2":200}'>£100-£200</option>
            </select>

            <strong>Category</strong>
            <select id="category" onChange={handleCategory}>
                 <option value="allcategory">Select</option>
                <option value="Tops">Tops</option>
                <option value="Bottoms">Bottoms</option>
                <option value="Co-ords">Co-ords</option>
                <option value="Jackets">Jackets</option>
            </select>

            </div>
           
            <ul className="list" >
        {
            filtered_data.map((element)=>(
                <>
                <Link to={"/product/"+element.id}>
                <li key={element.id}>
                    <img src={element.imgsrc} className="card-img"></img>
                    <p>{element.name}</p>
                    <strong>{"£"+element.price}</strong>
                    
                </li>
                 </Link>
                 </>
                
            ))     
        }
          </ul>
      
        
    </div>
  
    );
  }
  export default Card;