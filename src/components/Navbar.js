import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 absolute w-full z-[100]">
      <Link to="/">
        <h1 className="text-red-600 text-4xl text-bold cursor-pointer z-[100]">
          NETFLIX
        </h1>
      </Link>
      <div>
        <Link to="/login">
          <button className="bg-red-600 px-4 py-2 rounded-md cursor-pointer mr-4">
            Sign In
          </button>
        </Link>
        <Link to="/signup">
          <button className="cursor-pointer">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
