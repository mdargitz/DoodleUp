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
          <Text style={style}> Training</Text>
          <MenuBtn type='Gesture' onPress={() => this.props.navigation.navigate('Gesture')} />
          <MenuBtn type='Study' onPress={() => this.props.navigation.navigate('Study')} />
          <MenuBtn type='FreeDraw' onPress={() => this.props.navigation.navigate('FreeDraw')} />
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
  fontSize: 30
};