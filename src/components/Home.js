import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

const Home = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const { setSearchTerm, setMovies, setCurrentPage, setTotalResults } = useContext(MovieContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!setSearchTerm || !setMovies || !setCurrentPage || !setTotalResults) {
      console.error('Props not passed correctly');
      return;
    }

    setSearchTerm(input);  // Set the search term in context
    setCurrentPage(1);     // Reset to the first page when searching again

    try {
      // Fetch movie search results from TMDB API
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${input}&page=1`);
      
      // Set movies and total results from the API response
      setMovies(response.data.results || []);
      setTotalResults(response.data.total_results);

      // Navigate to search results page and pass necessary state
      navigate('/searchResults', { state: { searchTerm: input, movies: response.data.results, currentPage: 1 } });
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for movies"
          className="p-2 border border-gray-300 rounded-md w-80"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Home;
