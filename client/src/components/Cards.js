import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>5 main safety precautions!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/alert.jpg'
              text='The more awake a worker is, the less likely he or she is to get hurt.'
              label='Stay Alert'
              path='/accidents'
            />
            <CardItem
              src='../images/safehat.jpg'
              text='Wear protective clothing and equipment as required.'
              label='Wear the right chlothes'
              path='/accidents'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../images/area.jpg'
              text='Keep your work area clean.'
              label='Be Tidy'
              path='/accidents'
            />
            <CardItem
              src='../images/rulesss.png'
              text='Always follow the rules and do not take shortcuts. Assess risk before working'
              label='Follow the rules'
              path='/accidents'
            />
            <CardItem
              src='../images/img-8.jpg'
              text='Practical jokes and horseplay can be dangerous, especially around heavy machinery. If you feel the urge to play, resist it until after work.'
              label='Dont be prankster'
              path='/accidents'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
