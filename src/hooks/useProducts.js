import { useQuery } from '@apollo/client';
import { GET_JEANS, GET_DRESSES, GET_SALE, GET_JACKETS, GET_ACCESSORIES } from '../graphql/queries';

export const useProducts = () => {
  const jeans = useQuery(GET_JEANS);
  const dresses = useQuery(GET_DRESSES);
  const sale = useQuery(GET_SALE);
  const jackets = useQuery(GET_JACKETS);
  const accessories = useQuery(GET_ACCESSORIES);

  return { jeans, dresses, sale, jackets, accessories };
};
