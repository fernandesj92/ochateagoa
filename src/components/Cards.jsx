import { render } from '@testing-library/react';
import React from 'react'
import CardItems from './CardItems'
import "./Cards.css"
const Cards = () => {
   
    const images = importAll(require.context('../images/', false, /\.(png|jpeg|jpg)$/));




    return (
       
        <div className='cards'>
            
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
         
            <CardItems
            
            src={images['img-1.jpg']}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItems
              src={images['img-1.jpg']}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
            <CardItems
              src='../images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
          </ul>
     
        </div>
      </div>
    </div>

    )

}

render() ;{
    console.log('In Render')
    return (
   <div> In Render </div>
    )

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}




export default Cards
