import React from 'react';
import {
  Link
} from "react-router-dom";
import { Container, Menu } from 'semantic-ui-react'

export default class MyCvMenu extends React.Component {
  render() {
    return (
      <Container>
          <Menu>
            <Menu.Item header>MyCv</Menu.Item>
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/login">Login</Link>
            </Menu.Item>
          </Menu>
      </Container>
    );
  }
}