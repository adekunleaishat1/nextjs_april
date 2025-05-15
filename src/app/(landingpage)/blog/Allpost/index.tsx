"use client";
import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import Image from "next/image";
import { BlogInput } from "@/types/blog.types";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const GET_ALL_BLOGS = gql`
  query GetAllBlogs($limit: Int!, $offset: Int!) {
    getallblog(limit: $limit, offset: $offset) {
      id
      title
      content
      createdAt
      coverImageUrl
      category
    }
  }
`;

const Spinner = () => (
  <div className="text-center py-12">
    <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto" />
    <p className="mt-4 text-sm text-gray-600">Loading blogs...</p>
  </div>
);

const ErrorMessage = ({ message }: { message: string }) => (
  <div className="text-center py-12 text-red-600 font-semibold">
    <p>🚫 {message}</p>
  </div>
);

const Allpost = () => {
  const [page, setPage] = useState(1);
  const limit = 1;
  const offset = (page - 1) * limit;
  // const offset = 0;

  const { loading, error, data } = useQuery(GET_ALL_BLOGS, {
    variables: { limit, offset },
  });
  console.log(data, "data");

  if (loading) return <Spinner />;
  if (error) {
    const errorMsg =
      error?.message || "Something went wrong while fetching blogs.";
    return <ErrorMessage message={errorMsg} />;
  }
  return (
    <>
      <section className="px-4 md:px-16 py-12">
        <div className="mb-10 border-b border-[#6D6E76]">
          <h2 className="text-3xl font-bold font-sen mb-4">All posts</h2>
        </div>
        <div className="space-y-10">
          {data?.getallblog?.map((post: BlogInput) => (
            <div
              key={post.id}
              className="flex flex-col md:flex-row items-start gap-6  pb-6"
            >
              <div className="w-full md:w-1/3">
                <Image
                  className="rounded-lg w-full object-cover"
                  src={post.coverImageUrl}
                  alt={post.title}
                  width={200}
                  height={318}
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-sm text-purple-700 font-bold uppercase tracking-wide">
                  {post.category}
                </p>
                <h3 className="text-xl font-semibold font-sen mt-2 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.content}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="mx-auto w-14 flex justify-between gap-2">
        <span
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="cursor-pointer flex items-center gap-1 text-gray-600 hover:text-black"
        >
          <MdKeyboardArrowLeft />
          Prev
        </span>

        <span
          onClick={() => setPage((p) => p + 1)}
          className="cursor-pointer flex items-center gap-1 text-gray-600 hover:text-black"
        >
          Next
          <MdKeyboardArrowRight />
        </span>
      </div>
    </>
  );
};

export default Allpost;
