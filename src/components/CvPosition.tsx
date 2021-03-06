import React from 'react';
import { ICvPositions } from '../api/contentful';
import { Divider, Label, Icon, Header, Container } from 'semantic-ui-react'
import CvPositionEdit from './CvPositionEdit';


interface ICvPositionProps {
  cvPositionValue: ICvPositions[];
  edit?: boolean
}

export default class CvPosition extends React.Component<ICvPositionProps> {

  render() {

    // for readability
    let p = this.props.cvPositionValue;

    // job positions to be rendered
    let positions = [];

    if (this.props.edit === true) {
      positions.push(
        <CvPositionEdit cvPositionValue={this.props.cvPositionValue} />
      )
    } else {
      for (let i = 0; i < p.length; i++) {
        positions.push(
          <Container key={'cvposition_' + i}>
            <div>
              <Header as='h3'>{p[i].company}</Header>
              <Header as='h4'>{p[i].role}</Header>
              <Label>
                <Icon name='calendar' />From
                <Label.Detail>{new Date(p[i].start).toLocaleDateString("en-US")}</Label.Detail>
              </Label>
              <Label>
                <Icon name='calendar' />To
                <Label.Detail>{new Date(p[i].end).toLocaleDateString("en-US")}</Label.Detail>
              </Label>
              <Container>{p[i].description}</Container>
            </div>
            <Divider />
          </Container>
        );
      }
    }
    return (
      <>{positions}</>
    );
  }
}