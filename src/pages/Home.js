import React, { useState, useEffect } from "react";
import axios from "axios";
import TrendingMovies from "../components/TrendingMovies";
import TrendingShows from "../components/TrendingShows";
import NowPlaying from "../components/NowPlaying";
import TopRated from "../components/TopRated";
import YouTube from "react-youtube";
import { Link, useParams } from "react-router-dom";


function Home() {
  const url = `https://api.themoviedb.org/3/trending/all/week?api_key=c207799c1506767bae69bab29daa6238`;

  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState({});

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(url).then((res) => {
      setMovies(res.data.results);
      // console.log(res.data.results)
    });
  }, [url]);

  return (
    <div className=" w-full h-[800px]  text-white">
      <div className="relative w-full h-full ">
        {/* Background wrapper */}

        <div className="absolute w-full h-[800px] bg-gradient-to-r from-black"></div>
        {/* Movie Poster */}
        <img
          className="w-auto sm:w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt='movie_poster'
        />

        {/* Movie/TV Show title, overview, release date, average, and play trailer and my stuff buttons */}

        <div className="relative translate-y-[-750px] w-full top-[20%] p-4 md:p-8">
          <h1 className="title text-6xl font-bold w-[450px]  text-white">
            {movie?.title || movie?.name}
          </h1>
          <p className="text-lg py-3 w-[400px]">{movie?.overview}</p>
          <span className="py-4">
            Release date: {movie?.release_date || movie?.first_air_date}
          </span>
          <br />
          <span>Rating: {movie?.vote_average.toFixed(0)}/10</span>
          <br />
          <br />

          <button className="text-white border w-[150px] h-[50px]">
            More Info
          </button>

          <Link to="/account">
            <button className="text-white border w-[150px] h-[50px] ml-5">
              My Stuff
            </button>
          </Link>
        </div>
      </div>
      <NowPlaying />
      <TrendingMovies />
      <TrendingShows />
      <TopRated />
    </div>
  );
}

export default Home;
