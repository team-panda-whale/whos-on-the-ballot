import React, { useState } from 'react';
import VoterCard from './VoterCard.jsx';
import OfficialsContainer from './OfficialsContainer';
import ZipCodeSearch from './ZipCodeSearch';
import PhoneInput from './PhoneInput';

const Container = () => {
  const [officials, setOfficials] = useState([]);
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

  return (
    <div>
      <ZipCodeSearch setOfficials={setOfficials} />
      <PhoneInput />
      <VoterCard selected={selected} removeOfficial={removeOfficial} />
      {officials.length ? (
        <OfficialsContainer
          selectOfficial={selectOfficial}
          officials={officials}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Container;
