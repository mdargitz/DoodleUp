import React from 'react';
import { Text, View, Image } from 'react-native';
import CustomButton from '../CustomButton';
import {connect} from 'react-redux';
import { fetchImage } from '../actions/training';

class Gesture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
    };
  }

  componentDidMount(){
    console.log('mounting view');
    this.props.dispatch(fetchImage('person'));
    console.log(this.props.image);
  }

  render() {

    if (this.state.started){
      return (
        <View
          style={{flex: 1}}>
          <Image
            style={{height: 300, width: 200}}
            source={{uri : this.props.image}}          
          />
          <CustomButton 
            buttonText='Next Image'
            onPress={()=> this.props.dispatch(fetchImage('person'))}
          />
        </View>
      );
    }

    return (
      <View>
        <Text> In these exercises, try to capture the movement and form of each figure,
        without spending too much time on the detail</Text>
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
    image : state.image.url
  };
};

export default connect(mapStateToProps)(Gesture);