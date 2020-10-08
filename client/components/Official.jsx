import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const Official = props => {
  const { name, party, photoUrl, urls, emails } = props.official;
  console.log(props.official);
  return (
    <div className='card'>
      <h3 style={{ marginRight: '1rem' }}>{name}</h3>
      <div
        className={
          props.official.party === 'Republican Party'
            ? 'red-photo-border'
            : 'blue-photo-border'
        }
      ></div>
      <img
        className='photo'
        src={
          props.official.photoUrl
            ? props.official.photoUrl
            : 'https://images.wisegeek.com/american-flag.jpg'
        }
      />
      <ul>
        <li>{party}</li>
        <li>
          <a href={urls}>Website</a>
        </li>
      </ul>
      <Button variant='contained' onClick={() => props.selectOfficial(name)}>
        Select
      </Button>
    </div>
  );
};

export default Official;
