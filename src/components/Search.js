import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=c207799c1506767bae69bab29daa6238&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
        // console.log(data);
      });
  };

  // Clearing input field after clicking element link in SearchBar results
  const clearInput = () => {
    setResults([]);
    setQuery("");
  };

  return (
    <div className="text-black bg-[#1a1a1a] bg-gradient-to-r from-black text-center pb-7 ">
      <div className="inline-block relative ">
        <input
          className="w-[340px] xl:w-[450px] h-[35px] rounded-full p-1"
          type="text"
          placeholder="Search for Movies or TV Shows..."
          value={query}
          onChange={onChange}
        />
        <AiOutlineClose
          onClick={clearInput}
          className="text-black text-right absolute right-3 translate-y-[-28px] cursor-pointer hover:text-gray-500"
          size={20}
        />
      </div>
      {/* Mapping Through Search API Results */}
      {results.length > 0 && (
        <ul className=" h-auto results flex justify-center flex-wrap p-2 text-white">
          {results.map((movie) => (
            <li className="p-4  text-center " key={movie.id}>
              
                {movie.poster_path ? (
                  <img
                  className="relative w-[200px] sm:border border-gray-200 rounded-xl"
                  src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
                  alt={`${movie.title} Poster`}
                />
                ) : (
                  <div className="filler-poster relative w-[200px] h-[285px] sm:border border-gray-200 rounded-xl "><img className="object-cover" src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdmllJTIwJTIwcG9zdGVyJTIwcGxhY2Vob2xkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="poster_pic" /></div>
                )}
                <Link onClick={clearInput} to={`/movies/${movie.id}`}>
              <h1 className=" w-[200px] p-2">{movie?.title}</h1>
              </Link>
              

              <Link onClick={clearInput} to={`/shows/${movie.id}`}>
              <h1 className=" w-[200px] p-2">{movie.name}</h1>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
