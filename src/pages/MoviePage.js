import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SimilarMovies from "../components/SimilarMovies";
import Cast from "../components/Cast";
import YouTube from "react-youtube";

function MoviePage() {
  const { id } = useParams();
  // console.log(id)

  const [movieDetails, setMovieDetails] = useState({});
  const [movieGenres, setMovieGenres] = useState([]);
  const [trailer, setTrailer] = useState({});

  const posterPath = `https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`;
  const backdropURL = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;

  // Use a useEffect to fetch movie details

  useEffect(() => {
    // console.log("make an api request", id);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c207799c1506767bae69bab29daa6238&language=en-US&append_to_response=videos`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setTrailer(data.videos.results[0]);
        // console.log(data.videos.results)

        setMovieGenres(data.genres);
      });
  }, [id]);

  return (
    <div className="w-full h-[600px]">
      <div className="absolute w-full h-[600px] opacity-90 bg-gradient-to-r from-black"></div>
      <img
        className=" w-full h-full object-cover  "
        src={backdropURL}
        alt="movie_poster"
      />

      <div className="absolute w-full translate-y-[-500px] text-white px-6 flex  justify-center ">
        <div className="hidden xl:flex relative w-[400px] h-full">
          <img
            className="hidden lg:flex w-[350px] h-[500px] translate-x-[-150px] translate-y-[-60px] rounded-xl border border-gray-400  "
            src={posterPath}
            alt="movie_poster"
          />
          <span className="hidden lg:flex absolute border bg-green-600 p-2 rounded-full w-[50px] h-[50px] left-0 top-0 text-white text-center text-xl translate-x-[170px] translate-y-[-80px]">
            {movieDetails.vote_average?.toFixed(0)}/10
          </span>
        </div>
        <br />
        <div className="w-[420px] h-[500px] overflow-y-scroll xl:w-[600px] border rounded-2xl translate-y-[-60px] bg-black/70 ">
          <h1 className="title py-5 text-5xl font-bold text-center">
            {movieDetails?.original_title}
          </h1>
          <ul className="flex justify-center gap-2 py-2">
            {movieGenres.map((movieGenres) => (
              <li
                key={movieGenres.id}
                className="bg-green-600/70 sm:border w-[100px] text-center rounded-xl p-1"
              >
                {movieGenres.name}
              </li>
            ))}
          </ul>
          <br />
          <h2 className="text-xl px-5 text-center">Overview:</h2>
          <p className=" text-white   w-[420px] xl:text-lg xl:w-[600px] text-center  p-5">
            {movieDetails?.overview}
          </p>
          <br />
          <div className="w-full px-9 xl:w-full flex justify-center gap-5 items-center underline">
            <span>Runtime: {movieDetails?.runtime} mins</span>

            <span>Release Date: {movieDetails.release_date}</span>

            <span>Rating: {movieDetails.vote_average?.toFixed(0)} / 10</span>
            <span>Status: {movieDetails.status}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-[#1a1a1a] bg-gradient-to-r from-black p-9 ">
        <YouTube videoId={trailer.key} />
      </div>
      <Cast />
      <SimilarMovies />
    </div>
  );
}

export default MoviePage;
