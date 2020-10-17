import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <>
    <div className ='hero-image'>
    <div className = 'hero-container'>
    <h1>Sponsor a Box to help support Big Brothers and Big Sisters of America</h1>
    <h2>Create and support one-to-one mentoring relationships that ignite the power and promise of youth</h2>
    <span>With Covid-19 still prevalent in the United-States, it has become difficult for Big Brothers and sisters to interact and bond in person.<br></br>
    With your donation/sponsorship, Big and Little brothers/sisters will receive an activity box and a zoom meeting code with the date and time.</span>


 

      <div className='hero-btns'>
        <Button Link
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default HeroSection;