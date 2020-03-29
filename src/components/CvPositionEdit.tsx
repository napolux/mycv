import React from 'react';
import { ICvPositions } from '../api/contentful';
import { Form, Divider, Container, Modal, Button } from 'semantic-ui-react';

interface ICvPositionProps {
  cvPositionValue: ICvPositions[];
}

interface ICvPositionState {
  modalOpen: boolean;
  hidden: boolean
}

export default class CvPositionEdit extends React.Component<ICvPositionProps, ICvPositionState> {

  constructor(props: ICvPositionProps) {
    super(props);
    this.state = { modalOpen: false, hidden: false };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {

    // for readability
    let p = this.props.cvPositionValue;

    // job positions to be rendered
    let positions = [];

    for (let i = 0; i < p.length; i++) {
      positions.push(
        <Container key={'cvposition_' + i}>
          <div>
            <Form method="post" onSubmit={this.handleSubmit}>
              <Form.Field>
                <label htmlFor="company">Company:</label>
                <input id="company" name="company" defaultValue={p[i].company} />
              </Form.Field>
              <Form.Field>
                <label htmlFor="role">Role:</label>
                <input id="role" name="role" defaultValue={p[i].role} />
              </Form.Field>
              <Form.Field>
                <label htmlFor="start">Start:</label>
                <input id="start" name="start" defaultValue={p[i].start.toString()} />
              </Form.Field>
              <Form.Field>
                <label htmlFor="end">End:</label>
                <input id="end" name="end" defaultValue={p[i].end.toString()} />
              </Form.Field>
              <Form.Field>
                <label htmlFor="description">Description:</label>
                <input id="description" name="description" defaultValue={p[i].description} />
              </Form.Field>
              <Button color="green" size="mini">Save</Button>
            </Form>
          </div>
          <Divider />
        </Container>
      );
    }
    return (
      <Form method="post" onSubmit={this.handleSubmit}>
        {positions}
        <Modal size="mini" open={this.state.modalOpen} onClose={this.closeModal}>
          <Modal.Header>Content saved</Modal.Header>
          <Modal.Content>
            <p>Operation was successful</p>
          </Modal.Content>
        </Modal>
      </Form>
    );
  }
}