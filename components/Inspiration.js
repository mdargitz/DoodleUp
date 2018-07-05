import React from 'react';
import { Text, Button, View, Linking, ScrollView } from 'react-native';
import { fetchArt } from '../actions/inspiration';
import { connect } from 'react-redux';
import ArtCard from './ArtCard';

class Inspiration extends React.Component {

  componentDidMount(){
    this.props.dispatch(fetchArt());
  }
  render() {
    return (
      <ScrollView>
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
        <ArtCard number={0} />
        <ArtCard number={1} />
        <ArtCard number={2} />
        <ArtCard number={3} />
        
      </ScrollView>
    );
  }
}

export default connect()(Inspiration);