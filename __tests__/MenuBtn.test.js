import React from 'react';
import MenuBtn from '../components/MenuBtn';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<MenuBtn />).toJSON();
  expect(tree).toMatchSnapshot();
});