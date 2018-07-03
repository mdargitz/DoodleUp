import React from 'react';
import {ScrollView} from 'react-native';
import MenuBtn from './MenuBtn';

export default class HomeScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView >
        <MenuBtn 
          onPress={()=> navigation.navigate('Training')} 
          type='Training'/>

        <MenuBtn 
          onPress={()=> navigation.navigate('LevelUp')} 
          type='LevelUp'/>

        <MenuBtn 
          onPress={()=> navigation.navigate('Inspiration')} 
          type='Inspiration'/>

        <MenuBtn 
          onPress={()=> navigation.navigate('Resources')} 
          type='Resources'/>
      </ScrollView>
    );
  }
}