import React from 'react';
import ResourceCard from '../components/ResourceCard';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ResourceCard />).toJSON();
  expect(tree).toMatchSnapshot();
});