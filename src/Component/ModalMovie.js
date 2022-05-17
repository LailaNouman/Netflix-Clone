import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
//import FavList from './FavList';
import Form from "react-bootstrap/Form";
import { useRef } from "react";

export default function ModalMovie (props){
   
  let commentRef = useRef()
  function handleComment(e){
    e.preventDefault();
    let comment = commentRef.current.value;
    console.log(comment);
    let newMovie = { ...props.speMov, comment };
    props.updateMovie(newMovie, newMovie.id);
  }

  async function handleAddToFav(e, movie){
    e.preventDefault();
    let url = `${process.env.REACT_APP_SERVER}/addMovie`;
    let data = {
      id: movie.id,
      specificmovie: movie.title,
      comment: movie.overview
    };
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let addedmovie = await response.json();
  }
  
  return (
    <>
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
        <Modal.Title> {props.speMov.title} </Modal.Title>
        </Modal.Header>   
        <Modal.Body>  
            <p> {props.speMov.comment
              ? props.speMov.comment
              : "No comment added"} </p>
            <p> {props.speMov.overview} </p>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Comments</Form.Label>
            <Form.Control
                ref={commentRef}
                type="text"
                placeholder="Enter Comment"/>
            <Form.Text className="text-muted">add your own comment</Form.Text>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleComment(e)}>
              Add comment
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleAddToFav(e, props.speMov)}>
              Add to favorite
            </Button>
            </Form> 
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
             Close
            </Button>
            </Modal.Footer>
       </Modal>
    </>
    );
}