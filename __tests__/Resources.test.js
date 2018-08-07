import React from 'react';
import Resources from '../components/Resources';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Resources />).toJSON();
  expect(tree).toMatchSnapshot();
});