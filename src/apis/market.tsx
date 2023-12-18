import axios from 'axios';
import { useState } from 'react';

export const getMarketHeader = () => {
  const [data, setData] = useState(null);
  axios.get('/market/header').then((res) => setData(res.data));
  return data;
};
