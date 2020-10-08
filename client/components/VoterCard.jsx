import React, { useState } from 'react';

const VoterCard = props => {
  return (
    <div>
      <h1>Voter Card</h1>
      <ul>
        {props.selected.map(official => (
          <li key={official}>
            {official}
            <button onClick={() => props.removeOfficial(official)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VoterCard;
