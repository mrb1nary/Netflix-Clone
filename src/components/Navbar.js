import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 absolute w-full">
      <h1 className="text-red-600 text-4xl text-bold cursor-pointer z-[100]">
        NETFLIX
      </h1>
      <div>
        <button className="bg-red-600 px-4 py-2 rounded-md cursor-pointer mr-4">
          Sign In
        </button>
        <button className="">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
