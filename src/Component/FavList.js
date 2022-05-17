import { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap';

export default function FavList() {
    const [favMovies, setFavMovie] = useState();

    async function getFavMovie(){
        let url = `${process.env.REACT_APP_SERVER}/getMovies`;
        let response = await fetch(url, {
            method: "GET",
        });
        let favMovie = await response.json();
        setFavMovie(favMovie);
    }

    async function handleDelete(id){
        let url = `${process.env.REACT_APP_SERVER}/delete/${id}`;
        let response = await fetch(url, {
            method: "DELETE",
        });
        if(response.status == 204){
            getFavMovie();
        }
    }

    useEffect(() => {
        getFavMovie();
    });

    return (
        <>
          <h1>Favourite Movies Page</h1>
            {favMovies && favMovies.map((movie) => {
                return (
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={movie.path} />
                    <Card.Body className="cardBody">
                      <Card.Title>{movie.specificmovie}</Card.Title>
                      <Card.Text className="scrollBar">
                        {movie.comment}
                      </Card.Text>
                      <Card.Text className="scrollBar">
                        {movie.id}
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => handleDelete(movie.id)}>
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                );
            })
            }
        </>
    );

}