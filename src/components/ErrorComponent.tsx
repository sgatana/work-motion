import React from 'react';

interface Props {
  error: any
}

const  ErrorComponent: React.FC<Props> = ({ error }) => {
  return <div>{error}</div>;
}

export default ErrorComponent