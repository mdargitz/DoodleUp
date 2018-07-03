import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import Training from './Training';
import LevelUp from './LevelUp';
import Inspiration from './Inspiration';
import Resources from './Resources';
import LandingPage from './LandingPage';
import Gesture from './training/Gesture';
import Study from './training/Study';
import FreeDraw from './training/FreeDraw';
import { Provider } from 'react-redux';
import store from './store';

const RootStack = createStackNavigator({
  Landing: {
    screen: LandingPage,
    navigationOptions: () => ({
      title: 'DoodleUp',
      headerBackTitle: 'back'
    })
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: 'Home',
      headerBackTitle: 'back'
    })
  },
  Training: {
    screen: Training,
    navigationOptions: () => ({
      title: 'Training',
      headerBackTitle: 'back'
    })
  },
  LevelUp: {
    screen: LevelUp,
    navigationOptions: () => ({
      title: 'LevelUp',
      headerBackTitle: 'back'
    })
  },
  Inspiration: {
    screen: Inspiration,
    navigationOptions: () => ({
      title: 'Inspiration',
      headerBackTitle: 'back'
    })
  },
  Resources: {
    screen: Resources,
    navigationOptions: () => ({
      title: 'Resources',
      headerBackTitle: 'back'
    })
  },
  Gesture: {
    screen: Gesture,
    navigationOptions: () => ({
      title: 'Gesture Drawing',
      headerBackTitle: 'back'
    })
  },
  FreeDraw: {
    screen: FreeDraw,
    navigationOptions: () => ({
      title: 'Free Draw',
      headerBackTitle: 'back'
    })
  },
  Study: {
    screen: Study,
    navigationOptions: () => ({
      title: 'Study Drawing',
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
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}