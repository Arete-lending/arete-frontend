import { useAxios } from './config';

interface VoteHeader {
  MR: string;
  TR: string;
  TVP: number;
  VPU: string;
}

export const getVoteHeader = () => {
  return useAxios<VoteHeader>('/vote/header', true);
};

interface VoteTableRow {
  asset: string;
  desc: string;
  token: string;
  TV: string;
  bribes: string;
  'B&I': string;
  MV: string;
  MVP: string;
  VAPR: string;
}

export const getVoteTable = () => {
  return useAxios<VoteTableRow[]>('/vote/content', true);
};
