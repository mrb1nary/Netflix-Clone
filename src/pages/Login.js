import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signIn } = UserAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signIn(email, password);
      console.log("Login Successful")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="h-screen w-full">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src={
          "https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/4d9d5abf-07d8-4dd6-9899-a96b902312ee/IN-en-20221114-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        }
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="email"
              ></input>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="password"
              ></input>
              <button className="bg-red-600 py-3 my-9 rounded font-bold hover:scale-105 duration-300 ease-in-out">
                Login
              </button>
              <div className="flex justify-between mt-5">
                <p>
                  <input type="checkbox" /> Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="mt-5">
                <span className="text-gray-500">New to Netflix?</span>
                <Link to="/Signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
