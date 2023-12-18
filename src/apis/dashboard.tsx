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

interface SupplyTableRow {
  APY: string;
  COL: string;
  balance: string;
  ctype: string;
  desc: string;
  name: string;
  token: string;
}

export const getSupplyTable = () => {
  return useAxios<SupplyTableRow[]>('/dashboard/supply', true);
};

interface BorrowTableRow {
  APY: string;
  DEBT: string;
  asset: string;
  ctype: string;
  desc: string;
  token: string;
}

export const getBorrowTable = () => {
  return useAxios<BorrowTableRow[]>('/dashboard/borrow', true);
};

interface ToSupplyTableRow {
  APY: string;
  asset: string;
  balance: string;
  ctype: string;
  desc: string;
  token: string;
}

export const getToSupplyTable = () => {
  return useAxios<ToSupplyTableRow[]>('/dashboard/asset/supply', true);
};

interface ToBorrowTableRow {
  APY: string;
  AV: string;
  asset: string;
  ctype: string;
  desc: string;
  token: string;
}

export const getToBorrowTable = () => {
  return useAxios<ToBorrowTableRow[]>('/dashboard/asset/borrow', true);
};
