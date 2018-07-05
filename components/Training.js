import React from 'react';
import { ScrollView, Text, ImageBackground } from 'react-native';
import MenuBtn from './MenuBtn';

export default class Training extends React.Component {
  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={{uri : 'https://image.ibb.co/cJfEwd/mesh_1430107_640.png'}}
          style={{width:'100%', height: '100%'}}
        >
          <Text style={style}> Complete the exercises below to earn points and level up!</Text>
          <MenuBtn 
            type='Gesture' 
            onPress={() => this.props.navigation.navigate('Gesture')}
            subtitle='Quick sketch - 2 points each'
          />
          <MenuBtn 
            type='Study' 
            onPress={() => this.props.navigation.navigate('Study')} 
            subtitle='Full illustration - 4 points each'
          />
          <MenuBtn 
            type='FreeDraw' 
            onPress={() => this.props.navigation.navigate('FreeDraw')} 
            subtitle='Full illustration - 4 points each'
          />
        </ImageBackground>
      </ScrollView>
    );
  }
}

const style = {
  backgroundColor: '#BC7C9C',
  padding: 20,
  textAlign: 'center',
  color: '#fff',
  fontSize: 15
};