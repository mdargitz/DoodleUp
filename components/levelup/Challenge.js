import React from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton';
import { incrementLevel } from '../../actions/points';

function Challenge(props) {
  return (
    <ScrollView style={styles.scrollStyle}>
      <Text style={styles.headerStyle}>{props.titleText}</Text>
      <Text style={styles.subtitleStyle}>{props.challengeText}</Text>
      <CustomButton 
        onPress={() => {
          props.dispatch(incrementLevel(props.level));
          props.navigate('LevelUp');
        }}
        buttonText='Complete this Challenge!'
      />
      <Image 
        source={{uri : props.image}}
        style={{width:'100%', height:'100%'}}
      />
    </ScrollView>
  );
}

const styles = {
  scrollStyle : {
    backgroundColor: '#3B3B58'
  },
  headerStyle : {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20
  },
  subtitleStyle : {
    marginBottom: 20,
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  }
};

export default connect()(Challenge);
