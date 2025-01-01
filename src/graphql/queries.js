import { gql } from '@apollo/client';

export const GET_JEANS = gql`query Jeans { jeans { id name } }`;
export const GET_DRESSES = gql`query Dresses { dresses { id name } }`;
export const GET_SALE = gql`query Sale { sale { id item } }`;
export const GET_JACKETS = gql`query Jackets { jackets { id name } }`;
export const GET_ACCESSORIES = gql`
  query Accessories {
    accessories {
      id
      name
      brand
      price
      color
    }
  }
`;
