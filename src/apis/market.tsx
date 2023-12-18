import axios from 'axios';
import { useEffect, useState } from 'react';

interface MarketHeader {
  TA: string;
  TB: string;
  TVL: string;
}

export const getMarketHeader = () => {
  const [data, setData] = useState<MarketHeader>();
  useEffect(() => {
    axios.get('/market/header').then((res) => setData(res.data));
  }, []);
  return data;
};
