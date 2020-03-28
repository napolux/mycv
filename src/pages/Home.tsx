import React from 'react';
import ContactForm from '../components/ContactForm';

export default class Home extends React.Component {
  render() {
    return (
      <section>
        <h1>Homepage</h1>
        <p>Hello from the Homepage!</p>
        <ContactForm />
      </section>
    );
  }
}