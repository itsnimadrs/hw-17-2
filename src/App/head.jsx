import React, { useState } from "react";
import Movie from "./movie";
function App1() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
  ]);

  const [newMovie, setNewMovie] = useState("");

  const addMovie = () => {
    if (newMovie) {
      setMovies([...movies, { id: Date.now(), title: newMovie }]);
      setNewMovie("");
    }
  };

  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div className="flex flex-col bg-pink-100">
        <span className="text-center text-xl font-bold mb-2 mt-2">
          Movie List
        </span>
        <button
          className="font-bold text-[4rem] rounded-full bg-red-500 p-auto w-16 h-16 pb-4 m-auto absolute bottom-4 right-4"
          onClick={toggleModal}
        >
          <div className="flex items-center justify-center w-full h-full text-white">
            +
          </div>
        </button>
        {modal && (
          <div className="bg-white-500 w-60 h-50 flex justify-center items-center m-auto">
            <div className="flex justify-center h-full  p-2 ">
              <input
                className="pl-2 bg-white border-2 borer-current w-[30rem] m-auto"
                type="text"
                placeholder="Movie Title"
                value={newMovie}
                onChange={(e) => setNewMovie(e.target.value)}
              />

              <button
                onClick={addMovie}
                className="bg-gray-500 rounded-full p-2 m-2 font-bold"
              >
                Add
              </button>
              <button
                className="bg-red-400 rounded-full p-2 m-2 font-bold"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      {movies.length === 0 ? (
        <span className="font-bold text-center flex justify-center h-50 w-full my-[10rem] text-2xl">
          Your movie list is empty lets try to fill it up... <br />
          Write your favorite movie name then click the add <br /> button and
          magic will happen...😉
        </span>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} onRemove={removeMovie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App1;
