import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

class CustomButton extends React.Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <TouchableOpacity 
          style={styles.touchStyle}
          onPress={this.props.onPress}>
          <Text style={styles.textStyle}>{this.props.buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  viewStyle : {
    alignItems: 'center'
  },
  touchStyle : {
    margin: 20,
    padding: 10,
    backgroundColor: '#bc7c9c',
    borderRadius: 5,

  },
  textStyle : {
    color: '#fff',
    fontSize: 30,
  }
};

export default CustomButton;