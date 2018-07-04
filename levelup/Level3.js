import React from 'react';
import {Text, View, Image} from 'react-native';
import CustomButton from '../CustomButton';
import { connect } from 'react-redux';
import { incrementLevel } from '../actions/points';

function Level3(props){
  return (
    <View>
      <Text> Level 3 : Anatomy </Text>
      <Text> This challenge takes on the concept of &apos;Anatomy&apos;- The human body is made up of many complex peices and ratios.</Text>
      <Text> Take an image like the one below and try to replicate the detail of the body. Feel free to do more then turn them in here!</Text>
      <Image source={{uri : 'https://image.ibb.co/gEP4CJ/israel_gil_596312_unsplash.jpg'}} style={{height: 350, width: 300}} />
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

export default connect()(Level3);