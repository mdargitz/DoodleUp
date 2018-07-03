import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class MenuBtn extends React.Component {

  render() {

    let backgroundColor;
    let iconName;
    if (this.props.type === 'Training'){
      backgroundColor = '#BC7C9C';
      iconName = 'line-chart';
    }
    else if (this.props.type === 'LevelUp'){
      backgroundColor = '#A96DA3';
      iconName = 'star';
    }
    else if (this.props.type === 'Inspiration'){
      backgroundColor = '#7A5980';  
      iconName = 'heart';    
    }
    else {
      backgroundColor = '#3B3B58';
      iconName = 'files-o';  
    }

    const styles = StyleSheet.create({
      viewStyle : {

      },
      touchStyle : {
        backgroundColor
      },
      textStyle : {
        color: '#fff',
        fontSize: 50,
        padding: 50
       
      }
    });

    return (
      <View style={styles.viewStyle}>
        <TouchableOpacity
          style={styles.touchStyle}
          onPress={this.props.onPress}
        >
          <Icon name={iconName} size={60} color="#fff" />
          <Text
            style={styles.textStyle}
          >
            {this.props.type}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}




export default MenuBtn;