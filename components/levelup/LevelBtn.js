//gets level number, level picture, requirements from parent
//gets current points & level from state

import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { connect } from 'react-redux';

class LevelBtn extends React.Component {
  isDisabled() {
    if (this.props.points < this.props.requiredPoints) {
      return true;
    }
    else if (this.props.level < this.props.requiredLevel) {
      return true;
    }
    else {
      return false;
    }
  }

  isCompleted() {
    if (this.props.level === this.props.requiredLevel + 1) {
      return true;
    }
    return false;
  }

  render() {
    const disabled = this.isDisabled();
    const completed = this.isCompleted();
    let toNaviagte = this.props.onPress;
    let backgroundColor = '#A96DA3';
    let subTitle = 'Unlocked! Tap to start the challenge.';
    let imageUrl = this.props.image;
    let color = '#fff';

    if (disabled) {
      toNaviagte = null;
      backgroundColor = '#5d5c73';
      subTitle=`Locked! You must have at least ${this.props.requiredPoints} points
       and be at least level ${this.props.requiredLevel}`;
      imageUrl = 'https://image.ibb.co/m6SrUy/padlock_147915_640.png';
      color = '#ff4f4f';
    }

    if (completed) {
      toNaviagte = null;
      backgroundColor = '#3B3B58';
      subTitle ='Completed! Nice work!';
      color = '#66ff66';
    }

    const styles = {
      touchStyle : {
        backgroundColor,
        margin: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
      },
      viewStyle : {
        marginLeft: 20
      },
      headerText : {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600'
      },
      subtitleText: {
        color,
        width: '80%',
        textAlign: 'left'
      }
    };

    return (
      <TouchableOpacity
        onPress={toNaviagte}
        style= {styles.touchStyle}
      >
        <Image
          source={{ uri: imageUrl }}
          style={{ height: 50, width: 50 }}
        />
        <View style={styles.viewStyle}>
          <Text style={styles.headerText}>{this.props.btnText}</Text>
          <Text style={styles.subtitleText}>{subTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}



const mapStateToProps = state => {
  return {
    points: state.points.experience,
    level: state.points.level
  };
};

export default connect(mapStateToProps)(LevelBtn);

