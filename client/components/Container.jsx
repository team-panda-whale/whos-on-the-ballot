import React, { useState } from 'react';
import { useQuery } from 'react-query';
const axios = require('axios');
import Card from './Card.jsx';
import VoterCard from './VoterCard.jsx';

const API_KEY = 'AIzaSyCLtsQE_ZZgnVpGOaCGFTH26EJ0QH2fPIM';

const Container = () => {
  const [selected, setSelected] = useState([]);

  function selectOfficial(name) {
    setSelected([...selected, name]);
  }

  function removeOfficial(official) {
    const newList = selected.filter(selectedOfficial => {
      selectedOfficial !== official;
    });
    setSelected(newList);
    console.log(`${official} removed`);
  }

  // Call to Google Civics API
  const fetchOfficials = async () => {
    const result = await axios
      .get(
        `https://www.googleapis.com/civicinfo/v2/representatives?key=${API_KEY}&address=75078`
      )
      .then(res => res.data.officials);
    return result;
  };

  const { isLoading, error, data } = useQuery('officials', fetchOfficials, {
    refetchOnWindowFocus: false,
  });

  return isLoading ? (
    '...Loading'
  ) : error ? (
    error.message
  ) : (
    <div>
      <div>
        <VoterCard selected={selected} removeOfficial={removeOfficial} />
      </div>
      <div className='container'>
        {data.map(official => {
          return (
            <Card
              key={official.name}
              official={official}
              selectOfficial={selectOfficial}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Container;
