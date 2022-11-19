import React from "react";
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { useState, useEffect } from "react";
import axios from "axios";

function Card({ title, fetchURL, rowID }) {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  function slideLeft(){
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft -= 500;
  }

  function slideRight(){
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft += 500;
  }

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">

        <MdChevronLeft onClick={slideLeft} size={40} className="bg-white opacity-50 hover:opacity-100 z-10 rounded-full text-black hidden group-hover:block absolute" />
        <div id={"slider" + rowID} className="relative overflow-y-auto scroll-smooth w-full h-full scrollbar-hide whitespace-nowrap">
        

          {movies?.map((item, id) => {
            return (
              <div
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2"
                key={id}
              >
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                  alt={item?.title}
                />
                <div className="absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-80 text-white text-center">
                  <p className="pt-[60%]">{item?.title}</p>
                  <p>{like? <FaHeart className="top-4 left-4 absolute text-2xl text-center text-red-800 cursor-pointer" onClick={()=>setLike(!like)} /> : <FaRegHeart className="top-4 left-4 absolute text-2xl text-center text-red-800 cursor-pointer" onClick={()=>setLike(!like)} />}</p>
                </div>
              </div>
            );
          })}
        </div>
        <MdChevronRight onClick={slideRight} size={40} className="bg-white opacity-50 hover:opacity-100 z-10 rounded-full text-black hidden group-hover:block absolute right-0" />
      </div>
    </div>
  );
}

export default Card;
