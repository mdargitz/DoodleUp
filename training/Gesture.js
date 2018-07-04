import React from 'react';
import { Text, View } from 'react-native';
import CustomButton from '../CustomButton';
import { connect } from 'react-redux';
import { fetchImage } from '../actions/training';
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

  componentDidMount(){
    this.props.dispatch(fetchImage('2311062'));
  }

  render() {
    if (this.props.loading){
      return <Loading />;
    }
    if (this.props.error){
      return <Error />;
    }
    if (this.state.started && !this.props.loading){
      return <Exercise 
        navigate={() => this.props.navigation.navigate('Finished')}
        collection='2311062'
        points={2}
      />;
    }

    return (
      <View>
        <Text> In these exercises, study the image and try to replicate the detail to the best of your ability</Text>
        <CustomButton
          onPress={()=>this.setState({started : true})}
          buttonText='Go Train!'
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading : state.image.loading,
    error : state.image.error
  };
};

export default connect(mapStateToProps)(Gesture);