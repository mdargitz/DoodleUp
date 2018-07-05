import React from 'react';
import Challenge from './Challange';

export default function Level4(props){
  return (
    <Challenge
      titleText='Level 4 : Composition'
      challengeText='This challenge takes on the concept of &apos;Composition&apos;- 
      how to display the collections of objects and foci in a piece. 
      Take an image like the one below and try to replicate the style of the composition. 
      Feel free to do more then complete this challenge!'
      image='https://image.ibb.co/dagnzy/shea_rouda_624353_unsplash.jpg'
      level={4}
      navigate={props.navigation.navigate}
    />
  );
}