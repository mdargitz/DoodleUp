import React from 'react';
import {Text, View, Image} from 'react-native';
import CustomButton from '../CustomButton';
import { connect } from 'react-redux';
import { incrementLevel } from '../../actions/points';

function Level5(props){
  return (
    <View>
      <Text> Level 5 : Value &amp; Lighting</Text>
      <Text> This challenge takes on the concepts of &apos;Value &amp; Lighting&apos;- how color and shading can add body to a piece.</Text>
      <Text> Take an image like the one below and try to replicate the style of the lighting. Feel free to do more then turn them in here!</Text>
      <Image source={{uri : 'https://image.ibb.co/m4B9CJ/reinhart_julian_569049_unsplash.jpg'}} style={{height: 350, width: 300}} />
      <CustomButton
        buttonText='Done!'
        onPress={() => {
          props.dispatch(incrementLevel());
          props.navigation.navigate('LevelUp');
        }}
      />
    </View>
  );
}

export default connect()(Level5);