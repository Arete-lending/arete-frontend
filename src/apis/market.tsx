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

interface MarketTableRow {
  AV: string;
  AVC: string;
  LTV: string;
  TB: string;
  TBC: string;
  TS: string;
  TSC: string;
  bAPY: string;
  ctype: string;
  desc: string;
  name: string;
  sAPY: string;
  sFST: string;
  sSND: string;
  token: string;
}

export const getMarketTableContent = () => {
  const [data, setData] = useState<MarketTableRow[]>();
  useEffect(() => {
    axios.get('/market/content').then((res) => setData(res.data));
  }, []);
  return data;
};
