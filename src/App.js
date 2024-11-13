import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import MovieDetails from './components/MovieDetails';
import { MovieProvider } from './context/MovieContext';

function App() {
  return (
    <MovieProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchResults" element={<SearchResults />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;
