import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Layout =() =>{

    const dispatch = useDispatch();
 
    useEffect(()=>{
        console.log("useEffect");
        onAuthStateChanged(auth, (user) => {
            console.log("Onauthstatechange");
            if (user) {
             console.log(user);
             console.log(user.email);
              const {email} = user;
              dispatch(addUser(email));
               
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
            }
          });
    },[]);
    return(
        <div className="app">
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
    );
}

export default Layout;