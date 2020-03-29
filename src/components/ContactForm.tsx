import React from 'react';
import { Button, Form, Segment, Message, Container, Header } from 'semantic-ui-react'

interface IContactFormState {
  formError: boolean;
  emailSent: boolean
  email: string;
  message: string;
}


export default class ContactForm extends React.Component<{}, Partial<IContactFormState>> {
  constructor(props: {}) {
    super(props)
    this.state = { formError: false, emailSent: false, email: '', message: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  private handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const obj: { [key: string]: string; } = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  }

  private handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (this.state.email !== '' && this.state.message !== '') {
      this.setState({ emailSent: true })
    } else {
      this.setState({ formError: true })
    }
    e.preventDefault();
  }

  render() {

    let formError;

    if (this.state.emailSent === true) {
      return <Container>
        <Message
          success
          header='Email sent!'
          content="I'll get back to you as soon as possible. Thanks."
        />
      </Container>;
    }

    if (this.state.formError === true) {
      formError = <Message
        negative
        header='Error!'
        content="Please compile the form with your email and a message. Thanks."
      />
    }

    return (
      <Container>
        <Segment>
        <Header as='h2'>Hire me!</Header>
          <p>Let's get in touch! Fill the form:</p>
          <Form method="post" onSubmit={this.handleSubmit}>
            <Form.Field>
              <label htmlFor="email">Email:</label>
              <input id="email" type="email" name="email" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <textarea id="message" name="message" onChange={this.handleChange} />
            </Form.Field>
            {formError}
            <Button type='submit'>Hire me!</Button>
          </Form>
        </Segment>
      </Container>
    );
  }
}