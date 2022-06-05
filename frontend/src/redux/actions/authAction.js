import { LOGIN_USER,LOGAOUT_USER,REGISTER_USER ,GET_CURRENT,ERRORS} from "../types";
import axios from 'axios';


export const LoginAction = (user, Navigate)=>async (dispatch) =>{
   
    try {
        const res =await axios.post("/auth/signIn",user)
        dispatch({type :LOGIN_USER ,payload:res.data})
        if (res.data.found.role ==="ADMIN"){
                Navigate("/ProfileAdmin")
        }
       else if (res.data.found.role ==="Professionnel"){
              Navigate("/ProfileProfissionell"); 
        }
        else {
               Navigate("/home")};
    } catch (error) {
        dispatch({type :ERRORS ,
            payload:error.response.data.errors})        
    }



}

export const Registration = (user, Navigate)=>async (dispatch)=>{
   
    try {
        const res= await axios.post("auth/signUp",user)
        dispatch({type :REGISTER_USER,payload:res.data})
        if (res.status===200){
            Navigate("/login")
         }
      
    } catch (error) {
        dispatch({type :ERRORS ,payload:error.response.data})        

        
    }
  
}
export const logout=(Navigate)=>{
    Navigate("/")
    return {
        type :LOGAOUT_USER,
    };


};

