import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';
import axios from 'axios';

const SearchResults = () => {
  const location = useLocation();
  const { searchTerm, movies, currentPage } = location.state || {};
  const { setMovies, setCurrentPage } = useContext(MovieContext);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setMovies(movies);
    setCurrentPage(currentPage);

    if (movies && movies.length > 0) {
      setTotalPages(Math.ceil(movies.length / 10)); // You can adjust this if needed
    }
  }, [movies, currentPage, setMovies, setCurrentPage]);

  const handlePageChange = async (page) => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        query: searchTerm,
        page,
      },
    });
    setMovies(response.data.results || []);
    setCurrentPage(page);
    setTotalPages(response.data.total_pages);
  };

  return (
    <div>
      <h2 className="text-white text-2xl mt-6 mb-6">Search Results for "{searchTerm}"</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:w-11/12 w-10/12 ml-14 mt-20">
        {movies.map((movie) => (
          <div key={movie.id} className="h-full w-full bg-transparent pr-14 md:p-4 hover:shadow-lg hover:scale-110 transition">
            <Link to={`/movie/${movie.id}`} state={{ searchTerm, movies, currentPage }}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="max-w-full h-auto object-cover rounded-md"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mt-2 text-gray-100">{movie.title}</h2>
                <p className="text-gray-200 font-medium">{movie.release_date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
