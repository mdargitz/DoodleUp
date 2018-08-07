import React from 'react';
import {LandingPage} from '../components/LandingPage';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<LandingPage />).toJSON();
  expect(tree).toMatchSnapshot();
});