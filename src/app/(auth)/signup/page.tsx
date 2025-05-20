"use client";
import SignupForm from ".";

const Signup = () => {
  // const router = useRouter();

  // const [formerror, setformerror] = useState<Record<string, string>>({});

  // const [createuser, { loading, data, error }] = useMutation(post_users);

  // const handlesignup = async () => {
  //   const validaterror = signupSchema.safeParse(formdata);
  //   const fielderror: Record<string, string> = {};

  //   try {
  //     if (!validaterror.success) {
  //       validaterror?.error?.errors.map((val) => {
  //         console.log(val);
  //         if (val.path[0]) {
  //           fielderror[val.path[0] as string] = val.message;
  //         }
  //         setformerror(fielderror);
  //         return;
  //       });
  //     }
  //     console.log(formerror);

  //     const res = await createuser({ variables: { ...formdata } });
  //     console.log("signup successful", res);
  //     console.log(data);
  //     router.push("/login");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <SignupForm />
    </>
  );
};

export default Signup;
