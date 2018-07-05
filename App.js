import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import Training from './components/Training';
import LevelUp from './components/LevelUp';
import Inspiration from './components/Inspiration';
import Resources from './components/Resources';
import LandingPage from './components/LandingPage';
import Gesture from './components/training/Gesture';
import Study from './components/training/Study';
import FreeDraw from './components/training/FreeDraw';
import Finished from './components/training/Finished';
import { Provider } from 'react-redux';
import store from './store';
import Level1 from './components/levelup/Level1';
import Level2 from './components/levelup/Level2';
import Level3 from './components/levelup/Level3';
import Level4 from './components/levelup/Level4';
import Level5 from './components/levelup/Level5';

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
  Finished: {
    screen: Finished,
    navigationOptions: () => ({
      title: 'Finished!',
      headerBackTitle: 'back'
    })
  },
  Level1: {
    screen: Level1,
    navigationOptions: () => ({
      title: 'Level One Challenge',
      headerBackTitle: 'back'
    })
  },
  Level2: {
    screen: Level2,
    navigationOptions: () => ({
      title: 'Level Two Challenge',
      headerBackTitle: 'back'
    })
  },
  Level3: {
    screen: Level3,
    navigationOptions: () => ({
      title: 'Level Three Challenge',
      headerBackTitle: 'back'
    })
  },
  Level4: {
    screen: Level4,
    navigationOptions: () => ({
      title: 'Level Four Challenge',
      headerBackTitle: 'back'
    })
  },
  Level5: {
    screen: Level5,
    navigationOptions: () => ({
      title: 'Level Five Challenge',
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