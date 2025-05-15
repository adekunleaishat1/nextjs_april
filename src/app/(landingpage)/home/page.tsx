"use client";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import Link from "next/link";
import { User } from "@/types/user.types";

const Get_users = gql`
  query getuser {
    users {
      id
      name
      email
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(Get_users);

  console.log(data);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {data &&
        data.users.map((el: User) => (
          <>
            <Link href={`/home/${el.id}`}>
              <h1>{el.name}</h1>
            </Link>
          </>
        ))}
      <div className="bg-img h-screen relative">
        <div className="overlay"></div>
        <div className="absolute top-[40px] left-[40px] w-[803px]">
          <h1 className="text-[16px] font-light text-[#fff] uppercase mb-[15px]">
            Posted on <b className="font-bold">startup</b>
          </h1>
          <p className="text-[56px] font-bold text-[#fff] mb-[15px]">
            Step-by-step guide to choosing great font pairs
          </p>
          <p className="text-[16px] font-light text-[#fff] mb-[15px] ">
            By <b className="text-[#FFD050]">James West </b>| May 23, 2022
          </p>
          <p className="text-[16px] font-light text-[#fff] mb-[15px]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <button className="bg-[#FFD050] px-6 py-2 ">Read More </button>
        </div>
      </div>
    </>
  );
};

export default Home;
