import React from 'react';
import Challenge from './Challange';

function Level1(props){
  return (
    <Challenge
      titleText='Level 1 : Form'
      challengeText='This challenge takes on the concept of &apos;form&apos;- taking 3D objects and representing them in 2D. Take a complicated image like the one below and break it down to fundamental parts. Feel free to do more,
      then turn them in here!'
      image='https://image.ibb.co/hjdZey/sanah_suvarna_161883_unsplash.jpg'
      level={1}
      navigate={props.navigation.navigate}
    />
  );
}

export default Level1;