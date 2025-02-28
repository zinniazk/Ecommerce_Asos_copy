import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "./cart";
const Header = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    return(
    <div className="header">
        <div className="logo-container"> 
            <img className="logo" src="https://1000logos.net/wp-content/uploads/2021/04/Asos-logo-768x432.png" alt="Asos logo    " />
        </div>
        <div className="nav-items">
            <ul>
                <li >Account</li>
                <li>Wishlist</li>
                <Link to={"/cart"}>
                <li>Cart {cartItems.length}</li>
                </Link>
            </ul>

        </div>
    </div>
    );


}

export default Header;