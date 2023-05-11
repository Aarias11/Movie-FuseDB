import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { FaHeart, FaRegHeart} from "react-icons/fa";

function TrendingShows() {

  
    const [like, setLike] = useState(false);
    

    const url = 'https://api.themoviedb.org/3/trending/tv/day?api_key=c207799c1506767bae69bab29daa6238'

    const [shows, setShows] = useState([])



    // Slide Left
const slideLeft = () => {
    var slider = document.getElementById('sliderThree');
    slider.scrollLeft = slider.scrollLeft - 500;
};

// Slide Right

const slideRight = () => {
    var slider = document.getElementById('sliderThree');
    slider.scrollLeft = slider.scrollLeft + 500;
};

    useEffect(() => {
        axios
        .get(url)
        .then((res) => {
            setShows(res.data.results)
            // console.log(res.data.results)
        })
        .catch((error) => console.log(error))
    },[url])

  return (
    <div className='w-full h-auto bg-[#1a1a1a] bg-gradient-to-r from-black w-min-full relative group'>
        <h1 className='text-2xl font-bold p-6 text-white'>Trending Shows 
        </h1>
        <div id={'sliderThree'} className='relative flex sm:flex overflow-x-scroll gap-3 '>
        
            {
                shows.map(shows => (
                    <div key={shows.id} className=' w-[600px] p-3 flex flex-col '>
                    <Link to={`/shows/${shows.id}`}>
                    <img  className=' cursor-pointer w-full border border-gray-500 shadow-lg shadow-gray-700 rounded-xl transform transition-all hover:scale-105 ' src={`https://image.tmdb.org/t/p/w780/${shows.poster_path}`} alt='tv_poster' />
                    </Link>
                
                    <span className=' text-white items-center text-md text-center w-[200px] p-2'>{shows.name} ({shows.origin_country})</span>
                    <span className=' text-white text-md text-center w-[200px] p-2'>{shows.first_air_date}</span>
                    
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
        
    </div>
    
  )
}

export default TrendingShows