import React from 'react';
import { Text, Button, View, Linking } from 'react-native';

export default class Inspiration extends React.Component {
  render() {
    return (
      <View>
        <Text>Inspiration - Check out some amazing artists!</Text>
        <Button
          title='Art Station'
          onPress={() => Linking.openURL('https://www.artstation.com/')}
        />
        <Button
          title='DeviantArt'
          onPress={() => Linking.openURL('https://www.deviantart.com/')}
        />
        <Button
          title='Behance'
          onPress={() => Linking.openURL('https://www.behance.net/')}
        />
        
      </View>
    );
  }
}