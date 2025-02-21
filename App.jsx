
// import React  from "react";
// import ReactDOM from "react-dom/client";
// import { useState, useEffect } from "react";
// import "./styles.css";
// import { asos_clothes_men_all } from "./src/utils/data";


// //JSX

// //const jsxheading = <img src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/jan-2025/generic-hp/eng_generic_desktop_1440x698.jpg" />

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const Header = () => {
//     return(
//     <div className="header">
//         <div className="logo-container"> 
//             <img className="logo" src="https://1000logos.net/wp-content/uploads/2021/04/Asos-logo-768x432.png" alt="Asos logo    " />
//         </div>
//         <div className="nav-items">
//             <ul>
//                 <li >Account</li>
//                 <li>Wishlist</li>
//                 <li>Cart</li>
//             </ul>

//         </div>
//     </div>
//     );


// }

// const Body = () =>{
//     return(
//         <div className="body-container">
            
//             <div className="men-women">
//                 <button className="btn-1" onClick={Card}>Men</button>
//                 <button className="btn-1">Women</button>

//             </div>
//         </div>
//     )
// }

// const Footer = () =>{
//   return(  <div className="footer-container">
//         <div className="nav-items-footer">
//             <ul>
//                 <li>Help and Information</li>
//                 <li>About us</li>
//             </ul>
//         </div>
//     </div>
//   );
// }

// const Card = () =>{
//     return(
//         <div className="card-container">
//         {
//             asos_clothes_men_all.map((element)=>(
            
//                 <ul className="list" key={element.id}>
//                 <li>
//                     <img src={element.imgsrc} className="card-img"></img>
//                     <p>{element.name}</p>
//                     <strong>{"£"+element.price}</strong>
                    
//                 </li>
                
//                 </ul>
                
//             ))
//         }
        
//     </div>

//     );
// }

// const AppLayout = () => {

    
//     return(
//         <div className="app">
              
//             <Header />
            
//             <Body />    
//             <Card />
            
//             <Footer />

          
          
//         </div>
//     );
// }

// root.render(<AppLayout />);






