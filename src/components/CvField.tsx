import React from 'react';
import { Container } from 'semantic-ui-react';
import CvFieldEdit from './CvFieldEdit';

interface ICvFieldProps {
  cvFieldName: string;
  cvFieldValue: string;
  edit?: boolean;
}

export default class CvField extends React.Component<ICvFieldProps> {
  constructor(props: ICvFieldProps) {
    super(props);
    this.state = { modalOpen: false, hidden: false };
  }

  render() {
    return ((this.props.edit !== true) ?
      <Container key={'cvfield_' + this.props.cvFieldName}>
        <div>
          <p>
            <strong>{this.mapField(this.props.cvFieldName)}</strong>: {this.mapValue(this.props.cvFieldName, this.props.cvFieldValue)}
          </p>
        </div>
      </Container> :
      <CvFieldEdit cvFieldName={this.props.cvFieldName} cvFieldValue={this.props.cvFieldValue} />
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