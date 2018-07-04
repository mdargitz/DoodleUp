import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import CustomButton from './CustomButton';

export default class LandingPage extends React.Component {
  render() {
    return (
      <ImageBackground
        source={{ uri: 'https://image.ibb.co/ceANzy/background_3497204_640.jpg' }}
        style={styles.imageStyle}
      >
        <View style={styles.viewStyle}>
          <Text style={styles.headerStyle}> Welcome to DoodleUp</Text>
          <Text style={styles.textStyle}> Level Up Your Art </Text>
          <CustomButton
            onPress={() => this.props.navigation.navigate('Home')}
            buttonText='Get Started'
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: 'rgba(0,0,0,.5)',
    margin: 20,
    padding: 20
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  headerStyle : {
    fontSize: 50,
    color: '#fff',
    fontWeight: '600',
    textShadowOffset : {width: 2, height: 2},
    textShadowColor: '#000',
    textShadowRadius: 5,
    textAlign: 'center'
  },
  textStyle : {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    textShadowOffset : {width: 2, height: 2},
    textShadowColor: '#000',
    textShadowRadius: 5,
    textAlign: 'center'
  }
};