import React from 'react';
import Error from '../components/Error';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Error />).toJSON();
  expect(tree).toMatchSnapshot();
});