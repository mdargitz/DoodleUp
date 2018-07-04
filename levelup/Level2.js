import React from 'react';
import {Text, View, Image} from 'react-native';
import CustomButton from '../CustomButton';
import { connect } from 'react-redux';
import { incrementLevel } from '../actions/points';

function Level2(props){
  return (
    <View>
      <Text> Level 2 : Perspective </Text>
      <Text> This challenge takes on the concept of &apos;Perspective&apos;- understanding how things look as they move closer or farther away</Text>
      <Text> Take an image like the one below and try to create a similar feel in your own work. Feel free to do more,
      then turn them in here!</Text>
      <Image source={{uri : 'https://image.ibb.co/dzm1sJ/jorge_gascon_23288_unsplash.jpg'}} style={{height: 350, width: 300}} />
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

export default connect()(Level2);