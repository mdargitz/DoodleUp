import React from 'react';
import { Text, Button, View } from 'react-native';
import { connect } from 'react-redux';
import Level1 from './levelup/Level1';

class LevelUp extends React.Component {

  render() {
    
    return (
      <View>
        <Text>If you have enough points you may Level Up here! You do not need to complete the levels in order.</Text>
        <Text>You are at level {this.props.level} and currently have {this.props.points} points </Text>
        <Button
          title='Level 1 - Requires 3 points'
          onPress={() => this.props.navigation.navigate('Level1')}
          disabled={this.props.points < 3 }
        />
        <Button
          title='Level 2 - Requires 7 points'
          onPress={() => this.props.navigation.navigate('Level2')}
          disabled={this.props.points < 7 }
        />
        <Button
          title='Level 3 - Requires 13 points'
          onPress={() => this.props.navigation.navigate('Level3')}
          disabled= {this.props.points < 13}
        />
        <Button
          title='Level 4 - Requires 20 points'
          onPress={() => this.props.navigation.navigate('Level4')}
          disabled={this.props.points < 20}
        />
        <Button
          title='Level 5 - Requires 30 points'
          onPress={() => this.props.navigation.navigate('Level5')}
          disabled={this.props.points < 30}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    points: state.points.experience,
    level: state.points.level
  };
};

export default connect(mapStateToProps)(LevelUp);