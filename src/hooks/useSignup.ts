
"use client";
import { ApolloError, gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signupSchema } from "@/shared/lib/definitions";
import { toast } from "sonner";


const POST_USERS = gql`
  mutation createuser($name: String!, $email: String!, $password: String!) {
    createuser(name: $name, email: $email, password: $password) {
      name
      email
      password
    }
  }
`;

export const useSignup = () => {
  const router = useRouter();

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formerror, setformerror] = useState<Record<string, string>>({});

  const [createuser, { loading, error }] = useMutation(POST_USERS);

  const handlesignup = async () => {
    const result = signupSchema.safeParse(formdata);
    const fielderror: Record<string, string> = {};

    if (!result.success) {
      result.error.errors.forEach((val) => {
        if (val.path[0]) {
          fielderror[val.path[0] as string] = val.message;
        }
      });
      setformerror(fielderror);
      return;
    }

    try {
      const res = await createuser({ variables: { ...formdata } });
      console.log("signup successful", res);
      if (res?.data) {
        toast.success("signup successful")
        setTimeout(()=>{
         router.push("/login");
        }, 5000)
       
      }
    } catch (error) {
      const errorMessage = (error as ApolloError).message
      toast.error(errorMessage)
    }
  };

  return {
    formdata,
    setformdata,
    formerror,
    handlesignup,
    loading,
    error,
  };
};
