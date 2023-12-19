import axios from 'axios';
import { useAxios, addr } from './config';

interface ATEHeader {
  ATE: {
    balance: number;
    balanceD: string;
  };
  xATE: {
    balance: number;
    balanceD: string;
  };
}

export const getATEHeader = () => {
  return useAxios<ATEHeader>('/ate/header', true);
};

interface ATEVesting {
  xKZA: number;
  KZA: number;
  etime: string;
}

export const getATEVesting = () => {
  return useAxios<ATEVesting[]>('/ate/vesting', true);
};

export const onExtract = async (idx: number) => {
  const res = await axios.get(`/ate/action/extract?address=${addr}&index=${idx}`);
  // TODO: alert by res
  console.log(res);
};

export const onForge = async (balance: string) => {
  const res = await axios.get(`/ate/action/forge?address=${addr}&balance=${balance}`);
  // TODO: alert by res
  console.log(res);
};
