import React, { Props } from 'react';
import ContactForm from '../components/ContactForm';
import CvField from '../components/CvField';
import CvPosition from '../components/CvPosition';
import { IContentfulApiClient, ContentfulAPIClient, ICvFields, ICvPositions } from '../api/contentful'
import { Container, Header, Segment, Loader } from 'semantic-ui-react'

interface IHomeState {
  data: ICvFields
}

export default class Home extends React.Component<Props<any>, IHomeState> {

  cApi: IContentfulApiClient;

  constructor(props: Props<any>) {
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
    let cv = [];

    // Printing CV
    if (this.state === null) {
      cv.push(<Loader key="loader" active inline />);
    } else {
      cv.push(<Header as='h2'>Personal data</Header>)
      for (let [k, v] of Object.entries(this.state.data)) {
        if (k !== 'positions') {
          cv.push(<CvField key={'cvf_' + k} cvFieldName={k} cvFieldValue={v} />)
        }
      }
      cv.push(<Header as='h2'>Career</Header>)
      for (let [k, v] of Object.entries(this.state.data)) {
        if (k === 'positions') {
          cv.push(<CvPosition key={'cvp_' + k} cvPositionValue={v} />);
        }
      }
    }

    return (
      <>
        <Container>
          <Segment>
            <Header as='h1'>Welcome to MyCv</Header>
            <p>Welcome to MyCv. In this page you can find my curriculum vitae and send me an email if you want to hire me!</p>
            {cv}
          </Segment>
        </Container>
        <ContactForm />
      </>
    );
  }
}