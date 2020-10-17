import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Click On Each Card to Lean More !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='About Hobby Boc'
              
              path='/about'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Sponsor a Box!'
            
              path='/sponsor'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Sign Up to Get Sponsored'
             
              path='/SignUp'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;