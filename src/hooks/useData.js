import { useQuery } from '@apollo/client';
import { GET_MAN } from '../graphql/queries';

export const useData = () => {
  const { loading, error, data } = useQuery(GET_MAN);

  if (loading) return { loading: true };
  if (error) return { error };

  // Access 'man' data after ensuring it's available
  const manData = data?.theMan?.[0]?.man?.[0] || null;

  return { data: manData };
};
