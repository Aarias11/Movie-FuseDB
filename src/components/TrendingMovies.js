import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import {arrayUnion, doc, updateDoc } from 'firebase/firestore'

function TrendingMovies() {

  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();


  const movieID = doc(db, 'users', `${user?.email}`);

  const saveMovies = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedMovies: arrayUnion({
          
          
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };
  

  const url =
    "https://api.themoviedb.org/3/trending/movie/day?api_key=c207799c1506767bae69bab29daa6238";

 

  //   Function for Slider
  // Slide Left

  const slideLeft = () => {
    var slider = document.getElementById("sliderTwo");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  // Slide Right
  const slideRight = () => {
    var slider = document.getElementById("sliderTwo");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setMovies(res.data.results);
        // console.log(res.data.results)
      })
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <div className="w-full h-auto bg-[#1a1a1a] bg-gradient-to-r from-black w-min-full relative group">
      {/* First Row - Trending Movies */}

      <h1 className="text-2xl font-bold p-6 text-white">Trending Movies</h1>
      <div
        id={"sliderTwo"}
        className=" relative flex sm:flex overflow-x-scroll gap-3 hover:bg-black/80  "
      >
        {movies.map((movies, movieID) => (
          <div key={movies.id} className=" w-[600px] p-3 flex flex-col  ">
            <Link to={`/movies/${movies.id}`}>
              <img
                className="transform transition-all hover:scale-105 hover:cursor-pointer w-[250px] border border-gray-500 shadow-lg shadow-gray-700 rounded-xl "
                src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt='movie_poster'
              />
            </Link>
            <span className=" text-white items-center text-md text-center w-[200px] p-2">
              {movies?.title}
            </span>
            <span className=" text-white text-md text-center w-[200px] p-2">
              {movies.release_date}
            </span>

            <div className="absolute">
              <p onClick={saveMovies}>

              {like ? (
                <FaHeart
                  className="absolute top-2 left-2 text-gray-400 cursor-pointer hover:text-white"
                  size={20}
                />
              ) : (
                <FaRegHeart
                  className="absolute top-2 left-2 text-gray-400 cursor-pointer hover:text-white"
                  size={20}
                />
              )}

              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute left-5 translate-y-[-300px] border rounded-full  p-1 opacity-70 cursor-pointer bg-gray-600 hover:bg-gray-400">
        <BsChevronLeft onClick={slideLeft} className="w-[30px]" size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute right-5 border rounded-full p-1 opacity-70 cursor-pointer bg-gray-600 translate-y-[-300px] hover:bg-gray-400 ">
        <BsChevronRight onClick={slideRight} size={30} />
      </div>
    </div>
  );
}

export default TrendingMovies;
