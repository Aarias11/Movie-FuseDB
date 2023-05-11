import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { FaHeart, FaRegHeart} from "react-icons/fa";

function Movies() {


  const [like, setLike] = useState(false);

  // Upcoming Movies page 1

  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=c207799c1506767bae69bab29daa6238&language=en-US&page=2`)
    .then(response => response.json())
    .then(data => {
        setPopularMovies(data.results)
        console.log(data.results)
    })
}, [])



//   Function for Slider
// Slide Left

const slideLeft = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft - 500;
};

// Slide Right
const slideRight = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft + 500;
};


// Upcoming Movies page 2


const [latestMovies, setLatestMovies] = useState([])

useEffect(() => {
    
  fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=c207799c1506767bae69bab29daa6238&language=en-US&page=3`)
  .then(response => response.json())
  .then(data => {
      setLatestMovies(data.results)
      // 
  })
}, [])


//   Function for Slider
// Slide Left

const slideLeftTwo = () => {
  var slider = document.getElementById('sliderTwo');
  slider.scrollLeft = slider.scrollLeft - 500;
};

// Slide Right
const slideRightTwo = () => {
  var slider = document.getElementById('sliderTwo');
  slider.scrollLeft = slider.scrollLeft + 500;
};


// Fetching Popular Movies

const [popularMoviesThree, setPopularMoviesThree] = useState([])

  useEffect(() => {
    
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=c207799c1506767bae69bab29daa6238&language=en-US&page=4`)
    .then(response => response.json())
    .then(data => {
        setPopularMoviesThree(data.results)
        console.log(data.results)
    })
}, [])



//   Function for Slider
// Slide Left

const slideLeftThree = () => {
  var slider = document.getElementById('sliderThree');
  slider.scrollLeft = slider.scrollLeft - 500;
};

// Slide Right
const slideRightThree = () => {
  var slider = document.getElementById('sliderThree');
  slider.scrollLeft = slider.scrollLeft + 500;
};



  return (
    <div className="w-full h-auto bg-[#1a1a1a] bg-gradient-to-r from-black w-min-full relative group">
      {/* First Row - Trending Movies */}

      <h1 className="text-2xl font-bold p-6 text-white text-center">Movies</h1>
      <div id={'slider'} className=" relative flex sm:flex overflow-x-scroll gap-3 hover:bg-black/80  ">
        {popularMovies.map((popularMovies) => (
          <div key={popularMovies.id} className=" w-[600px] p-3 flex flex-col  ">
            <Link to={`/movies/${popularMovies.id}`}>
              <img
                
                className="transform transition-all hover:scale-105 hover:cursor-pointer w-[250px] border border-gray-500 shadow-lg shadow-gray-700 rounded-xl "
                src={`https://image.tmdb.org/t/p/w500/${popularMovies.poster_path}`} alt='movie_poster'
              />
            </Link>
            <span className=" text-white items-center text-md text-center w-[200px] p-2">
              {popularMovies?.title}
            </span>
            <span className=" text-white text-md text-center w-[200px] p-2">
              {popularMovies.release_date}
            </span>

                <div className="absolute">
                {like ? <FaHeart className="absolute top-2 left-2 text-gray-400 cursor-pointer hover:text-white" size={20}/> : <FaRegHeart className="absolute top-2 left-2 text-gray-400 cursor-pointer hover:text-white" size={20}/>}
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

      {/* Second Page Movies */}
    
      <div id={'sliderTwo'} className=" relative flex sm:flex overflow-x-scroll gap-3 hover:bg-black/80  ">
        {latestMovies.map((latestMovies) => (
          <div key={latestMovies.id} className=" w-[600px] p-3 flex flex-col  ">
            <Link to={`/movies/${latestMovies.id}`}>
              <img
                
                className="transform transition-all hover:scale-105 hover:cursor-pointer w-[250px] border border-gray-500 shadow-lg shadow-gray-700 rounded-xl "
                src={`https://image.tmdb.org/t/p/w500/${latestMovies.poster_path}`} alt='movie_poster'
              />
            </Link>
            <span className=" text-white items-center text-md text-center w-[200px] p-2">
              {latestMovies?.title}
            </span>
            <span className=" text-white text-md text-center w-[200px] p-2">
              {latestMovies.release_date}
            </span>

                <div className="absolute">
                {like ? <FaHeart className="absolute top-2 left-2 text-gray-400 cursor-pointer hover:text-white" size={20}/> : <FaRegHeart className="absolute top-2 left-2 text-gray-400 cursor-pointer hover:text-white" size={20}/>}
                </div>

          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute left-5 translate-y-[-300px] border rounded-full  p-1 opacity-70 cursor-pointer bg-gray-600 hover:bg-gray-400">
        <BsChevronLeft onClick={slideLeftTwo} className="w-[30px]" size={30} />
      </div>
      
    {/* Right Arrow */}
      <div className="hidden group-hover:block absolute right-5 border rounded-full p-1 opacity-70 cursor-pointer bg-gray-600 translate-y-[-300px] hover:bg-gray-400 ">
        <BsChevronRight onClick={slideRightTwo} size={30} />
      </div>




    {/* THIRD PAGE MOVIES */}


    
      <div id={'sliderThree'} className=" relative flex sm:flex overflow-x-scroll gap-3 hover:bg-black/80  ">
        {popularMoviesThree.map((popularMoviesThree) => (
          <div key={popularMoviesThree.id} className=" w-[600px] p-3 flex flex-col  ">
            <Link to={`/movies/${popularMoviesThree.id}`}>
              <img
                
                className="transform transition-all hover:scale-105 hover:cursor-pointer w-[250px] border border-gray-500 shadow-lg shadow-gray-700 rounded-xl "
                src={`https://image.tmdb.org/t/p/w500/${popularMoviesThree.poster_path}`} alt='movie_poster'
              />
            </Link>
            <span className=" text-white items-center text-md text-center w-[200px] p-2">
              {popularMoviesThree?.title}
            </span>
            <span className=" text-white text-md text-center w-[200px] p-2">
              {popularMoviesThree.release_date}
            </span>

                <div className="absolute">
                {like ? <FaHeart className="absolute top-2 left-2 text-gray-400 cursor-pointer hover:text-white" size={20}/> : <FaRegHeart className="absolute top-2 left-2 text-gray-400 cursor-pointer hover:text-white" size={20}/>}
                </div>

          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute left-5 translate-y-[-300px] border rounded-full  p-1 opacity-70 cursor-pointer bg-gray-600 hover:bg-gray-400">
        <BsChevronLeft onClick={slideLeftThree} className="w-[30px]" size={30} />
      </div>
      
    {/* Right Arrow */}
      <div className="hidden group-hover:block absolute right-5 border rounded-full p-1 opacity-70 cursor-pointer bg-gray-600 translate-y-[-300px] hover:bg-gray-400 ">
        <BsChevronRight onClick={slideRightThree} size={30} />
      </div>









      {/* END OF PAGE */}
    </div>
  )
}

export default Movies