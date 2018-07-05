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
    else if (this.props.type === 'Gesture') {
      backgroundColor = '#af5984';
      iconName = 'heart';
    }
    else if (this.props.type === 'Study'){
      backgroundColor = '#a23a6e';
      iconName = 'star';
    }
    else if (this.props.type === 'FreeDraw'){
      backgroundColor = '#961f5b';  
      iconName = 'heart'; 
    }
    else {
      backgroundColor = '#3B3B58';
      iconName = 'files-o';  
    }

    const styles = StyleSheet.create({
      viewStyle : {
        margin: 20
      },
      touchStyle : {
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      textStyle : {
        color: '#fff',
        fontSize: 30,
        padding: 30
       
      }
    });

    return (
      <View style={styles.viewStyle}>
        <TouchableOpacity
          style={styles.touchStyle}
          onPress={this.props.onPress}
        >
          <Icon name={iconName} size={30} color="#fff" />
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