// import React, { createContext, useState } from 'react';

// export const MovieContext = createContext();

// export const MovieProvider = ({ children }) => {
//   const [movies, setMovies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalResults, setTotalResults] = useState(0);

//   return (
//     <MovieContext.Provider value={{ movies, setMovies, searchTerm, setSearchTerm, currentPage, setCurrentPage, totalResults, setTotalResults }}>
//       {children}
//     </MovieContext.Provider>
//   );
// };



// import React, { createContext, useState } from 'react';

// export const MovieContext = createContext();

// export const MovieProvider = ({ children }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalResults, setTotalResults] = useState(0);

//   return (
//     <MovieContext.Provider value={{ searchTerm, setSearchTerm, movies, setMovies, currentPage, setCurrentPage, totalResults, setTotalResults }}>
//       {children}
//     </MovieContext.Provider>
//   );
// };


import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  return (
    <MovieContext.Provider value={{ movies, setMovies, searchTerm, setSearchTerm, currentPage, setCurrentPage, totalResults, setTotalResults }}>
      {children}
    </MovieContext.Provider>
  );
};
