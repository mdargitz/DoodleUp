import React from 'react';
import { Text, Button, ScrollView, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import LevelBtn from './levelup/LevelBtn';

class LevelUp extends React.Component {

  render() {

    return (
      <ScrollView style={{height: '100%'}}>
        <ImageBackground
          source={{uri : 'https://image.ibb.co/cJfEwd/mesh_1430107_640.png'}}
          style={{width:'100%', height:'100%'}}
        >
          <Text>If you have enough points you may Level Up here! You do not need to complete the levels in order.</Text>
          <Text>You are at level {this.props.level} and currently have {this.props.points} points </Text>
          <LevelBtn
            btnText='Level 1 : Form'
            requiredPoints={3}
            requiredLevel={0}
            onPress={() => this.props.navigation.navigate('Level1')}
            image='https://image.ibb.co/hjdZey/sanah_suvarna_161883_unsplash.jpg'
          />
          <LevelBtn
            btnText='Level 2 : Perspective'
            requiredPoints={7}
            requiredLevel={1}
            onPress={() => this.props.navigation.navigate('Level2')}
            image='https://image.ibb.co/dzm1sJ/jorge_gascon_23288_unsplash.jpg'
          />
          <LevelBtn
            btnText='Level 3 : Anatomy'
            requiredPoints={13}
            requiredLevel={2}
            onPress={() => this.props.navigation.navigate('Level3')}
            image='https://image.ibb.co/gEP4CJ/israel_gil_596312_unsplash.jpg'
          />
          <LevelBtn
            btnText='Level 4 : Composition'
            requiredPoints={20}
            requiredLevel={3}
            onPress={() => this.props.navigation.navigate('Level4')}
            image='https://image.ibb.co/dagnzy/shea_rouda_624353_unsplash.jpg'
          />
          <LevelBtn
            btnText='Level 5 : Value &amp; Lighting'
            requiredPoints={30}
            requiredLevel={4}
            onPress={() => this.props.navigation.navigate('Level5')}
            image='https://image.ibb.co/m4B9CJ/reinhart_julian_569049_unsplash.jpg'
          />
        </ImageBackground>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    points: state.points.experience,
    level: state.points.level
  };
};

export default connect(mapStateToProps)(LevelUp);