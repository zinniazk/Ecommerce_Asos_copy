import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const Cart = () =>{

    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    const dispatch=useDispatch();
    function handleRemoveItem(item){
        dispatch(removeItem(item));
    }

    return(
        <div>
            {
                cartItems.map(item=>(
                    <>
                    <li>{item.name}</li>
                    <img src={item.imgsrc} className="card-img"></img>
                    <button onClick={()=>handleRemoveItem(item)} className="btn-cart">Remove item</button>
                    </>
                    
                ))
            }
        </div>
    );

}

export default Cart;