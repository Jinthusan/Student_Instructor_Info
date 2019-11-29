import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import {Jumbotron} from "react-bootstrap";
import styled from 'styled-components';
import boat from './boatt.jpg';
import book from './book.jpg';
import globe from './globe.jpg';
import Art from './Art.jpg';
import {Card} from 'react-bootstrap';
import {CardDeck} from 'react-bootstrap';




const Styles = styled.div`
    .jumbotron{
        background: url(${boat}) no-repeat fixed bottom;
        background-size: cover;
        height: 150px;
    }

`
;

 

export default class Home extends Component {
    render() {
        return (
    <div>
  <Styles>
  <Jumbotron  className="jumbotron">
  <div style={{color:'Silver'}}>
 <Container>
  <h1>Welcome!</h1>
  <h4 style={{color:"White"}}>
  Student & Instructor Information System
  </h4>
  </Container>
  </div>
</Jumbotron>
</Styles>

<CardDeck >
  <Card>
    <Card.Img variant="top" src={Art} style={{height:"285px"}} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={book} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={globe} style={{height:"285px"}}/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
<br/>
<Jumbotron fluid>
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