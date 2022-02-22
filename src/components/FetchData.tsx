import React from 'react';
import { useFetchData } from '../hooks/useFetchData';
import ErrorComponent from './ErrorComponent';
import LoaderComponent from './LoaderComponent';

interface Props {
  children: any;
  action: any;
  refresh: Boolean,
}
const FetchData: React.FC<Props> = ({ action, children, refresh }) => {
  const [loading, data, error] = useFetchData(action, refresh);
  if (loading) return <LoaderComponent />;
  if (error) return <ErrorComponent error={error} />;
  if (!data) return null;

  return children(data);
};
export default FetchData;
