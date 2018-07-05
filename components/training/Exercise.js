import React from 'react';
import { View, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton';
import { fetchImage } from '../../actions/training';
import { incrementExperience } from '../../actions/points';

class Exercise extends React.Component {

  render() {

    return (
      <View style={styles.viewStyle}>
        <Image
          style={{ height: '70%', width: '100%' }}
          source={{ uri: this.props.image }}
        />
        <View>
          <CustomButton
            buttonText='Finished, Next!'
            onPress={() => {
              this.props.dispatch(incrementExperience(this.props.points));
              this.props.dispatch(fetchImage(this.props.collection));
            }}
          />
          <Button
            title='I&apos;m done, turn in my points'
            onPress={this.props.navigate}
            color='white'
          />
        </View>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B3B58',
    height: '100%'
  }
};

const mapStateToProps = state => {
  return {
    image: state.image.url
  };
};

export default connect(mapStateToProps)(Exercise);

