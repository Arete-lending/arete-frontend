import axios from 'axios';
import { useEffect, useState } from 'react';

interface MarketHeader {
  TA: string;
  TB: string;
  TVL: string;
}

export const getMarketHeader = () => {
  const [data, setData] = useState<MarketHeader>();
  const req = async () => {
    const res = await axios.get('/market/header');
    setData(res.data);
  };
  useEffect(() => {
    req();
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
  const req = async () => {
    const res = await axios.get('/market/content');
    setData(res.data);
  };
  useEffect(() => {
    req();
  }, []);
  return data;
};
