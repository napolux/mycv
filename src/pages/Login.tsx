import React from 'react';
import { Redirect } from "react-router-dom";
import { Container, Segment, Header, Form, Button, Message } from 'semantic-ui-react';

interface ILoginFormState {
  authenticated: boolean;
  formError: boolean;
  username: string;
  password: string;
}


export default class Login extends React.Component<{}, Partial<ILoginFormState>> {
  constructor(props: {}) {
    super(props)
    this.state = { authenticated: false, formError: false, username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  private handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const obj: { [key: string]: string; } = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  }

  private handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (this.state.username !== 'admin' || this.state.password !== 'admin') {
      this.setState({ formError: true, authenticated: false })
    } else {
      this.setState({ formError: false, authenticated: true })
    }
    e.preventDefault();
  }

  render() {

    if (this.state.authenticated === true) {
      return <Redirect to={{ pathname: '/admin', state: { authenticated: true } }} />
    }

    let formError;
    if (this.state.formError === true) {
      formError = <Message
        negative
        header='Error!'
        content="Please check your username and password."
      />    }

    return (
      <Container>
        <Segment>
        <Header as="h1">Login</Header>
        <p>Hello from the Login page! Please login with your credentials:</p>
        <Form method="post" onSubmit={this.handleSubmit}>
        <Form.Field>
              <label htmlFor="username">Username:</label>
              <input id="username" type="text" name="username" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label htmlFor="password">Password:</label>
              <input id="password" type="password" name="password" onChange={this.handleChange} />
            </Form.Field>
            <Button type='submit'>Login</Button>
          {formError}
        </Form>
        </Segment>
      </Container>
    );
  }
}