import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { FaHeart, FaRegHeart} from "react-icons/fa";


function OtherFilms() {
    const { id } = useParams()
    console.log(id)

    const [actors, setActors] = useState([])

    const [like, setLike] = useState(false);




// Slide Left
const slideLeft = () => {
    var slider = document.getElementById('sliderOne');
    slider.scrollLeft = slider.scrollLeft - 500;
};

// Slide Right

const slideRight = () => {
    var slider = document.getElementById('sliderOne');
    slider.scrollLeft = slider.scrollLeft + 500;
};


    useEffect (() => {
        console.log('make an api request', id)
        axios
        .get(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=c207799c1506767bae69bab29daa6238&language=en-US`)
        .then((res) => {
            setActors(res.data.cast)
            console.log(res.data.cast)
        })
        .catch((error) => console.log(error))
    }, [id]);


  return (
    <div className='w-full h-auto bg-[#1a1a1a] bg-gradient-to-r from-black w-min-full relative group'>
    <h1 className='text-2xl font-bold p-6 text-white'>Other Films
    </h1>
    <div id={'sliderOne'} className='w-full h-[400px] bg-black text-white flex overflow-x-scroll gap-3 '>
    
        {
            actors.map(actors => (
                <div key={actors.id} className='relative w-[600px] p-3 flex flex-col '>
                {actors.poster_path ? (
                  <img className=' w-[250px] border border-gray-500 shadow-lg shadow-gray-700 rounded-xl transform transition-all hover:scale-105 ' src={`https://image.tmdb.org/t/p/w500/${actors.poster_path}`} alt='actor_pic' />
                ) : (
                  <div className="pt-2 filler-poster relative w-[200px] h-[285px] sm:border border-gray-200 rounded-xl "><img className="object-cover" src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdmllJTIwJTIwcG9zdGVyJTIwcGxhY2Vob2xkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt='placeholder' /></div>
                )}
                
                
                <Link className='text-white items-center text-sm text-center w-[200px] p-2' to={`/movies/${actors.id}`}>
                <span className=' text-white items-center text-sm text-center w-[200px] p-2'>{actors.title || actors.name}</span>
                </Link>


                <Link  to={`/shows/${actors.id}`}>
                <span className=' text-white items-center text-sm w-[200px] p-2'>{actors.name}</span>
                </Link>
                <span className=' text-white text-sm text-center w-[200px] p-2'>{actors.release_date}</span>
                <span className=' text-white text-sm text-center w-[200px] p-2'>{}</span>



                <div className="absolute">
                {like ? <FaHeart className="absolute top-2 left-2 text-gray-400 cursor-pointer hover:text-white" size={20}/> : <FaRegHeart className="absolute top-2 left-2 text-gray-400 cursor-pointer hover:text-white" size={20}/>}
                </div>
            </div>
            ))
        }
    </div>

    {/* Left Arrow */}
  <div className="hidden group-hover:block absolute left-5 translate-y-[-300px] border rounded-full  p-1 opacity-70 cursor-pointer bg-gray-600 hover:bg-gray-400">
    <BsChevronLeft onClick={slideLeft} className="w-[30px]" size={30} />
  </div>
  
{/* Right Arrow */}
  <div className="hidden group-hover:block absolute right-5 border rounded-full p-1 opacity-70 cursor-pointer bg-gray-600 translate-y-[-300px] hover:bg-gray-400 ">
    <BsChevronRight onClick={slideRight}  size={30} />
  </div>
</div>
  )
}

export default OtherFilms