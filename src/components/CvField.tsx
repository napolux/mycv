import React from 'react';

interface ICvFieldProps {
  cvFieldName: string;
  cvFieldValue: string;
}

export default class CvField extends React.Component<ICvFieldProps> {
  render() {
    return (
      <section key={'cvfield_' + this.props.cvFieldName}>
        <div>
          <p>
            <strong>{this.mapField(this.props.cvFieldName)}</strong>: {this.mapValue(this.props.cvFieldName, this.props.cvFieldValue)}
          </p>
        </div>
      </section>
    );
  }

  mapField(s: string): string { 
    switch(s) {
      case 'dob':
        return 'Date of birth';
    }
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  mapValue(k: any, v: any): string {
    if(k === 'dob') {
      return new Date(v).toLocaleDateString('en-US');
    }
    return v;
  }
}