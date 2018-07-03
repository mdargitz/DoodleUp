import React from 'react';
import {View, Text, Button} from 'react-native';
import CustomButton from './CustomButton';

export default class LandingPage extends React.Component {
  render(){
    return (
      <View>
        <Text> Welcome to DooleUp!</Text>
        <Text> Level Up Your Art </Text>
        <CustomButton
          onPress={()=>this.props.navigation.navigate('Home')}
          buttonText='Get Started'
        />
      </View>
    );
  }
}