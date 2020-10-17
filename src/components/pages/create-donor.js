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


export default class CreateDonor extends Component {
    //we always need this
  constructor(props) {
    super(props);

    //to make sure the this keyword is working fine, we need to bind this to the methods we have just implemented
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeInterest = this.onChangeDonation.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //the fields must match the fields for the backend db
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      donation: "",
    };
  }

  //this method is part of the react life cycle, it will be called as soon as a component has been mounted so before everything is loaded and render this will be called.
  // componentDidMount() {
  //   axios
  //     .get("http://localhost:5000/donor/")
  //     .then((response) => {
  //       if (response.data.length > 0) {
  //         this.setState({
  //           users: response.data.map((donor) => donor.username),
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

  onChangeDonation(e){
    this.setState({
      donation: e.target.value,
    })
  }

  onChangeEmail(e){
    this.setState({
      email: e.target.value,
    })
  }
  
  onSubmit(e) {
    e.preventDefault();

    const donor = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      donation: this.state.donation,
      address: this.state.address,
      email: this.state.email,
    };

    axios
      .post("http://localhost:3000/create-donor/add", donor)
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
              <h2>Sponsor a Hobby Boc</h2>
              
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
              
              <label htmlFor= "donation">Donation</label>
              <StyledInput 
              type ="text" 
              required
              name="donation"
              value ={this.state.donation}
              onChange = {this.onChangeEmail}/>
              
              <label htmlFor="email">Email</label>
              <StyledInput 
              type="text" 
              required 
              name = "email"
              value= {this.state.email}
              onChange= {this.onChangeInterest}/>
              
              <label htmlFor="address">Address</label>
              <StyledInput 
              type="text" 
              required 
              name = "address"
              value= {this.state.address}
              onChange = {this.onChangeAddress}
              />

            </StyledForm>
             <StyledButton type="submit">
              Submit
              </StyledButton>
          </StyledFormWrapper>
          <Footer/>
          

        </>
  
    );
  }
}