import React from 'react';
import Loading from '../components/Loading';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});