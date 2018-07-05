import React from 'react';
import { View, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton';
import { fetchImage } from '../../actions/training';
import { incrementExperience } from '../../actions/points';

class Exercise extends React.Component {

  render() {

    return (
      <View>
        <Image
          style={{ height: 300, width: 200 }}
          source={{ uri: this.props.image }}
        />
        <CustomButton
          buttonText='Finished, Next!'
          onPress={() => {
            this.props.dispatch(incrementExperience(this.props.points));
            this.props.dispatch(fetchImage(this.props.collection));
          }}
        />
        <Button
          title='I&apos;m Done'
          onPress={this.props.navigate}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    image: state.image.url
  };
};

export default connect(mapStateToProps)(Exercise);

