//another smoke test
import React from 'react';
import ReactDOM from 'react-dom';

import VoterCard from '../client/components/VoterCard';

const official = ['bigG', 'littleG'];

it('renders without crashing', () => {
  // Create a DOM element to render the component into
  const div = document.createElement('div');

  // Render the component
  // If something is wrong it will fail/crash here
  ReactDOM.render(<VoterCard selected={official} />, div);

  // Clean up

  ReactDOM.unmountComponentAtNode(div);
});
