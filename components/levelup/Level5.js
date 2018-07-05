import React from 'react';
import Challenge from './Challange';

export default function Level5(props){
  return (
    <Challenge
      titleText='Level 5 : Value &amp; Lighting'
      challengeText='This challenge takes on the concepts of &apos;Value &amp; Lighting&apos;- 
        how color and shading can add body to a piece.
        Take an image like the one below and try to replicate the style of the lighting.
        When you are done, complete this challenge!'
      image='https://image.ibb.co/m4B9CJ/reinhart_julian_569049_unsplash.jpg'
      level={5}
      navigate={props.navigation.navigate}
    />
  );
}