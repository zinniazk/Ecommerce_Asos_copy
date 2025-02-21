import { Link } from "react-router-dom";
const Body = () =>{
    return(
        <div className="body-container">
            
            <div className="men-women">
                <Link to="/product">
                <button className="btn-1">Men</button>
                </Link>
                <button className="btn-1">Women</button>
  
            </div>
        </div>
    )
  }

  export default Body;