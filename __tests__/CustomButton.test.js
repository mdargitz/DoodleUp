import React from 'react';
import CustomButton from '../components/CustomButton';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<CustomButton />).toJSON();
  expect(tree).toMatchSnapshot();
});