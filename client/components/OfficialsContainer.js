import React from 'react';
import { useQuery } from 'react-query';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Official from './Official.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

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
      <Grid container spacing={1}>
        {officials.map(official => {
          return (
            <Grid item md={3}>
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
