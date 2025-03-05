export const checkValidate1 = ( emailaddress, password) =>{

 
                const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                const isEmailvalid = emailregex.test(emailaddress);
                const pswdregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                const isPswdvalid = pswdregex.test(password);
                if(! isEmailvalid)
                    return "Email not valid";
                if(!isPswdvalid)
                    return "Password not valid";
                return null

}
export const checkValidate2 = (name, emailaddress, password) =>{

   const nameregex = /^[A-Za-z][A-Za-z' -]{1,49}$/;
   const isNamevalid = nameregex.test(name);
    const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmailvalid = emailregex.test(emailaddress);
    const pswdregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isPswdvalid = pswdregex.test(password);
    if(!isNamevalid)
        return "Name not valid";
    if(! isEmailvalid)
        return "Email not valid";
    if(!isPswdvalid)
        return "Password not valid";
    return null


}


