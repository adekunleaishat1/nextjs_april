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
    </>
  );
};

export default Home;
