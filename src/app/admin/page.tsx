"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";

const POST_BLOG = gql`
  mutation createblogpost($input: CreateBlogPostInput!) {
    createBlogPost(input: $input) {
      title
      category
      content
      tags
      slug
    }
  }
`;

const AdminPage = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    tags: "",
    coverImageUrl: "",
    category: "fashion",
  });
  const [createblog, {}] = useMutation(POST_BLOG);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tagsArray = form.tags.split(",").map((tag) => tag.trim());
    const blogData = { ...form, tags: tagsArray };
    console.log(blogData); // Replace with actual mutation
    try {
      const res = await createblog({
        variables: {
          input: blogData,
        },
      });
      console.log("Blog created:", res.data.createBlogPost);
    } catch (err) {
      console.error("Error creating blog post:", err);
    }
  };

  const handleFilechange = (e: ChangeEvent<HTMLInputElement>) => {
    const imagefile = e.target.files?.[0];
    if (!imagefile) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const result = e.target?.result as string;
      console.log(result);
      setForm({ ...form, coverImageUrl: result });
    };
    reader.readAsDataURL(imagefile);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <textarea
          name="content"
          placeholder="Write your content here..."
          value={form.content}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded min-h-[150px]"
          required
        />

        <input
          type="text"
          name="tags"
          placeholder="e.g., javascript, react"
          value={form.tags}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="file"
          name="coverImage"
          accept="image/*"
          onChange={handleFilechange}
          className="w-full"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="draft">fashion</option>
          <option value="published">Blockchain</option>
          <option value="published">Crypto</option>
          <option value="published">Fund</option>
          <option value="published">Investment</option>
          <option value="published">Tech</option>
          <option value="published">Trading</option>
        </select>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
