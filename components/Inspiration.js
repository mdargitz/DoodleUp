import React from 'react';
import { Text, Button, View, Linking, ScrollView, ImageBackground } from 'react-native';
import { fetchArt } from '../actions/inspiration';
import { connect } from 'react-redux';
import ArtCard from './ArtCard';

class Inspiration extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchArt());
  }
  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={{ uri: 'https://image.ibb.co/cJfEwd/mesh_1430107_640.png' }}
          style={{ height: '100%', width: '100%' }}
        >
          <View style={styles.titleViewStyle}>
            <Text style={styles.headerText}> Check out Some amazing artists</Text>
            <Text style={styles.subtitleText}>Click the links below or take a look at some recent art.</Text>

            <Button
              color='white'
              title='Art Station'
              onPress={() => Linking.openURL('https://www.artstation.com/')}
            />
            <Button
              color='white'
              title='DeviantArt'
              onPress={() => Linking.openURL('https://www.deviantart.com/')}
            />
            <Button
              color='white'
              title='Behance'
              onPress={() => Linking.openURL('https://www.behance.net/')}
            />
          </View>
          <View style={styles.viewStyle}>
            <ArtCard number={0} />
            <ArtCard number={1} />
            <ArtCard number={2} />
            <ArtCard number={3} />
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = {
  viewStyle: {
    justifyContent: 'center',
  },
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
  titleViewStyle: {
    backgroundColor: 'rgba(0,0,0,.5)'
  }
};

export default connect()(Inspiration);