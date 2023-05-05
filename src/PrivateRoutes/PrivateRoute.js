import { Outlet,Navigate } from "react-router-dom"

const useAuth=()=>{
    const getObj= JSON.parse(localStorage.getItem('Google Login'))
    const getAdminData=JSON.parse(localStorage.getItem('Admin Data'))
   
    if(getObj||getAdminData){
        return true
    }else {
        return false
    }
}
const PrivateRoute=()=>{
   const auth=useAuth()
    return (
       auth? <Outlet/>:<Navigate to="/login"/>
    )
}

export default PrivateRoute;