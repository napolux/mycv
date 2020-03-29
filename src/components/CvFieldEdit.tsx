import React, { MouseEvent } from 'react';
import { Form, Button, Container, Modal } from 'semantic-ui-react';

interface ICvFieldProps {
  cvFieldName: string;
  cvFieldValue: string;
}

interface ICvFieldState {
  modalOpen: boolean;
  hidden: boolean
}

export default class CvFieldEdit extends React.Component<ICvFieldProps, ICvFieldState> {

  constructor(props: ICvFieldProps) {
    super(props);
    this.state = { modalOpen: false, hidden: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  private closeModal() {
    this.setState({ modalOpen: false });
  }

  private handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.setState({
      modalOpen: true
    });
  }

  private handleDelete(event: MouseEvent<HTMLButtonElement>) {
    this.setState({
      hidden: true
    });
  }

  render() {
    return (
      <Container key={'cvfield_' + this.props.cvFieldName} className={this.state.hidden ? 'container-hidden' : 'container-show'}>
        <Form method="post" onSubmit={this.handleSubmit}>
          <Form.Field>
            <label htmlFor={this.mapField(this.props.cvFieldName)}>{this.mapField(this.props.cvFieldName)}:</label>
            <input id={this.props.cvFieldName} name={this.props.cvFieldName} defaultValue={this.props.cvFieldValue} />
          </Form.Field>
          <Button color="green" size="mini">Save</Button>
          <Button color="red" size="mini" onClick={this.handleDelete}>Delete</Button>
        </Form>
        <Modal size="mini" open={this.state.modalOpen} onClose={this.closeModal}>
          <Modal.Header>Content saved</Modal.Header>
          <Modal.Content>
            <p>Operation was successful</p>
          </Modal.Content>
        </Modal>
      </Container>
    );
  }

  mapField(s: string): string {
    switch (s) {
      case 'dob':
        return 'Date of birth';
    }
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  mapValue(k: any, v: any): string {
    if (k === 'dob') {
      return new Date(v).toLocaleDateString('en-US');
    }
    return v;
  }
}