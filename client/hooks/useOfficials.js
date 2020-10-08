import { useQuery } from 'react-query';
import axios from 'axios';

const getOfficials = async zipCode => {
  const [officials, setOfficials] = useState([]);
  const apiKey = 'AIzaSyCLtsQE_ZZgnVpGOaCGFTH26EJ0QH2fPIM';
  const { data } = await axios
    .get(
      `https://www.googleapis.com/civicinfo/v2/representatives?key=${apiKey}&address=${zipCode}`
    )
    .then(res => res.data.officials);
  setOfficials(data);
  return result;
};

export default function useOfficials(zipCode) {
  return useQuery('officials', getOfficials);
}
