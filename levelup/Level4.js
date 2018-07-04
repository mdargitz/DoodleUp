import React from 'react';
import {Text, View, Image} from 'react-native';
import CustomButton from '../CustomButton';
import { connect } from 'react-redux';
import { incrementLevel } from '../actions/points';

function Level4(props){
  return (
    <View>
      <Text> Level 4 : Composition </Text>
      <Text> This challenge takes on the concept of &apos;Composition&apos;- the collections of objects and foci in a piece.</Text>
      <Text> Take an image like the one below and try to replicate the style of the composition. Feel free to do more then turn them in here!</Text>
      <Image source={{uri : 'https://image.ibb.co/dagnzy/shea_rouda_624353_unsplash.jpg'}} style={{height: 350, width: 300}} />
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

export default connect()(Level4);