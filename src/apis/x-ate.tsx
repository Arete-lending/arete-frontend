import { useAxios } from './config';

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
