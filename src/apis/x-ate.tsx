import axios from 'axios';
import { useEffect, useState } from 'react';
import { addr } from './config';

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
  const [data, setData] = useState<ATEHeader>();
  const req = async () => {
    const res = await axios.get(`/ate/header?address=${addr}`);
    setData(res.data);
  };
  useEffect(() => {
    req();
  }, []);
  return data;
};

interface ATEVesting {
  xKZA: number;
  KZA: number;
  etime: string;
}

export const getATEVesting = () => {
  const [data, setData] = useState<ATEVesting[]>();
  const req = async () => {
    const res = await axios.get(`/ate/vesting?address=${addr}`);
    setData(res.data);
  };
  useEffect(() => {
    req();
  }, []);
  return data;
};
