//get title, get challenge text, get example images, get level from parent
//get dispatch from state

import React from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton';
import { incrementLevel } from '../../actions/points';

function Challenge(props) {
  return (
    <ScrollView>
      <Text>{props.titleText}</Text>
      <Text>{props.challengeText}</Text>
      <Image 
        source={{uri : props.image}}
        style={{width:'100%', height:'100%'}}
      />
      <CustomButton 
        onPress={() => {
          props.dispatch(incrementLevel(props.level));
          props.navigate('LevelUp');
        }}
        buttonText='Complete this Challenge!'
      />
    </ScrollView>
  );
}

export default connect()(Challenge);
