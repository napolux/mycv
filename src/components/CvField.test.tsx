import React from 'react';
import CvField from './CvField';
import renderer from 'react-test-renderer';

it('renders correctly the name field', () => {
  const tree = renderer
    .create(<CvField cvFieldName="name" cvFieldValue="Mario Rossi" edit={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly the date field', () => {
  const tree = renderer
    .create(<CvField cvFieldName="dob" cvFieldValue="2012-12-12" edit={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly without edit prop', () => {
  const tree = renderer
    .create(<CvField cvFieldName="dob" cvFieldValue="2012-12-12" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});