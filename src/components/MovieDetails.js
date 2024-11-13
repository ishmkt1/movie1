// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const MovieDetails = () => {
//   const { id } = useParams(); // Get the movie ID from the URL
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     // Fetch movie details when the component is mounted or when the `id` changes
//     const fetchMovieDetails = async () => {
//       const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
//       setMovie(response.data); // Set the fetched movie data to state
//     };
//     fetchMovieDetails();
//   }, [id]); // The useEffect hook depends on `id`, so it will run whenever `id` changes

//   return (
//     <div>
//       {movie ? (
//         <>
//           <h1>{movie.title}</h1>
//           <p>{movie.overview}</p>
//           <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default MovieDetails;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details when the component is mounted or when the `id` changes
    const fetchMovieDetails = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
      setMovie(response.data); // Set the fetched movie data to state
    };
    fetchMovieDetails();
  }, [id]); // The useEffect hook depends on `id`, so it will run whenever `id` changes

  return (
    <div className="container mx-auto p-4">
      {movie ? (
        <>
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-lg mt-4">{movie.overview}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="mt-4 rounded-md"
          />
        </>
      ) : (
        <p>Loading...</p> // Display a loading message until movie data is fetched
      )}
    </div>
  );
};

export default MovieDetails;
