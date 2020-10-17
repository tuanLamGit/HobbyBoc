import React, { Component } from "react";
import axios from "axios";

import styled, { createGlobalStyle, css} from 'styled-components';
import Footer from '../Footer';


const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
  }

  body{
    font-family: Arial;
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

const sharedStyle = css`
  background-color: #eee
  height: 40px;
  border-radius:  5px;
  border: 1px solid #ddd;
  margain: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`

  display: flex
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;

`;

const StyledForm = styled.form`

  width: 100%
  max-width: 700px;
  padding: 40px;
  background-color #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
`;

const StyledInput = styled.input`

  display: block;
  width: 100%;
  ${sharedStyle}
`;

const StyledButton = styled.button`
  display: block;
  background-color:#f7797d;
  color: #fff;
  font-size: .9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margain: 20px 0;
  
  legend{
    padding: 0 20px;
  }

  label{
    padding-right: 20px;
  }

  input{
    margain-right: 10px;
  }
`;

export default class CreateUser extends Component {
  //we always need this
  constructor(props) {
    super(props);

    //to make sure the this keyword is working fine, we need to bind this to the methods we have just implemented
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeInterest = this.onChangeInterest.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeBig = this.onChangeBig.bind(this);
    this.onChangeLittle = this.onChangeLittle.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //the fields must match the fields for the backend db
    this.state = {
      firstName: "",
      lastName: "",
      interest: "",
      address: "",
      big: false,
      little: false,
      email: "",
    };
  }

  //this method is part of the react life cycle, it will be called as soon as a component has been mounted so before everything is loaded and render this will be called.
  // componentDidMount() {
  //   axios
  //     .get("http://localhost:5000/user/")
  //     .then((response) => {
  //       if (response.data.length > 0) {
  //         this.setState({
  //           users: response.data.map((user) => user.username),
  //           username: response.data[0].username,
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  //the users will enter a value into a text box and when they do it will call these method
  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value, // target is the textbox and the value is whatever is in the textbox
    });
  }

  onChangeLastName(e){
    this.setState({
      lastName: e.target.value,
    })
  }

  onChangeAddress(e){
    this.setState({
      address: e.target.value,
    })
  }

  onChangeInterest(e){
    this.setState({
      interest: e.target.value,
    })
  }

  onChangeEmail(e){
    this.setState({
      email: e.target.value,
    })
  }

  onChangeBig(e){
    this.setState({
      big: e.target.value,
    })
  }
  
  onChangeLittle(e){
    this.setState({
      little: e.target.value,
    })
  }
  
  onSubmit(e) {
    e.preventDefault();

    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      interest: this.state.interest,
      email: this.state.email,
      big: this.state.big,
      little: this.state.little,
      address: this.state.address,
    };

    axios
      .post("http://localhost:5000/user/add", user)
      .then((res) => console.log(res.data));

    //this will return us to the homepage once the user submits
    window.location = "/";
  }

  //this is the form code, the form that users will enter information to
 render() {
    return (

        <>
          <GlobalStyle />
          <StyledFormWrapper>
            <StyledForm onSubmit={this.onSubmit}>
              <h2>Create Hobby Boc Account</h2>
              
              <label htmlFor="name">First Name</label>
              <StyledInput 
              type="text" 
              required 
              name ="name" 
              value={this.state.firstName} 
              onChange = {this.onChangeFirstName}
              />
              
              <label htmlFor="name">Last Name </label>
              <StyledInput 
              type="text" 
              required 
              name = "name"
              value = {this.state.lastName}
              onChange= {this.onChangeLastName}
              />
              
              <label htmlFor= "email">Email</label>
              <StyledInput 
              type ="email" 
              required
              name="email"
              value ={this.state.email}
              onChange = {this.onChangeEmail}/>
              
              <label htmlFor="interest">Interest</label>
              <StyledInput 
              type="text" 
              required 
              name = "interest"
              value= {this.state.interest}
              onChange= {this.onChangeInterest}/>
              
              <label htmlFor="address">Address</label>
              <StyledInput type="text" 
              required 
              name = "address"
              value= {this.state.address}
              onChange = {this.onChangeAddress}
              />
              
              <StyledFieldset>
                <legend>Big or Little</legend>
                <label>
                <select>
                  <option>Big</option>
                  <option>Little</option>
                  value = {this.state.big}
                  onChange = {this.onChangeBig}
                </select>
                </label>
              </StyledFieldset>

              <StyledButton type="submit">
              Submit
              </StyledButton>
            </StyledForm>
          </StyledFormWrapper>
          

        <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
          <Footer/>
        </>

        
  
    );
  }
}

