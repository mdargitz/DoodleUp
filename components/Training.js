import React from 'react';
import { ScrollView, Text, ImageBackground, View } from 'react-native';
import { connect } from 'react-redux';
import MenuBtn from './MenuBtn';

class Training extends React.Component {
  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={{ uri: 'https://image.ibb.co/cJfEwd/mesh_1430107_640.png' }}
          style={{ width: '100%', height: '100%' }}
        >
          <View style={styles.viewStyle}>
            <Text style={styles.headerText}> Complete exercises to earn points!</Text>
            <Text style={styles.subtitleText}>You are at level {this.props.level} and currently have {this.props.points} points</Text>
          </View>
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
  viewStyle: {
    backgroundColor: 'rgba(0,0,0,.5)'
  }
};

const mapStateToProps = state => {
  return {
    points: state.points.experience,
    level: state.points.level
  };
};

export default connect(mapStateToProps)(Training);