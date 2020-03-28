import React, { Props } from 'react';
import ContactForm from '../components/ContactForm';
import { IContentfulApiClient, ContentfulAPIClient, ICvFields, ICvPositions } from '../api/contentful'

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
    }, () => {
      console.log(this.state);
    });
  }

  render() {

    // Printing CV

    return (
      <section>
        <h1>Homepage</h1>
        <p>Hello from the Homepage!</p>
        <ContactForm />
      </section>
    );
  }
}