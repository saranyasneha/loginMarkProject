
const Validation=(values,setEmailError)=>{
 
    let errors={};
    
    if(!values.userName){
        errors.userName="User Name is required!!."
    }
   
    if (!values.password){
        errors.password="password is required!!."
    }else if(values.password.length<5){
        errors.password=<p>Password must be more than 5 characters</p>;
    }
    if(values.email.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)) {
        setEmailError(false);
    }else{
        setEmailError(true)
    }      
    if(values.email<=0){
        setEmailError(true)
    }
    
    return errors;
    }

export default Validation;