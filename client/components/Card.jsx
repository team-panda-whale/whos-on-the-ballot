import React, { useState } from 'react';

const Card = props => {
  const { name } = props.official;
  return (
    <div className='card'>
      <span>{name}</span>
      <button onClick={() => props.selectOfficial(name)}> Add Official</button>
    </div>
  );
};

export default Card;
