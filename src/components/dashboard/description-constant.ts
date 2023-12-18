import { getBorrowHeader, getSupplyHeader } from '@/apis/dashboard';

export const supplyItems = () => {
  const supplyHeader = getSupplyHeader();
  return [
    {
      key: 'Balance',
      label: 'Balance',
      children: supplyHeader?.balance
    },
    {
      key: 'APY',
      label: 'APY',
      children: supplyHeader?.APY
    },
    {
      key: 'Collateral',
      label: 'Collateral',
      children: supplyHeader?.COL
    }
  ];
};

export const borrowItems = () => {
  const borrowHeader = getBorrowHeader();
  return [
    {
      key: 'Balance',
      label: 'Balance',
      children: borrowHeader?.balance
    },
    {
      key: 'APY',
      label: 'APY',
      children: borrowHeader?.APY
    },
    {
      key: 'BorrowPowerUsed',
      label: 'Borrow Power Used',
      children: borrowHeader?.BPU
    }
  ];
};
