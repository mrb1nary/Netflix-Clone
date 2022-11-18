import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import request from "../Requests";

function Main() {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length - 1)];

  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full lg:object-fill md:object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="w-full top-[20%] absolute p-4 md:p-8">
            <div className="text-3xl font-bold">{movie?.title}</div>
          <div className="mt-3">
            <button className="border bg-gray-300 text-black border-gray-300 px-6 py-3 text-bold rounded">
              Play
            </button>
            <button className="border text-white border-gray-300 px-2 py-3 ml-5">
              Watch Later
            </button>
          </div>
          <div className="text-gray-300 mt-5 w-full md:mt-3 md:max-w-[50%] lg:max-w-[50%] xl:max-w-[35%]">
            <p>{movie?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
