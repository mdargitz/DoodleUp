import React from 'react';
import {Text, View, Image} from 'react-native';
import CustomButton from '../CustomButton';
import { connect } from 'react-redux';
import { incrementLevel } from '../actions/points';

function Level1(props){
  return (
    <View>
      <Text> Level 1 : Form </Text>
      <Text> This challenge takes on the concept of &apos;form&apos;- taking 3D objects and representing them in 2D.</Text>
      <Text> Take a complicated image like the one below and break it down to fundamental parts. Feel free to do more,
        then turn them in here!</Text>
      <Image source={{uri : 'https://image.ibb.co/hjdZey/sanah_suvarna_161883_unsplash.jpg'}} style={{height: 350, width: 300}} />
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

export default connect()(Level1);