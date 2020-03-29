import React from 'react';
import { ICvPositions } from '../api/contentful';

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
            <h3>{p[i].company}</h3>
            <h4>{p[i].role}</h4>
            <p>
              <strong>From</strong>:
              <span>
                {new Date(p[i].start).toLocaleDateString()}
              </span>
              <strong>To</strong>:
              <span>
                {new Date(p[i].end).toLocaleDateString()}
              </span>
            </p>
            <p>{p[i].description}</p>
          </div>
          <hr />
        </section>
      );
    }


    return (
      <>{positions}</>
    );
  }
}