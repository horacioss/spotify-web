import axios from 'axios';
import { ArtistProps } from '../types';

const TOKEN = 'BQA4TFRzGrb5M2q0SWVt1NSzUIKQPi-yNy3x4e0PcUPXqPuX1NQorigxT857c5lNGAS7nSDdzaZp1v4uPIZoyBT8gqPL-jrami0hTBhKhd6wlNobF6mdVaPMPBj3WzNrIK8hdWwnYJZtWLpUDZXEq5QfZZ7qfdyc6E_Zb6mmFTKwUnyXjioOoSR-SWAkhUXUK-x9nHJgw1cfE5vFB9lzE-_851EUy9f92gQQ2PvytZ5Pvdz_IB9Ds_lccBjfqze4hevvwREIkECN7mH_nsvX2LvHlhZeYWrHO7l18OxRWbc';

export const getArtistData = async () => {
  const id = '0TnOYISbd1XYRBk9myaseg';
  const {data} = await axios.get<ArtistProps>(`https://api.spotify.com/v1/artists/${id}`, {
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${TOKEN}`,
    }
  });
  return data;
}