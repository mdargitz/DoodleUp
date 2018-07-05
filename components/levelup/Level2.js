import React from 'react';
import Challenge from './Challange';

export default function Level2(props){
  return (
    <Challenge
      titleText='Level 2 : Perspective'
      challengeText='This challenge takes on the concept of &apos;Perspective&apos;- 
        understanding how things look as they move closer or farther away. 
        Take an image like the one below and try to create a similar feel in your own work. Feel free to do more,
        and complete the challenge.'
      image='https://image.ibb.co/dzm1sJ/jorge_gascon_23288_unsplash.jpg'
      level={2}
      navigate={props.navigation.navigate}
    />
  );
}