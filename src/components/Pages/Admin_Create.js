import React, { Component } from 'react';
import {Form,FormControl,Button, Container} from "react-bootstrap";

export default class Instructor extends Component {
   
    constructor(props){
        super(props);
    
        this.onChangeCreate=this.onChangeCreate.bind(this);
    
        this.state = {
          fName:'',
          fNameError:''
        }
      }
    
      onChangeCreate(e){
        this.setState({
          fName: e.target.value
        });
      }
    
      validate(e){
        let fNameError='';
    
        if(!this.state.fName){ 
          fNameError= "Name Cannot be empty";
        }
    
        if(fNameError){
          this.setState({fNameError});
          return false;
        }
        return true;
      }
    
      onSubmit(e){
        e.preventDefault();
         const isValid = this.validate();
         if(isValid){
           console.log(this.state); 
         } 
    
        
        this.setState({
          fName:''
        })
      }


    render() {
        return (
            <form className="container" onSubmit={this.onSubmit} style={{marginTop:"60px",borderRadius:"10px",backgroundColor: "#edfff3", marginLeft: "120px",marginRight: "1000px"}}>
          <h3>Sign Up</h3>

          <div className="form-group">
              <label>First name</label>
              <input type="text" className="form-control" placeholder="First name" value={this.fName} onChange={this.onChangeCreate} />
              {this.state.fNameError ? (
          <div style={{fontSize:12,color:"red"}}>
            {this.state.fNameError}
          </div>
          ): null}
          </div>
          

          <div className="form-group">
              <label>Last name</label>
              <input type="text" className="form-control" placeholder="Last name" />
          </div>

          <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          <p className="forgot-password text-right">
              Already registered <a href="#">sign in?</a>
          </p>
      </form>
        )
    }
}