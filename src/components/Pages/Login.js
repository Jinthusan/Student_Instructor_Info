import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Container} from "react-bootstrap";
import {Jumbotron} from "react-bootstrap";
import styled from 'styled-components';
import boat from './boatt.jpg';


const Styles = styled.div`
    .jumbotron{
        background: url(${boat}) no-repeat fixed bottom;
        background-size: cover;
        height: 150px;
    }

    .boarder{
        border: steelblue;
    }
`
;

export default class Login extends Component {
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

          <form className='container' style={{marginTop:"60px",borderRadius:"10px",backgroundColor: "#edfff3", marginLeft: "120px",marginRight: "1000px"}}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <Link to={"/Admin"} type="submit" className="btn btn-primary btn-block">Submit</Link>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
            
        )
    }
}
