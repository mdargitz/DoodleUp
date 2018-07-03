import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import Training from './Training';
import LevelUp from './LevelUp';
import Inspiration from './Inspiration';
import Resources from './Resources';
import LandingPage from './LandingPage';

const RootStack = createStackNavigator({
  Landing: {
    screen : LandingPage,
    navigationOptions: () => ({
      title: 'DoodleUp',
      headerBackTitle: 'back'
    })
  },
  Home: {
    screen : HomeScreen,
    navigationOptions: () => ({
      title: 'Home',
      headerBackTitle: 'back'
    })
  },
  Training: {
    screen : Training,
    navigationOptions: () => ({
      title: 'Training',
      headerBackTitle: 'back'
    })
  },
  LevelUp: {
    screen : LevelUp,
    navigationOptions: () => ({
      title: 'LevelUp',
      headerBackTitle: 'back'
    })
  },
  Inspiration: {
    screen : Inspiration,
    navigationOptions: () => ({
      title: 'Inspiration',
      headerBackTitle: 'back'
    })
  },
  Resources : {
    screen : Resources,
    navigationOptions: () => ({
      title: 'Resources',
      headerBackTitle: 'back'
    })
  },
},
{
  initialRouteName: 'Landing',
  navigationOptions: ({ navigation }) => ({
    title: 'DoodleUp',
  }),
}
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}