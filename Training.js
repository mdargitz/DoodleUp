import React from 'react';
import {ScrollView, Text} from 'react-native';
import MenuBtn from './MenuBtn';

export default class Training extends React.Component {
  render (){
    return (
      <ScrollView>
        <Text style={style}> Training</Text>
        <MenuBtn type='Gesture' onPress={()=>this.props.navigation.navigate('Gesture')} />
        <MenuBtn type='Study' onPress={()=>this.props.navigation.navigate('Study')} />
        <MenuBtn type='FreeDraw' onPress={()=>this.props.navigation.navigate('FreeDraw')} />
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