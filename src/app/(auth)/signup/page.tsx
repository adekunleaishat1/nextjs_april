"use client";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signupSchema, signupSchematype } from "@/shared/lib/definitions";

const post_users = gql`
  mutation createuser($name: String!, $email: String!, $password: String!) {
    createuser(name: $name, email: $email, password: $password) {
      name
      email
      password
    }
  }
`;

const Signup = () => {
  const router = useRouter();
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formerror, setformerror] = useState<Record<string, string>>({});

  const [createuser, { loading, data, error }] = useMutation(post_users);

  const handlesignup = async () => {
    const validaterror = signupSchema.safeParse(formdata);
    const fielderror: Record<string, string> = {};

    try {
      if (!validaterror.success) {
        validaterror?.error?.errors.map((val) => {
          console.log(val);
          if (val.path[0]) {
            fielderror[val.path[0] as string] = val.message;
          }
          setformerror(fielderror);
          return;
        });
      }
      console.log(formerror);

      const res = await createuser({ variables: { ...formdata } });
      console.log("signup successful", res);
      console.log(data);
      router.push("/login");
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <>
      {loading && <h1>loading...</h1>}
      {error && <h1>{error.message}</h1>}
      <h1>Sign Up</h1>
      <div>
        <p>{formerror?.message}</p>
        <input
          className="border-[1px] border-[black]"
          value={formdata.name}
          onChange={(e) => setformdata({ ...formdata, name: e.target.value })}
          type="text"
          placeholder=""
        />
        <p className="text-amber-700">{formerror.name && formerror.name}</p>
        <input
          className="border-[1px] border-[black]"
          value={formdata.email}
          onChange={(e) => setformdata({ ...formdata, email: e.target.value })}
          type="text"
          placeholder=""
        />
        <p className="text-amber-700">{formerror.email && formerror.email}</p>
        <input
          className="border-[1px] border-[black]"
          value={formdata.password}
          onChange={(e) =>
            setformdata({ ...formdata, password: e.target.value })
          }
          type="text"
          placeholder=""
        />
        <p className="text-amber-700">
          {formerror.password && formerror.password}
        </p>
        <button
          className="bg-[blue] border-[1px] p-6"
          disabled={loading}
          onClick={handlesignup}
        >
          {loading ? "processing..." : "sign up"}
        </button>
      </div>
    </>
  );
};

export default Signup;
