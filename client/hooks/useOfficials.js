import { useQuery } from 'react-query';
import axios from 'axios';

async function fetchOfficials(apiKey, zipCode) {
  const apiKey = 'AIzaSyCLtsQE_ZZgnVpGOaCGFTH26EJ0QH2fPIM';

  const result = await axios
    .get(
      `https://www.googleapis.com/civicinfo/v2/representatives?key=${apiKey}&address=${zipCode}`
    )
    .then(res => res.data.officials);
  return result;
}

const getOfficials = async () => {
  const { data } = await useQuery('officials', fetchOfficials, {
    refetchOnWindowFocus: false,
  });
};

export default function useOfficials() {
  return useQuery('officials', getOfficials);
}
