// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const MovieCard = ({ movie }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/movie/${movie.id}`);
//   };

//   return (
//     <div onClick={handleClick} className="movie-card">
//       <img
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//         alt={movie.title}
//       />
//       <h3>{movie.title}</h3>
//       <p>{movie.release_date}</p>
//       <p>{movie.vote_average}</p>
//     </div>
//   );
// };

// export default MovieCard;



import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div onClick={handleClick} className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer">
      <img
        className="w-full"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="px-6 py-4">
        <h3 className="text-xl font-bold text-gray-800">{movie.title}</h3>
        <p className="text-gray-600">{movie.release_date}</p>
        <p className="text-gray-700">{movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
