import React, { useState } from 'react';

const ZipCodeSearch = props => {
  const [zipCode, setZipCode] = useState('');

  const apiKey = 'AIzaSyCLtsQE_ZZgnVpGOaCGFTH26EJ0QH2fPIM';

  const { fetchOfficials } = props;

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
