import { useAxios } from './config';

interface DashboardHeader {
  Net: string;
  nAPY: string;
  cLTV: string;
  HF: string;
}

export const getDashboardHeader = () => {
  return useAxios<DashboardHeader>('/dashboard/header', true);
};

interface SupplyHeader {
  balance: string;
  APY: string;
  COL: string;
}

export const getSupplyHeader = () => {
  return useAxios<SupplyHeader>('/dashboard/header/supply', true);
};

interface BorrowHeader {
  balance: string;
  APY: string;
  BPU: string;
}

export const getBorrowHeader = () => {
  return useAxios<BorrowHeader>('/dashboard/header/borrow', true);
};
