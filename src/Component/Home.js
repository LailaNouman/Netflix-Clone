import { useState, useEffect } from "react";
import MovieList from "./MovieList";

export default function Home () {
    
    const [movie,setMovie] = useState([]);
    
    async function getMovies(){
        let url = process.env.REACT_APP_SERVER;
        let response = await fetch(`${url}/trending`);
        let movieData = await response.json();
        setMovie(movieData);
    }

    function updateMovie(newMovie, id){
        let updatedMovie = movie.map(movie => {
            if (movie.id === id){
                movie.comment = newMovie.comment;
                return movie;
            }else {
                return movie;
            }
        })
        setMovie(updatedMovie);
    }

    useEffect(() => {
        getMovies();
    }, []);

return (
 <>
   <h2> Home page </h2>
   {MovieList.length > 0 && (
   <MovieList movie = {movie} 
   updateMovie = {updateMovie}
   />
   )}
 </>
);
    
}