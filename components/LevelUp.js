import React from 'react';
import { Text, View, ScrollView, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import LevelBtn from './levelup/LevelBtn';

class LevelUp extends React.Component {

  render() {

    return (
      <ScrollView style={{ height: '100%' }}>
        <ImageBackground
          source={{ uri: 'https://image.ibb.co/cJfEwd/mesh_1430107_640.png' }}
          style={{ width: '100%', height: '100%' }}
        >
          <View style={styles.viewStyle}>
            <Text style={styles.headerText}>Complete Challenges to Level Up!</Text>
            <Text style={styles.subtitleText}>You are at level {this.props.level} and currently have {this.props.points} points </Text>
          </View>
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

const styles = {
  headerText: {
    textAlign: 'center',
    color: '#fff',
    paddingTop: 10,
    fontSize: 30,
    fontWeight: '800'
  },
  subtitleText: {
    textAlign: 'center',
    color: '#fff',
    paddingBottom: 10,
    fontSize: 20
  },
  viewStyle : {
    backgroundColor: 'rgba(0,0,0,.5)'
  }
};

const mapStateToProps = state => {
  return {
    points: state.points.experience,
    level: state.points.level
  };
};

export default connect(mapStateToProps)(LevelUp);