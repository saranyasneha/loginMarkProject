import React from "react";
import {toast} from "react-toastify"
import facebook from "../assets/images/facebook.png";
import google from "../assets/images/google.png";
import { useNavigate} from 'react-router-dom';
import { useGoogleLogin } from "@react-oauth/google";
import axios from 'axios';
import {useForm} from "react-hook-form";


const Login=()=>{
    const {register,
        handleSubmit,
        formState:{errors}
    } = useForm();

    const navigate = useNavigate(); 
    const googleLogin = useGoogleLogin({
        onSuccess: async response => {
            try {
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${response.access_token}`
                    }
                })
              
                console.log(res.data);
                console.log(res);
                console.log("token:",response.access_token)
             
                const gLogin={
                    jwt:response.access_token,
                    Name:res.data.name,
                    Email:res.data.email
                }
                localStorage.setItem('Google Login',JSON.stringify(gLogin))
               navigate('/studentsMarkDetails')
             } catch (err) {
                console.log(err)
                }
            }
        });
   
const onSubmit=(data)=>{
    
    if(data.email=='admin@gmail.com'&&data.password=='12345'&&data.userName=='admin'){ 
        const obj={
            adminEmail:"admin@gmail.com",
            adminpwd:'12345',
            userName:'admin'}
       localStorage.setItem('Admin Data',JSON.stringify(obj));navigate('/studentsMarkDetails')
       toast.success(`Welcome Admin!!! You are successfully logged in!!!`)}
       if(data.email!=='admin@gmail.com'||data.password!=='12345'||data.userName!=='admin'){
        toast.error('You are not an Authenticated Person!!!')
       }
}
  console.log(errors) 
   return (
    <div className="login_container">
       
        <div className="app-wrapper">
            <div>
                <h2 className="title">Login</h2>
            </div>
          
            <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
                <div className="name">
                    <label className="label">User Name</label>
                    <input 
                    type="text"
                     className="input" 
                     name="userName" 
                     
                     {...register("userName", {required:"User Name is required",
                    minLength:{
                        value:5,
                        message:"Minimum Required length is 5"
                    },
                    maxLength:{
                        value:15,
                        message:"Maximum Required length is 15"
                    }
                    })}
                     /> {errors.userName&&(<p className="error">{errors.userName.message}</p>)}
                </div>
                <div className="email">
                    <label className="label">Email</label>
                    <input 
                    type="email" 
                    className="input"  
                    name="email"
                
                    {...register("email", {required:"Email is required",
                pattern:{
                    value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message:"Invalid email address",
                }
            })}
                    />
                    {errors.email&&(<p className="error">{errors.email.message}</p>)}
               
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    <input 
                    type="password" 
                    className="input" 
                    name="password" 
                    {...register("password", {required:"Password is required",
                    minLength:{
                        value:5,
                        message:"Minimum Required length is 5"
                    },
                    maxLength:{
                        value:15,
                        message:"Maximum Required length is 15"
                    }
                }
                )}/>
                    {errors.password&&(<p className="error">{errors.password.message}</p>)}
               
                 </div>
                     
                <div>
                    <button className="submit" >LOGIN</button>
                </div>
                
            </form>
            <div className="msg">
                <p>Or SignUp Using</p>
            </div>
            <div className="social">
                <img src={facebook} className="facebook" />
                <img onClick={googleLogin} src={google} className="google"/>
            </div>
        </div>
    </div>
    );
}
export default Login;