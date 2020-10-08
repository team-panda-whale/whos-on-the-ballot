import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const Official = props => {
  const { name } = props.official;
  return (
    <div className='card'>
      <span style={{ marginRight: '1rem' }}>{name}</span>
      <Button variant='contained' onClick={() => props.selectOfficial(name)}>
        Select
      </Button>
    </div>
  );
};

export default Official;
