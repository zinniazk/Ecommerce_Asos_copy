import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Body = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        console.log("useEffect");
        onAuthStateChanged(auth, (user) => {
            console.log("Onauthstatechange");
            if (user) {
             console.log(user);
              const {uid,email,displayName} = user;
              dispatch(addUser(uid,email,displayName));
              navigate("/");    
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
            }
          });
    },[]);
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