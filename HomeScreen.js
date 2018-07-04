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
          <Text style={styles.textStyle}>Select a card below to start your artistic journey!</Text>
          <MenuBtn
            onPress={() => navigation.navigate('Training')}
            type='Training' />

          <MenuBtn
            onPress={() => navigation.navigate('LevelUp')}
            type='LevelUp' />

          <MenuBtn
            onPress={() => navigation.navigate('Inspiration')}
            type='Inspiration' />

          <MenuBtn
            onPress={() => navigation.navigate('Resources')}
            type='Resources' />
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