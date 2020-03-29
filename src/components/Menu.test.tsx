import React from 'react';
import MyCvMenu from './Menu';
import renderer from 'react-test-renderer';
import {
    BrowserRouter as Router,
} from "react-router-dom";

it('renders correctly inside router', () => {
    const tree = renderer
        .create(
            <Router>
                <MyCvMenu />
            </Router>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});