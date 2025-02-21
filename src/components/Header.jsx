const Header = () => {
    return(
    <div className="header">
        <div className="logo-container"> 
            <img className="logo" src="https://1000logos.net/wp-content/uploads/2021/04/Asos-logo-768x432.png" alt="Asos logo    " />
        </div>
        <div className="nav-items">
            <ul>
                <li >Account</li>
                <li>Wishlist</li>
                <li>Cart</li>
            </ul>

        </div>
    </div>
    );


}

export default Header;