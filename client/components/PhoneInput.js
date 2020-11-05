import React, { useState } from 'react';
import axios from 'axios';

const PhoneInput = props => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const { selected } = props;

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

  function handlePhoneInputSubmit(e) {
    e.preventDefault();
    sendSMS(phoneNumber, selected);
    setPhoneNumber('');
    alert('Message sent! :)');
  }

  function handlePhoneInputChange(e) {
    const { value } = event.target;
    setPhoneNumber(value);
  }

  return (
    <form onSubmit={handlePhoneInputSubmit}>
      <div>
        <label htmlFor='phoneNumber'>Phone Number</label>
        <br />
        <input
          value={phoneNumber}
          onChange={handlePhoneInputChange}
          id='phoneNumber'
          type='tel'
        />
      </div>
      <button type='submit'>Send SMS</button>
    </form>
  );
};

export default PhoneInput;
