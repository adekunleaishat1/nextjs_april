import React from "react";
import { useSignup } from "@/hooks/useSignup";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import Link from "next/link";
import { FaSpinner } from "react-icons/fa";
const SignupForm = () => {
  const { formdata, setformdata, formerror, handlesignup, loading } =
    useSignup();

  return (
    <div className="bg-white min-h-screen p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Join Our Community</h1>
        <p className="text-gray-600 mt-2">
          Share your learnings with writers worldwide.
        </p>
      </div>

      <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="space-y-4">
          <div>
            <label className=" text-sm font-medium text-gray-700 mb-1 flex justify-start items-center gap-1">
              Full Name{" "}
              <span className="text-gray-500">
                <FiUser />
              </span>
            </label>
            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={(e) =>
                setformdata({ ...formdata, name: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-500 focus:border-transparent"
              required
            />
            <p className="text-amber-700">{formerror.name && formerror.name}</p>
          </div>

          <div>
            <label className=" text-sm font-medium text-gray-700 mb-1 flex justify-start items-center gap-1">
              Email{" "}
              <span className="text-gray-500">
                <FiMail />
              </span>
            </label>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={(e) =>
                setformdata({ ...formdata, email: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-500 focus:border-transparent"
              required
            />
            <p className="text-amber-700">
              {formerror.email && formerror.email}
            </p>
          </div>

          <div>
            <label className=" text-sm font-medium text-gray-700 mb-1 flex justify-start items-center gap-1">
              Password{" "}
              <span className="text-gray-500">
                <FiLock />
              </span>
            </label>
            <input
              type="password"
              name="password"
              value={formdata.password}
              onChange={(e) =>
                setformdata({ ...formdata, password: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-500 focus:border-transparent"
              required
            />
            <p className="text-amber-700">
              {formerror.password && formerror.password}
            </p>
          </div>

          <button
            onClick={handlesignup}
            disabled={loading}
            className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition mt-4 flex items-center justify-center "
          >
            {loading ? (
              <FaSpinner className="animate-spin mr-2 text-blue-400 text-lg" />
            ) : (
              " Sign Up"
            )}
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Already a member?{" "}
            <Link
              href="/login"
              className="text-gray-900 font-medium hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
