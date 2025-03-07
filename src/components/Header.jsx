import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    const userlog = useSelector((store)=>store.user);
    console.log("userlog"+userlog);
    return(
    <div className="header">
        <div className="logo-container"> 
            <img className="logo" src="https://1000logos.net/wp-content/uploads/2021/04/Asos-logo-768x432.png" alt="Asos logo    " />
        </div>
        <div className="nav-items">
            <ul>
                <Link to={"/"}>
                <li>Home</li>
                </Link>
                <Link to={"/cart"}>
                <li>Cart {cartItems.length}</li>
                </Link>
                <Link to={"/login"}>
                <li>{(userlog===null)?"Login":"Logged in "+ userlog}</li>
                </Link>
                <Link to={"/signout"}>
                <li>{(userlog===null)?"":"Sign Out"}</li>
                </Link>
                

            </ul>

        </div>
    </div>
    );


}

export default Header;