import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton';

function Finished(props) {
  return (
    <View>
      <Text>You did it!</Text>
      <Text>You currently have {props.points} experience points!</Text>
      <CustomButton
        buttonText='Back to Training'
        onPress={() => props.navigation.navigate('Training')}
      />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    points: state.points.experience
  };
};

export default connect(mapStateToProps)(Finished);