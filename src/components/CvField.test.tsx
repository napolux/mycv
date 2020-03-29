import React from 'react';
import CvField from './CvField';
import renderer from 'react-test-renderer';

it('renders correctly the name field', () => {
  const tree = renderer
    .create(<CvField cvFieldName="name" cvFieldValue="Mario Rossi" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly the date field', () => {
    const tree = renderer
      .create(<CvField cvFieldName="dob" cvFieldValue="12/12/2012" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });