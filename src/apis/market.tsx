import { useAxios } from './config';

interface MarketHeader {
  TA: string;
  TB: string;
  TVL: string;
}

export const getMarketHeader = () => {
  return useAxios<MarketHeader>('/market/header');
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
  return useAxios<MarketTableRow[]>('/market/content');
};
