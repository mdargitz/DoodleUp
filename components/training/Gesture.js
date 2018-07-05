import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import CustomButton from '../CustomButton';
import { connect } from 'react-redux';
import { fetchImage } from '../../actions/training';
import Loading from '../Loading';
import Error from '../Error';
import Exercise from './Exercise';

class Gesture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchImage('2311062'));
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    if (this.props.error) {
      return <Error />;
    }
    if (this.state.started && !this.props.loading) {
      return <Exercise
        navigate={() => this.props.navigation.navigate('Finished')}
        collection='2311062'
        points={2}
      />;
    }

    return (
      <View>
        <ImageBackground
          source={{uri : 'https://image.ibb.co/btW9XJ/sketch_2700699_640.jpg'}}
          style={styles.imageBkg}
        >
          <Text
            style={styles.textStyle}
          > Capture form and movement, rather than detail. Do not spend too much time!</Text>
          <CustomButton
            onPress={() => this.setState({ started: true })}
            buttonText='Go Train!'
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
    loading: state.image.loading,
    error: state.image.error
  };
};

export default connect(mapStateToProps)(Gesture);