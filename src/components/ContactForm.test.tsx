import React from 'react';
import ContactForm from './ContactForm';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<ContactForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});