import React, { useState } from 'react';
import { useQuery } from 'react-query';
const axios = require('axios');
import Card from './Card.jsx';
import VoterCard from './VoterCard.jsx';
// import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const API_KEY = 'AIzaSyCLtsQE_ZZgnVpGOaCGFTH26EJ0QH2fPIM';

const ContainerCopy = () => {
  const [selected, setSelected] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');

  function selectOfficial(name) {
    if (!selected.includes(name)) setSelected([...selected, name]);
  }

  function removeOfficial(official) {
    // Below returns empty array instead array without official argument
    // const newList = selected.filter(selectedOfficial => {
    //   selectedOfficial !== official;
    // });
    const newList = selected.filter(
      selectedOfficial => selectedOfficial !== official
    );
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
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper>George</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>xs=6</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>xs=6</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>xs=3</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ContainerCopy;
