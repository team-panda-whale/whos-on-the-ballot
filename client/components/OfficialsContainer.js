import React from 'react';
import { useQuery } from 'react-query';

import Official from './Official.jsx';

const OfficialsContainer = props => {
  const { officials, selectOfficial } = props;

  const { isLoading, error, data } = useQuery(
    'officials',
    () => {
      console.log('Using Query');
      return officials;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className='container'>
      {officials.map(official => {
        return (
          <Official
            key={official.name}
            official={official}
            selectOfficial={selectOfficial}
          />
        );
      })}
    </div>
  );
};

export default OfficialsContainer;
