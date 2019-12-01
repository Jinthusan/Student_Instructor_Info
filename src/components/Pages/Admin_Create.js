import React, { Component } from 'react';
import {Form,FormControl,Button, Container} from "react-bootstrap";

export default class Instructor extends Component {
   
    constructor(props){
        super(props);
    
        this.onChangefName=this.onChangefName.bind(this);
        this.onChangelName=this.onChangelName.bind(this);
        this.onChangeemail=this.onChangeemail.bind(this);
        this.onChangepassword=this.onChangepassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          fName:'',
          lName:'',
          email:'',
          password:''
        }
      }
    
      onChangefName(e){
        this.setState({
          fName: e.target.value
        });
      }

      onChangelName(e){
        this.setState({
          lName: e.target.value
        });
      }
    
          onChangeemail(e){
            this.setState({
              email: e.target.value
            });
          }

            onChangepassword(e){
              this.setState({
                password: e.target.value
              }); 
            }
    
      onSubmit(e){
        e.preventDefault();
      
        console.log(`Form submitted:`);
        console.log(`fName: ${this.state.fName}`);
        console.log(`lName: ${this.state.lName}`);
        console.log(`email: ${this.state.email}`);
        console.log(`password: ${this.state.password}`);
         
         
        
        this.setState({
          fName:'',
          lName:'',
          email:'',
          password:''
        })
      }


    render() {
        return (
            <form className="container" onSubmit={this.onSubmit} style={{marginTop:"60px",borderRadius:"10px",backgroundColor: "#edfff3", marginLeft: "120px",marginRight: "1000px"}}>
          <h3>Sign Up</h3>

          <div className="form-group">
              <label>First name</label>
              <input 
              type="text" 
              className="form-control" 
              placeholder="First name"
              value={this.state.fName}
              onChange={this.onChangefName} />
          </div>
          
          <div className="form-group">
              <label>Last name</label>
              <input type="text" className="form-control" placeholder="Last name" value={this.state.lName}
              onChange={this.onChangelName}/>
          </div>

          <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" value={this.state.email}
              onChange={this.onChangeemail}/>
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" value={this.state.password}
              onChange={this.onChangepassword} />
          </div>

          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          <p className="forgot-password text-right">
              Already registered <a href="#">sign in?</a>
          </p>
      </form>
        )
    }
}