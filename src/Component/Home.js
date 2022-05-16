import { useState, useEffect } from "react";
import MovieList from "./MovieList";

export default function Home (props){
    
    const [movie,setMovie] = useState([]);

    async function getMovies(){
        let url = process.env.REACT_APP_SERVER;

        let response = await fetch(`${url}/trending`);

        let movieData = await response.json();
        setMovie(movieData);
    }

    useEffect(() => {
        getMovies();
    }, []);


return (
 <>
   <h2> Home page </h2>
   <MovieList movie = {movie} />
 </>
);
    
}