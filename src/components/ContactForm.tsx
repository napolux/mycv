import React from 'react';

interface IContactFormState {
  formError: boolean;
  emailSent: boolean
  email: string;
  message: string;
}


export default class ContactForm extends React.Component<{},Partial<IContactFormState>> {
  constructor(props: {}) {
    super(props)
    this.state = { formError: false, emailSent: false, email: '', message: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  private handleChange(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) {
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
        return <p>Email sent!</p>;
    } 

    if (this.state.formError === true) {
      formError = <div>Per favore, compila tutti i campi del modulo!</div>
    }

    return (
      <section>
        <h2>Hire me!</h2>
        <p>Let's get in touch! Fill the form:</p>
        <form method="post" onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" onChange={this.handleChange} />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" onChange={this.handleChange} />
          <button type="submit">Hire me!</button>
          {formError}
        </form>
      </section>
    );
  }
}