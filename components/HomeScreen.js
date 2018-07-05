import React from 'react';
import { ScrollView, ImageBackground, Text } from 'react-native';
import MenuBtn from './MenuBtn';

export default class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView >
        <ImageBackground
          source={{ uri: 'https://image.ibb.co/g4Gb9y/background_1409028_640.png' }}
          style={styles.imageStyle}
        >
          <MenuBtn
            onPress={() => navigation.navigate('Training')}
            type='Training' 
            subtitle='Refine skills and earn experience points'/>

          <MenuBtn
            onPress={() => navigation.navigate('LevelUp')}
            type='LevelUp' 
            subtitle='Complete challenges to level up'
          />

          <MenuBtn
            onPress={() => navigation.navigate('Inspiration')}
            type='Inspiration'
            subtitle='Check out amazing art around the web' 
          />

          <MenuBtn
            onPress={() => navigation.navigate('Resources')}
            type='Resources' 
            subtitle='Learn with free tutorials and guides'
          />
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = {
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  textStyle: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    padding: 20
  }
};