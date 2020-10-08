import React, { useState } from 'react';

import useOfficials from '../hooks/useOfficials';

const ZipCodeSearch = props => {
  const [zipCode, setZipCode] = useState('');

  function handleZipInputChange(e) {
    const { value } = event.target;
    setZipCode(value);
  }

  function handleSubmit() {
    event.preventDefault();
    console.log(fetchOfficials);
    fetchOfficials(apiKey, zipCode);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='zipCode'>Zip Code</label>
        <input
          value={zipCode}
          onChange={e => handleZipInputChange(e)}
          id='zidCode'
        />
      </div>
    </form>
  );
};

export default ZipCodeSearch;
