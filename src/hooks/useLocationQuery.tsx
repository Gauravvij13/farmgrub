import { useLocation } from 'react-router-dom';
import { urlQueryToObj } from 'utils/buildQuery';

export const useLocationQuery = () => {
  const { search } = useLocation();
  return urlQueryToObj(search);
};

export const useLocationQueryValue = (key: string) => {
  return useLocationQuery()[key];
};
