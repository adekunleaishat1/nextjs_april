"use client";

import React from "react";
import { useLogin } from "@/hooks/useLogin";
import { FiMail, FiLock } from "react-icons/fi";
import Link from "next/link";
import { FaGithub, FaSpinner, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const LoginForm = () => {
  const { setformdata, loading, Loginuser, formdata } = useLogin();

  return (
    <div className="bg-white min-h-screen p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
        <p className="text-gray-600 mt-2">
          Continue your writing journey with our community
        </p>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-3">Login with:</p>
          <div className="flex justify-center gap-4">
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition">
              <FcGoogle className="text-xl" />
            </button>
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition">
              <FaGithub className="text-xl" />
            </button>
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition">
              <FaTwitter className="text-xl text-blue-400" />
            </button>
          </div>
        </div>
        <div className="space-y-4">
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
          </div>

          <button
            onClick={Loginuser}
            disabled={loading}
            className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition mt-4 flex items-center justify-center "
          >
            {loading ? (
              <FaSpinner className="animate-spin mr-2 text-blue-400 text-lg" />
            ) : (
              " Login"
            )}
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Dont Have an Account?{" "}
            <Link
              href="/signup"
              className="text-gray-900 font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
