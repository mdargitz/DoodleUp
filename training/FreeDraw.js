import React from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import { fetchPrompt } from '../actions/prompts';
import CustomButton from '../CustomButton';
import Loading from '../Loading';
import Error from '../Error';
import { incrementExperience } from '../actions/points';

class FreeDraw extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPrompt());
  }
  render() {
    if (this.props.loading){
      return (
        <Loading />
      );
    }
    if (this.props.error){
      return (
        <Error />
      );
    }

    return (
      <View>
        <Text>Free Draw - draw whatever you like! You can also use the prompt below:</Text>
        <Text>{this.props.prompt}</Text>
        <CustomButton 
          buttonText='Done!'
          onPress={()=>{
            this.props.dispatch(incrementExperience(4));
            this.props.navigation.navigate('Finished');}}
        />
        <Button 
          title='Pass- Give me a new prompt'
          onPress={()=> this.props.dispatch(fetchPrompt())}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    prompt : state.prompt.prompt,
    loading: state.prompt.loading,
    error: state.prompt.error
  };
};

export default connect(mapStateToProps)(FreeDraw); 