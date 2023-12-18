import axios from 'axios';
import { useEffect, useState } from 'react';
import { addr } from './config';

interface VoteHeader {
  MR: string;
  TR: string;
  TVP: number;
  VPU: string;
}

export const getVoteHeader = () => {
  const [data, setData] = useState<VoteHeader>();
  const req = async () => {
    const res = await axios.get(`/vote/header?address=${addr}`);
    setData(res.data);
  };
  useEffect(() => {
    req();
  }, []);
  return data;
};
