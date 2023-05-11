import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import OtherFilms from '../components/OtherFilms'

function ActorPage() {

    const { id } = useParams()
    console.log(id)

    const [actors, setActors] = useState([])

    const [films, setFilms] = useState([])


  // Background Poster


  // const film = films[Math.floor(Math.random() * films.length)];


//   useEffect (() => {
//     console.log('make an api request', id)
//     axios
//     .get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=c207799c1506767bae69bab29daa6238&language=en-US`)
//     .then((res) => {
//         setFilms(res.data.cast)
//         console.log(res.data.cast)
//     })
//     .catch((error) => console.log(error))
// }, [id]);




    useEffect (() => {
        console.log('make an api request', id)
        axios
        .get(`https://api.themoviedb.org/3/person/${id}?api_key=c207799c1506767bae69bab29daa6238&language=en-US`)
        .then((res) => {
            setActors(res.data)
            console.log(res.data)
        })
        .catch((error) => console.log(error))
    }, [id]);



  return (
    <div className='absolute w-full h-auto'>
       

       <div className="absolute w-full h-[770px] sm:h-[800px] bg-gradient-to-r from-black"></div>
       
    {/* <img className=" sm:w-full  object-fit " src={`https://image.tmdb.org/t/p/original/${film?.poster_path}`} /> */}
  

    <div className=' w-500px h-auto bg-black text-4xl text-center p-5 text-white flex-wrap  sm:flex justify-center '>
        


        
        <img className='  rounded-xl sm:translate-x-[1px]' src={`https://image.tmdb.org/t/p/w500/${actors.profile_path}`} alt='actor_poster' />

       <div className='p-9 overflow-y-scroll text-left '>
       <h2 className=' bg-black py-4 text-4xl text-white text-center'>{actors.name}</h2>
       <span className='text-lg'>Place of Birth: {actors.place_of_birth}</span>
       <br />
       <span className='text-lg'>Born: {actors.birthday}</span>
       <br />
       <span className='text-lg'>Died: {actors.deathday}</span>
       <br />
        <p className='w-[420px] text-sm py-5 sm:w-[800px]'>{actors.biography}</p>
       </div>
    </div>
        <OtherFilms />
    </div>
  )
}

export default ActorPage