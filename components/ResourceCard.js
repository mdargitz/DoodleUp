//title text, image thumbnail, short description from parent

import React from 'react';
import { View, TouchableOpacity, Text, Image, Linking } from 'react-native';

export default function ResourceCard(props) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://www.sophia.org/tutorials/introduction-to-gesture-drawing')}
        style={styles.touchStyle}
      >
        <Image
          source={{ uri: props.image }}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.textStyle}>{props.title}</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = {
  touchStyle : {
    backgroundColor: '#3B3B58',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 30,
    margin: 20
  },
  textStyle : {
    color: '#fff',
    fontSize: 20,
    padding: 10,
    textAlign: 'center'
  }
};