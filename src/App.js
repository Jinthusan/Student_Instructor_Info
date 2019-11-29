import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav,Navbar, Container} from "react-bootstrap";
import {Form,FormControl} from "react-bootstrap";
import {Button} from "react-bootstrap";


import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Admin from "./components/Pages/Admin";
import Instructor from "./components/Pages/Instructor";
import Admin_Create from "./components/Pages/Admin_Create";


class App extends Component {
  render() {
    return (
      <Router>
      <div> 
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">SIIS System</Navbar.Brand>
    <Nav className="mr-auto">
        <Nav.Link  href="/">Home</Nav.Link>
      <Nav.Link  href="/Login">Admin</Nav.Link>
      <Nav.Link  href="/Instructor">Instructor</Nav.Link>
      <Nav.Link  href="/Student">Student</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
  
  </div>
        
            
          <Route path="/" exact component={Home} />
          <Route path="/Login" exact component={Login} /> 
          <Route path="/Admin" exact component={Admin} /> 
          <Route path="/Instructor" exact component={Instructor} /> 
          <Route path="/Admin_Create" exact component={Admin_Create} />
        
        </Router>
      
    );
  }
}

export default App;