import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VoterCard from './VoterCard.jsx';
import OfficialsContainer from './OfficialsContainer';
import ZipCodeSearch from './ZipCodeSearch';
import PhoneInput from './PhoneInput';

const Container = () => {
  const [officials, setOfficials] = useState([]);
  const [selected, setSelected] = useState([]);

  // useEffect(() => {
  //   console.log('officials loaded');
  //   console.log({ officials });
  // }, officials);

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
  async function fetchOfficials(apiKey, zipCode) {
    const result = await axios
      .get(
        `https://www.googleapis.com/civicinfo/v2/representatives?key=${apiKey}&address=${zipCode}`
      )
      .then(res => res.data.officials);
    setOfficials(result);
    return result;
  }

  return (
    <div>
      <ZipCodeSearch fetchOfficials={fetchOfficials} />
      <PhoneInput />
      <VoterCard selected={selected} removeOfficial={removeOfficial} />
      <OfficialsContainer
        selectOfficial={selectOfficial}
        officials={officials}
      />
    </div>
  );
};

export default Container;
