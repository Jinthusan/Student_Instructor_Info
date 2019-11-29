import React, { Component } from 'react';
import book from './book.jpg';
import globe from './globe.jpg';
import Art from './Art.jpg';
import {Card} from 'react-bootstrap';
import {CardDeck} from 'react-bootstrap';
import {Button} from "react-bootstrap";
import {Link } from "react-router-dom";



export default class Admin extends Component {
    
    

    render() {
        return (
           
    <div style={{marginTop:"50px"}} className="container">
            <CardDeck >
            <Card>
              <Card.Img variant="top" src={Art} style={{height:"285px"}} />
              <Card.Body>
                <Card.Title>Create Admin</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Link to={"/Admin_Create"} variant="primary">Click to Create</Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={book} style={{height:"285px"}}/>
              <Card.Body>
                <Card.Title>Create Instructor</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Link to='./Instructor' variant="primary">Click to Create</Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={globe} style={{height:"285px"}}/>
              <Card.Body>
                <Card.Title>Create Course</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Link to='./Instructor' variant="primary">Click to Create</Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardDeck>
          </div>    
        )
    }
}