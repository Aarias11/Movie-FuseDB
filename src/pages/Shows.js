import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { FaHeart, FaRegHeart} from "react-icons/fa";

function Shows() {

 const [like, setLike] = useState(false);


 // Top Rated Shows

 const [topRated, setTopRated] = useState([])

//Function for Slider

// Slide Left

const slideLeft = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft - 500;
};

// Slide Right

const slideRight = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft + 500;
}




// API for fetching Top Rated shows

useEffect(() => {
  axios
  .get(`https://api.themoviedb.org/3/tv/top_rated?api_key=c207799c1506767bae69bab29daa6238&language=en-US&page=1`)
  .then((res) => {
    setTopRated(res.data.results)
    // console.log(res.data.results)
  })
.catch((error) => console.log(error))
}, [])







// API for fetching Popular Shows


const [popularShows, setPopularShows] = useState([]);

useEffect(() => {
  axios
  .get(`https://api.themoviedb.org/3/tv/popular?api_key=c207799c1506767bae69bab29daa6238&language=en-US&page=2`)
  .then((res) => {
    setPopularShows(res.data.results)
    // console.log(res.data.results)
  })
.catch((error) => console.log(error))
}, [])








// Api for Fetching Shows Airing Today


const [showsAiringToday, setShowsAiringToday] = useState([]);

useEffect(() => {
  axios
  .get(`https://api.themoviedb.org/3/tv/popular?api_key=c207799c1506767bae69bab29daa6238&language=en-US&page=3`)
  .then((res) => {
    setShowsAiringToday(res.data.results)
    // console.log(res.data.results)
  })
.catch((error) => console.log(error))
}, [])


  return (
     <div className="w-full h-auto bg-[#1a1a1a] bg-gradient-to-r from-black w-min-full relative group">
      {/* First Row - Trending Movies */}

      <h1 className="text-2xl font-bold p-6 text-white">Top Rated Shows</h1>
      <div id={'slider'} className=" relative flex sm:flex overflow-x-scroll gap-3 hover:bg-black/80  ">
        {topRated.map((topRated) => (
          <div key={topRated.id} className=" w-[600px] p-3 flex flex-col  ">
            <Link to={`/shows/${topRated.id}`}>
              <img
                
                className="transform transition-all hover:scale-105 hover:cursor-pointer w-[250px] border border-gray-500 shadow-lg shadow-gray-700 rounded-xl "
                src={`https://image.tmdb.org/t/p/w500/${topRated.poster_path}`} alt='tv_poster'
              />
            </Link>
            <span className=" text-white items-center text-md text-center w-[200px] p-2">
              {topRated?.name}
            </span>
            <span className=" text-white text-md text-center w-[200px] p-2">
              {topRated.first_air_date}
            </span>

                <div className="absolute">
                {like ? <FaHeart className="absolute top-2 left-2 text-gray-400 cursor-pointer hover:text-white" size={20}/> : <FaRegHeart className="absolute top-2 left-2 text-gray-400 cursor-pointer hover:text-white" size={20}/>}
                </div>

          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute left-5 translate-y-[-230px] border rounded-full  p-1 opacity-70 cursor-pointer bg-gray-600 hover:bg-gray-400">
        <BsChevronLeft onClick={slideLeft} className="w-[30px]" size={30} />
      </div>
      
    {/* Right Arrow */}
      <div className="hidden group-hover:block absolute right-5 border rounded-full p-1 opacity-70 cursor-pointer bg-gray-600 translate-y-[-230px] hover:bg-gray-400 ">
        <BsChevronRight onClick={slideRight} size={30} />
      </div>





{/* POPULAR SHOWS ROW */}


      <h1 className="text-2xl font-bold p-6 text-white">Popular Shows</h1>
      <div id={'slider'} className=" relative flex sm:flex overflow-x-scroll gap-3 hover:bg-black/80  ">
        {popularShows.map((popularShows) => (
          <div key={popularShows.id} className=" w-[600px] p-3 flex flex-col  ">
            <Link to={`/shows/${popularShows.id}`}>
              <img
                
                className="transform transition-all hover:scale-105 hover:cursor-pointer w-[250px] border border-gray-500 shadow-lg shadow-gray-700 rounded-xl "
                src={`https://image.tmdb.org/t/p/w500/${popularShows.poster_path}`} alt='tv_poster'
              />
            </Link>
            <span className=" text-white items-center text-md text-center w-[200px] p-2">
              {popularShows?.name}
            </span>
            <span className=" text-white text-md text-center w-[200px] p-2">
              {popularShows.first_air_date}
            </span>

                <div className="absolute">
                {like ? <FaHeart className="absolute top-2 left-2 text-gray-400 cursor-pointer hover:text-white" size={20}/> : <FaRegHeart className="absolute top-2 left-2 text-gray-400 cursor-pointer hover:text-white" size={20}/>}
                </div>

          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute left-5 translate-y-[-230px] border rounded-full  p-1 opacity-70 cursor-pointer bg-gray-600 hover:bg-gray-400">
        <BsChevronLeft onClick={slideLeft} className="w-[30px]" size={30} />
      </div>
      
    {/* Right Arrow */}
      <div className="hidden group-hover:block absolute right-5 border rounded-full p-1 opacity-70 cursor-pointer bg-gray-600 translate-y-[-230px] hover:bg-gray-400 ">
        <BsChevronRight onClick={slideRight} size={30} />
      </div>





{/* POPULAR SHOWS ROW */}


<h1 className="text-2xl font-bold p-6 text-white">Shows Airing Today</h1>
      <div id={'slider'} className=" relative flex sm:flex overflow-x-scroll gap-3 hover:bg-black/80  ">
        {showsAiringToday.map((showsAiringToday) => (
          <div key={showsAiringToday.id} className=" w-[600px] p-3 flex flex-col  ">
            <Link to={`/shows/${showsAiringToday.id}`}>
              <img
                
                className="transform transition-all hover:scale-105 hover:cursor-pointer w-[250px] border border-gray-500 shadow-lg shadow-gray-700 rounded-xl "
                src={`https://image.tmdb.org/t/p/w500/${showsAiringToday.poster_path}`} alt='tv_poster'
              />
            </Link>
            <span className=" text-white items-center text-md text-center w-[200px] p-2">
              {showsAiringToday?.name}
            </span>
            <span className=" text-white text-md text-center w-[200px] p-2">
              {showsAiringToday.first_air_date}
            </span>

                <div className="absolute">
                {like ? <FaHeart className="absolute top-2 left-2 text-gray-400 cursor-pointer hover:text-white" size={20}/> : <FaRegHeart className="absolute top-2 left-2 text-gray-400 cursor-pointer hover:text-white" size={20}/>}
                </div>

          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute left-5 translate-y-[-230px] border rounded-full  p-1 opacity-70 cursor-pointer bg-gray-600 hover:bg-gray-400">
        <BsChevronLeft onClick={slideLeft} className="w-[30px]" size={30} />
      </div>
      
    {/* Right Arrow */}
      <div className="hidden group-hover:block absolute right-5 border rounded-full p-1 opacity-70 cursor-pointer bg-gray-600 translate-y-[-230px] hover:bg-gray-400 ">
        <BsChevronRight onClick={slideRight} size={30} />
      </div>
            
      



      
      </div>
  )
}

export default Shows