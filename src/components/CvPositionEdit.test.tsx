import React from 'react';
import CvPositionEdit from './CvPositionEdit';
import renderer from 'react-test-renderer';
import { ICvPositions } from '../api/contentful';

it('renders correctly', () => {

  const position: ICvPositions[] = [{
    company: 'mock company',
    role: 'mock role',
    description: 'string',
    start: new Date(2018, 11, 24, 10, 33, 30, 0),
    end: new Date(2018, 11, 24, 10, 33, 30, 0),
  }]

  const tree = renderer
    .create(<CvPositionEdit cvPositionValue={position} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});