import React from 'react';
import { ICvPositions } from '../api/contentful';
import { Divider, Label, Icon, Header, Container } from 'semantic-ui-react'


interface ICvPositionProps {
  cvPositionValue: ICvPositions[];
}

export default class CvPosition extends React.Component<ICvPositionProps> {

  render() {

    // for readability
    let p = this.props.cvPositionValue;

    // job positions to be rendered
    let positions = [];

    for (let i = 0; i < p.length; i++) {
      positions.push(
        <section key={'cvposition_' + i}>
          <div>
            <Header as='h3'>{p[i].company}</Header>
            <Header as='h4'>{p[i].role}</Header>
            <Label>
              <Icon name='calendar' />From
              <Label.Detail>{new Date(p[i].start).toLocaleDateString("it-IT")}</Label.Detail>
            </Label>         
            <Label>
              <Icon name='calendar' />To
              <Label.Detail>{new Date(p[i].end).toLocaleDateString("it-IT")}</Label.Detail>
            </Label>    
            <Container>{p[i].description}</Container>
          </div>
          <Divider />
        </section>
      );
    }


    return (
      <>{positions}</>
    );
  }
}