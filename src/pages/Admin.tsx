import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { Header, Container, Segment, Loader } from 'semantic-ui-react';
import CvField from '../components/CvField';
import CvPosition from '../components/CvPosition';
import { IContentfulApiClient, ContentfulAPIClient, ICvFields, ICvPositions } from '../api/contentful'

interface Props extends RouteComponentProps { 
  authenticated: boolean
}

interface IAdminState {
  data: ICvFields
}

export default class Admin extends React.Component<Props, IAdminState> {
  
  cApi: IContentfulApiClient;

  constructor(props: Props) {
    super(props);
    this.cApi = new ContentfulAPIClient('itfg6eqes7cv', 'Y7uqry6UFhiAo0INwzoLTFHjCTesSYdF53hpoRaFWlc');
  }

  async componentDidMount() {
    const response = await this.cApi.getCv();
    let positions: Array<ICvPositions> = this.cApi.mapResponseToPositions(response.fields.positions);

    this.setState({
      data: {
        name: response.fields.name,
        surname: response.fields.surname,
        dob: response.fields.dob,
        email: response.fields.email,
        phone: response.fields.phone,
        positions: positions
      }
    });
  }

  render() {
    let { authenticated } = this.props.location.state as any || false;
    if (authenticated !== true) {
      return <Redirect to="/login" />
    }

    let cv = [];

    // Printing CV
    if (this.state === null) {
      cv.push(<Loader key="loader" active inline />);
    } else {
      cv.push(<Header as='h2'>Personal data</Header>)
      for (let [k, v] of Object.entries(this.state.data)) {
        if (k !== 'positions') {
          cv.push(<CvField edit={true} key={'cvf_' + k} cvFieldName={k} cvFieldValue={v} />)
        }
      }
      cv.push(<Header as='h2'>Career</Header>)
      for (let [k, v] of Object.entries(this.state.data)) {
        if (k === 'positions') {
          cv.push(<CvPosition edit={true} key={'cvp_' + k} cvPositionValue={v} />);
        }
      }
    }

    return (
      <Container>
        <Segment>
          <Header as="h1">Admin area</Header>
          <p>Welcome to the admin area for MyCV. Here you can add, modify and/or delete positions and personal data.</p>
          {cv}
        </Segment>
      </Container>
    );
  }
}