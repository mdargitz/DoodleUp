import React from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton';

function Finished(props) {
  return (
    <View style={styles.viewStyle}>
      <Image 
        style={{height: 200, width: 100}}
        source={{uri : 'https://image.ibb.co/iYCPXJ/balloon_1141570_640.png'}}
      />
      <Text style={styles.headerStyle}>You did it!</Text>
      <Text style={styles.textStyle}>You currently have </Text>
      <Text style={styles.emphasisStyle}>{props.points}</Text>
      <Text style={styles.textStyle}> experience points!</Text>
      <CustomButton
        buttonText='Back to Training'
        onPress={() => props.navigation.navigate('Training')}
      />
    </View>
  );
}

const styles = {
  viewStyle : {
    backgroundColor: '#7A5980',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  headerStyle : {
    color: '#fff',
    fontSize: 40,
    fontWeight: '600'
  },
  textStyle : {
    color: '#fff'
  },
  emphasisStyle : {
    color: '#54efe2',
    fontSize: 20,
    fontWeight: '800'
  }
};

const mapStateToProps = state => {
  return {
    points: state.points.experience
  };
};

export default connect(mapStateToProps)(Finished);