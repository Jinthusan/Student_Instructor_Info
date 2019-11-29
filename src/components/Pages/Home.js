import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import {Jumbotron} from "react-bootstrap";
import styled from 'styled-components';
import boat from './boatt.jpg';
import book from './book.jpg';
import globe from './globe.jpg';
import Art from './Art.jpg';

import {Carousel} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
    <div>
  <Jumbotron style={{marginTop:"10px", backgroundColor: "#edfff3", marginLeft: "5px",marginRight: "5px"}}>
    <div>
  <h1>Welcome, SIIS!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
  </div>
</Jumbotron>
<Carousel style={{width:"3000px"}} className="container">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={book}
      alt="First slide"
      style={{height:"700px"}}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={globe}
      alt="Third slide"
      style={{height:"700px"}}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Art}
      alt="Third slide"
      style={{height:"700px"}}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br/>
<Jumbotron style={{marginLeft: "5px",marginRight: "5px"}}>
  <Container>
  
    <p className="container">
    We are a leading non-state degree awarding institute approved by the University Grants Commission (UGC) under the Universities Act. We are also members of the Association of Commonwealth Universities (ACU), as well as the International Association of Universities (IAU), and the first Sri Lankan institute to be accredited by the Institution of Engineering & Technology, UK.

We are proud to be listed as a leading and formidable awarding institute authorised and approved by the University Grants Commission (UGC) under the Universities Act, and the International Association of Universities (IAU). Furthermore, not only are we the first Sri Lankan institute to be accredited by the Institution of Engineering & Technology (IET.), UK, our IT degrees are also in turn accredited by the Engineering Council, UK.
    </p>
  </Container>
</Jumbotron>

  </div>
  
)
        }
    }