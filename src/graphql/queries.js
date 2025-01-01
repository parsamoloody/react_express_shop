import { gql } from '@apollo/client';


export const GET_JEANS = gql`
   query Jeans {
    jeans {
      id
      name
    }
  }
`;

export const GET_DRESSES = gql`
 query Dresses {
    dresses {
      id
      name
    }
  }`
