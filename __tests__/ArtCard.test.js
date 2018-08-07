import React from 'react';
import {ArtCard} from '../components/ArtCard';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ArtCard />).toJSON();
  expect(tree).toMatchSnapshot();
});