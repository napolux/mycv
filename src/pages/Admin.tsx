import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps { 
  authenticated: boolean
}

export default class Admin extends React.Component<Props> {
  render() {
    let { authenticated } = this.props.location.state as any || false;
    if (authenticated !== true) {
      return <Redirect to="/login" />
    }
    return (
      <section>
        <h1>Admin area</h1>
        <p>Hello from the Admin area </p>
      </section>
    );
  }
}