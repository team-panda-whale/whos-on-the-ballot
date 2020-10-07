import React, { useState } from 'react';
import { useQuery } from 'react-query';
const axios = require('axios');
import Card from './Card.jsx';
import VoterCard from './VoterCard.jsx';

const API_KEY = 'AIzaSyCLtsQE_ZZgnVpGOaCGFTH26EJ0QH2fPIM';

const Container = () => {
  const [selected, setSelected] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');

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
  async function fetchOfficials() {
    const result = await axios
      .get(
        `https://www.googleapis.com/civicinfo/v2/representatives?key=${API_KEY}&address=75078`
      )
      .then(res => res.data.officials);
    return result;
  }

  // Call to Twilio API
  async function sendSMS(
    phoneNumber,
    messageBody = 'hello, this is the default message'
  ) {
    const config = {
      method: 'post',
      url: `/send-sms`,
      data: {
        phoneNumber,
        messageBody,
      },
    };
    const result = await axios(config).then(res => res.data);
    return result;
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendSMS(phoneNumber, selected);
    setPhoneNumber('');
    alert('Message sent! :)');
  }

  function handleChange(e) {
    const { value } = event.target;
    setPhoneNumber(value);
  }

  const { isLoading, error, data } = useQuery('officials', fetchOfficials, {
    refetchOnWindowFocus: false,
  });

  return isLoading ? (
    '...Loading'
  ) : error ? (
    error.message
  ) : (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='phoneNumber'>Phone Number</label>
          <br />
          <input
            value={phoneNumber}
            onChange={handleChange}
            id='phoneNumber'
            type='tel'
          />
        </div>
        <button type='submit'>Send SMS</button>
      </form>
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
