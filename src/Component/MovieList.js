import Movie from "./Movie";
export default function MovieList (props){
    

    return (
    <>
    {
     props.movie.map(movie => {
         return (
             <>
             <Movie movie = {movie}/>
             </>
         )
     })
    }
    </>
    );
}                                                                                                                                                                                                                                                                                                                                           