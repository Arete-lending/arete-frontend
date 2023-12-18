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

export const getVoteTable = () => {
  return useAxios('/vote/content', true);
};
