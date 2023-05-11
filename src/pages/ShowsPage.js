import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TvCast from "../components/TvCast";
import SimilarShows from "../components/SimilarShows";
import YouTube from 'react-youtube';

function ShowsPage() {
  const { id } = useParams();
  console.log(id);

  const [showDetails, setShowDetails] = useState([]);
  const [showGenres, setShowGenres] = useState([]);

  const [networks, setNetworks] = useState([]);
  const [trailer, setTrailer] = useState({})

  const backdropPath = `https://image.tmdb.org/t/p/w500${showDetails.backdrop_path}`;
  const posterPath = `https://image.tmdb.org/t/p/original${showDetails.poster_path}`;

  const logo = `https://image.tmdb.org/t/p/w200/${setNetworks.logo_path}`;

  useEffect(() => {
    // console.log("make an api request", id);
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=c207799c1506767bae69bab29daa6238&language=en-US&append_to_response=videos`
    )
      .then((response) => response.json())
      .then((data) => {
        setShowDetails(data);
        setTrailer(data.videos.results[0])
        // console.log(data)
        setShowGenres(data.genres);
      });
  }, [id]);

  useEffect(() => {
    // console.log("make an api request", id);
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=c207799c1506767bae69bab29daa6238&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setNetworks(data.networks);
        // console.log(data.networks)
      });
  }, [id]);

  return (
    <div className="w-full h-[600px]">
      <div className="absolute w-full h-[600px] opacity-90 bg-gradient-to-r from-black"></div>
      <img className=" sm:w-full h-full object-cover" src={backdropPath} alt="" />

      <div className="absolute w-full translate-y-[-500px] text-white px-6 flex  justify-center">
        <div className="hidden lg:flex relative w-[400px] h-full">
          <img
            className="hidden lg:flex w-[350px] h-[530px] translate-x-[-150px] translate-y-[-60px] rounded-xl border border-gray-400   "
            src={posterPath} alt="tv_poster"
          />
          <span className="hidden lg:flex absolute border bg-green-600 p-2 rounded-full w-[50px] h-[50px] left-0 top-0 text-white text-center text-xl translate-x-[170px] translate-y-[-80px]">
            {showDetails.vote_average?.toFixed(0)}/10
          </span>
        </div>

        <div className="w-[420px] h-[530px] overflow-y-scroll lg:w-[600px] border rounded-2xl translate-y-[-60px] bg-black/70">
          <h1 className="title py-5 text-5xl font-bold text-center">
            {showDetails?.name}
          </h1>
          <ul className="flex justify-center gap-2 py-2 ">
            {showGenres.map((showGenres) => (
              <li key={showGenres.id} className="bg-green-600 sm:border w-[130px] h-[35px] text-center rounded-xl p-1 list-none">
                {showGenres.name}
              </li>
            ))}
          </ul>
          <br />
          <h2 className="text-xl px-5 text-center">Overview:</h2>
          <p className="text-white w-[420px] xl:text-lg xl:w-[600px] text-center  p-5">
            {showDetails.overview}
          </p>
          <br />

          <div className="flex justify-center gap-3">
            <span className="border p-2">
              Seasons: {showDetails?.number_of_seasons}
            </span>{" "}
            <span className="border p-2">
              Episodes {showDetails.number_of_episodes}
            </span>
          </div>

          <div className="w-full px-9 lg:w-full flex justify-center gap-5 items-center underline">
            <span className="">
              Runtime: {showDetails?.episode_run_time} mins
            </span>
            <br />
            <br />
            <br />
            <br />
            <span>Release Date: {showDetails.first_air_date}</span>
            <br />

            <span>Rating: {showDetails.vote_average?.toFixed(0)} / 10</span>

            {/* <img className='bg-white' src={logoPath} /> */}

            <ul>
              {networks.map((networks) => (
                <li key={networks.id} className="text-2xl">
                  {networks.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#1a1a1a] bg-gradient-to-r from-black p-9">
              {console.log(trailer)}
      <YouTube className="bg-black" 
      videoId={trailer.key}
      
      />
      </div>
      <TvCast />
      <SimilarShows />
    </div>
  );
}

export default ShowsPage;
