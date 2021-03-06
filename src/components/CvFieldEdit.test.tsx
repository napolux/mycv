import React from 'react';
import CvFieldEdit from './CvFieldEdit';
import renderer from 'react-test-renderer';

it('renders correctly the name field', () => {
  const tree = renderer
    .create(<CvFieldEdit cvFieldName="name" cvFieldValue="Mario Rossi" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly the date field', () => {
    const tree = renderer
      .create(<CvFieldEdit cvFieldName="dob" cvFieldValue="2012-12-12" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });