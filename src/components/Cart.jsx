import { useSelector } from "react-redux"

const Cart = () =>{

    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);

    return(
        <div>
            {
                cartItems.map(item=>(
                    <>
                    <li>{item.name}</li>
                    <img src={item.imgsrc} className="card-img"></img>
                    </>
                    
                ))
            }
        </div>
    );

}

export default Cart;