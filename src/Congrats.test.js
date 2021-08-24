import React from 'react';
import Enzyme, { shallow } from 'enzyme';
//import EnzymeAdapter from 'enzyme-adapter-react-16';
//tova otiva v setupTests.js

import Congrats from './Congrats';

//Enzyme.configure({ adapter: new EnzymeAdapter() });
//tova otiva v setupTests.js

import { findByTestAttr, checkProps } from '../test/testUtils';

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});
test('renders no text when `success` props is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});
test('renders non-empty congrats message when `success` props is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});


//with 'check-prop-types', install it first:
test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
