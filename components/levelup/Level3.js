import React from 'react';
import Challenge from './Challenge';

export default function Level3(props){
  return (
    <Challenge
      titleText='Level 3 : Anatomy'
      challengeText='This challenge takes on the concept of &apos;Anatomy&apos;- 
      The human body is made up of many complex peices and ratios.
      Take an image like the one below and try to replicate the detail of the body. 
      Do as many as you like and complete this challenge!'
      image='https://image.ibb.co/gEP4CJ/israel_gil_596312_unsplash.jpg'
      level={3}
      navigate={props.navigation.navigate}
    />
  );
}