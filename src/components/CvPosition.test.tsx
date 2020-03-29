import React from 'react';
import CvPosition from './CvPosition';
import renderer from 'react-test-renderer';
import { ICvPositions } from '../api/contentful';

it('renders correctly', () => {

  const position: ICvPositions[] = [{
    company: 'mock company',
    role: 'mock role',
    description: 'string',
    start: new Date(2018, 11, 12),
    end: new Date(2018, 11, 12),
  }]

  const tree = renderer
    .create(<CvPosition cvPositionValue={position} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});