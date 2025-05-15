"use client"
import { useState } from "react";
import { useMutation ,gql} from "@apollo/client";
import Cookies from "js-cookie";


const LOGIN_USER = gql`
   mutation loginuser($email:String! , $password:String!){
      loginuser(email:$email, password:$password){
        id,
        name,
        email,
        token
      }
   }
`

const Login = () => {
    const [loginuser, {data, error, loading} ] = useMutation(LOGIN_USER)
    console.log(error);
    
    const [formdata , setformdata] = useState({
        email:"",
        password:""
    })

    const Loginuser = async() =>{
        try {
          const {data}  = await loginuser({variables:{...formdata}})
          console.log(data);
          if (data?.loginuser?.token) {
            Cookies.set("token", data?.loginuser?.token)
          }
          
        } catch (error:any) {
             console.log(error.message);  
            
        }
    }
  //  if (error) {
  //   return "user not found" 
  //  }
    return ( 
        <>
         <div className="w-[500px] h-[300px] bg-white shadow-md rounded-md px-6 py-2 mx-auto">
             <h1 className="text-[20px] font-medium text-center">Login</h1>
             <input className="border-[1px] border-[black] w-full h-[40px] rounded-md placeholder:pl-2  mt-3" value={formdata.email} onChange={(e)=>setformdata({...formdata, email:e.target.value})} type="text" placeholder="Email"/>
            <input className="border-[1px] border-[black] w-full h-[40px] rounded-md  placeholder:pl-2  mt-3" value={formdata.password} onChange={(e)=>setformdata({...formdata, password:e.target.value})} type="text" placeholder="Password"/>
            <button onClick={Loginuser} className="bg-black text-white rounded-md px-6 py-2  mt-3 ">Sign in</button>
        </div>
        </>
     );
}
 
export default Login;