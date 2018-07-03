import React from 'react';
import {View, Text, Button} from 'react-native';

export default class LandingPage extends React.Component {
  render(){
    return (
      <View>
        <Text> Welcome to DooleUp!</Text>
        <Text> Level Up Your Art </Text>
        <Button
          onPress={()=>this.props.navigation.navigate('Home')}
          color='blue'
          title= 'Get Started'
        />
      </View>
    );
  }
}