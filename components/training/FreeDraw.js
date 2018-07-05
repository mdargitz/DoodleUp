import React from 'react';
import { Text, View, Button, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { fetchPrompt } from '../../actions/prompts';
import CustomButton from '../CustomButton';
import Loading from '../Loading';
import Error from '../Error';
import { incrementExperience } from '../../actions/points';

class FreeDraw extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPrompt());
  }
  render() {
    if (this.props.loading) {
      return (
        <Loading />
      );
    }
    if (this.props.error) {
      return (
        <Error />
      );
    }

    return (
      <View>
        <ImageBackground
          source={{uri : 'https://image.ibb.co/ga7cKy/bridge_19513_640.jpg'}}
          style={styles.imageBkg}  
        >
          <Text style={styles.textStyle}>Draw whatever you like! </Text>
          <Text style={styles.textStyle}>Need an idea? How about drawing {this.props.prompt}</Text>
          <CustomButton
            buttonText='Done!'
            onPress={() => {
              this.props.dispatch(incrementExperience(4));
              this.props.navigation.navigate('Finished');
            }}
          />
          <Button
            color='white'
            title='Pass- tell me something else to draw'
            onPress={() => this.props.dispatch(fetchPrompt())}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  imageBkg : {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  textStyle : {
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: 'rgba(255,255,255,.8)',
    padding: 15,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 0
  }
};

const mapStateToProps = state => {
  return {
    prompt: state.prompt.prompt,
    loading: state.prompt.loading,
    error: state.prompt.error
  };
};

export default connect(mapStateToProps)(FreeDraw); 