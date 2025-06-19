"use client";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import Cookies from "js-cookie";
import { ApolloError } from "@apollo/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LOGIN_USER = gql`
  mutation loginuser($email: String!, $password: String!) {
    loginuser(email: $email, password: $password) {
      id
      name
      email
      token
    }
  }
`;


export const useLogin = () =>{
    const router = useRouter();
    const [loginuser, {loading}] = useMutation(LOGIN_USER);
  
    const [formdata, setformdata] = useState({
      email: "",
      password: "",
    });
  
    const Loginuser = async () => {
      try {
        const { data } = await loginuser({ variables: { ...formdata } });
        console.log(data);
        if (data?.loginuser?.token) {
          Cookies.set("token", data?.loginuser?.token);
           toast.success("Login Successful",{
            duration:5000
           })    
           router.push("/")
        }
      } catch (error) {
        const errorMessage = (error as ApolloError).message
        toast.error(errorMessage,{
            duration: 5000
        })
      }
    };
  
    return{
        Loginuser,
        setformdata,
        formdata,
        loading
    }
}