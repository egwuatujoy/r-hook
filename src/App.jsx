import React, { useState } from "react";
import MovieL from "./Component/MovieL";
import Filter from "./Component/Filter";

const App = () => {
  const [movies, setMovies] = useState([]);

  const [filter, setFilter] = useState([]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().include(filter.title.toLowerCase()) &&
      (!filter.rate || movie.rating >= parseFloat(filter.rate))
  );

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const btnStyle = {
    color: "white",
    backgroundColor: "blue",
    padding: "15px",
    borderRadius: "5px",
    border: "none",
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>My Movie App</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieL movies={filteredMovies} />
      <button
        style={btnStyle}
        onClick={() =>
          addMovie({
            title: "SICARIO",
            description:
              "Sicario is a film one never forgets. Brutal horror of a Mexican drug cartel tracked down by a wily and savvy Intel Agency Contractor (Josh Brolin) with an American Cowboy my-way-or-highway playbook, two FBI agents (Emily Blunt and Daniel Kaluuya) about to get a first-hand indoctrination into the front-line multi-agency specialty-team of drug-lord hunters...",
            posterURL:
              "https://imgs.search.brave.com/1hk2mQhpaQJ4zRqazb91JPipogRMoasw1rZZ20a5qvA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzIxLzVl/L2ZlLzIxNWVmZWUw/YWJjNWIwYzI4OWNm/MGYwNTlmMWQ3YzQ5/LmpwZw",
            rating: 10.0,
          })
        }
      >
        Add New Movie
      </button>
    </div>
  );
};

export default App;
