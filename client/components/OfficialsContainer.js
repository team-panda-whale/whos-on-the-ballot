import React from 'react';
import { useQuery } from 'react-query';
import Official from './Official.jsx';
import Grid from '@material-ui/core/Grid';

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
      <Grid container spacing={2}>
        {officials.map(official => {
          return (
            <Grid item md={4}>
              <Official
                key={official.name}
                official={official}
                selectOfficial={selectOfficial}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default OfficialsContainer;
