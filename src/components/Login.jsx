import { useState } from "react";
import { useRef } from "react";
import {checkValidate1} from "../utils/validate";
import { checkValidate2 } from "../utils/validate";

const Login = () =>{


    const name = useRef(null);
    const emailaddress = useRef(null);
    const password = useRef(null);
    const[isSignin,setisSignin] =useState(true);
    const[errormsg,seterrormsg] =useState(null);

    function handleSignin(){
        setisSignin(!isSignin);
    }

    function handleSubmit(){
        
       console.log(isSignin)
       console.log(name.current.value)
       console.log(emailaddress.current.value)
       console.log(password.current.value)
        if(isSignin)
        {
        const messageSignIn = checkValidate1(emailaddress.current.value,password.current.value);
        console.log(messageSignIn);
        seterrormsg(messageSignIn);
        }
        else
        {
            const messageSignUp = checkValidate2(name.current.value, emailaddress.current.value,password.current.value);
            console.log(messageSignUp);
        seterrormsg(messageSignUp);
        }

    }
    return(
        <div className="loginform">
    <form onSubmit={(e)=>e.preventDefault()}>
       <strong>{!isSignin?"Name":""}</strong>
        {!isSignin && <input ref={name} type="text" placeholder="name"/>}
        <strong>Email Address</strong>
        <input ref={emailaddress} type="text" placeholder="emailaddress"></input>
        <strong>Password</strong>
        <input ref={password} type="password" placeholder="password"></input>
        <button className="btn-login" onClick={handleSubmit}>{isSignin?"Sign In":"Sign Up"}</button>
        <p>
        <a onClick={handleSignin}>{isSignin?"New user? Sign Up":"Already a user? Sign In"}</a>
        </p>
        <p>{errormsg}</p>
        
    </form>
    </div>
    );
}

export default Login;