import * as Contentful from 'contentful';

export interface IContentfulApiClient {
  client: Contentful.ContentfulClientApi;
  getCv(): Promise<any>;
  mapResponseToPositions(positionsFromResponse: any): Array<ICvPositions>
}

export interface ICvFields {
  name: string;
  surname: string;
  dob: Date;
  phone: string;
  email: string;
  positions: ICvPositions[];
}

export interface ICvPositions {
  company: string;
  role: string;
  description: string;
  start: Date;
  end: Date;
}

export class ContentfulAPIClient implements IContentfulApiClient {

  client: Contentful.ContentfulClientApi;

  constructor(space: string, accessToken: string) {
    this.client = Contentful.createClient({
      space: space,
      accessToken: accessToken
    })
  }

  // We'll get the CV from Contentful
  getCv = async () => {
    try {
      const cv = await this.client.getEntry('2DMIcTZmJvEUe2FFpEQZaT');
      return cv;  
    } catch (error) {
      return {};
    }
  }

  // Utility to map response job positions to output job positions
  mapResponseToPositions(positionsFromResponse: any): Array<ICvPositions> {
    
    let positions: Array<ICvPositions> = [];
    
    positionsFromResponse.forEach((p: any) => {
      positions.push(
        {
          start: p.fields.start,
          end: p.fields.end,
          company: p.fields.company,
          role: p.fields.role,
          description: p.fields.description
        }
      )
    });

    return positions;
  } 
}