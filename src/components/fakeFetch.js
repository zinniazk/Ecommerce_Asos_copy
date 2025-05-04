//import { data } from "react-router-dom"
//import image1 from "./src/assets/images/207571408-2.avif"
// import image2 from "./src/assets/images/men_img_2_jnj.avif"
// import image3 from "./src/assets/images/men_img_3_topman.avif"
// import image4 from "./src/assets/images/men_img_4_river.avif"
// import image5 from "./src/assets/images/men_img_5_oversize.avif"
// import image6 from "./src/assets/images/men_img_6_car.avif"
// import image7 from "./src/assets/images/men_img_7_kobe.avif"
// import image8 from "./src/assets/images/men_img_8_abercrombie.avif"
const fakeFetch = (url) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(url === "https://asosexample.com/api/products"){
                resolve({
                    status:200,
                    message:"Success",
                    data:[
                        
                            
                                {id: 101, name: "Aape By A Bathing Ape Now knitted jumper in black", imgsrc: "./public/assets/207571408-2.avif", price:170, category: "Jackets"},
                                // {id: 102, name: "Jack & Jones oversize quarter zip sweatshirt in grey", imgsrc:  "./src/assets/images/men_img_2_jnj.avif", price:32, category: "Tops"},
                                // {id: 103, name: "Topman car coat in heritage check", imgsrc:  "./src/assets/images/men_img_3_topman.avif", price:95,category: "Jackets" },
                                // {id: 104, name: "River Island brushed stripe cardigan in multi", imgsrc:  "./src/assets/images/men_img_4_river.avif", price:45,category: "Tops"},
                                // {id: 105, name: "ASOS DESIGN oversized fit half zip funnel neck check jumper in grey", imgsrc:  "./src/assets/images/men_img_5_oversize.avif", price:38,category: "Tops"},
                                // {id: 106, name: "ASOS DESIGN oversized t-shirt with car graphic in cream", imgsrc: "./src/assets/images/men_img_6_car.avif", price:18, category: "Tops"},
                                // {id: 107, name: "Selected Homme Kobe loose fit jeans in off white", imgsrc: "./src/assets/images/men_img_7_kobe.avif", price:70, category: "Bottoms"},
                                // {id: 108, name: "Abercrombie & Fitch short sleeve knit resort button through polo in brown", imgsrc:  "./src/assets/images/men_img_8_abercrombie.avif", price:60, category: "Co-ords"},
                                
                            
                        
                    ]
                });

            }

            else{
                reject({
                    status:404,
                    message:"Product not found"
                });
            }
        },2000);
    })
}

export default fakeFetch;