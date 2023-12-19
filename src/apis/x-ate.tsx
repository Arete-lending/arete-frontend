import axios from 'axios';
import { useAxios, addr } from './config';
import { message } from 'antd';

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
  if (res.status === 200) message.success('Extract successful');
  else message.error('Extract error');
};

export const onForge = async (balance: string) => {
  const res = await axios.get(`/ate/action/forge?address=${addr}&balance=${balance}`);
  if (res.status === 200) message.success('Forge successful');
  else message.error('Forge error');
};
