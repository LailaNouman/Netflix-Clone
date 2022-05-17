import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ModalMovie from './ModalMovie';

export default function Movie (props){

    const [show, setShow] = useState(false);
    const [speMov,setSpeMov] = useState();

    const handleShow = (movie) => {
        setShow(true);
        setSpeMov(movie);
    }
    const handleClose = () => setShow(false);
    return (     
       <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src= {props.movie.path} alt = {props.movie.id}/>
    <Card.Body>
    <Card.Title> {props.movie.title} </Card.Title>
    <Card.Text>
     {props.movie.overview}
    </Card.Text>
    <Button variant="primary" onClick = {() => {handleShow(props.movie)}} >
        Add to fav list
    </Button>
    </Card.Body>
    </Card>
    {speMov && 
    <ModalMovie show = {show}
     handleClose = {handleClose}
     speMov = {speMov}
     updateMovie={props.updateMovie}
     />
    }
       </>
    );
}