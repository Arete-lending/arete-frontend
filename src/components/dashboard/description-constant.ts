import { DescriptionsProps } from 'antd';

export const supplyItems: DescriptionsProps['items'] = [
  {
    key: 'Balance',
    label: 'Balance',
    children: '$0.00'
  },
  {
    key: 'APY',
    label: 'APY',
    children: '--'
  },
  {
    key: 'Collateral',
    label: 'Collateral',
    children: '$0.00'
  }
];

export const borrowItems: DescriptionsProps['items'] = [
  {
    key: 'Balance',
    label: 'Balance',
    children: '$0.00'
  },
  {
    key: 'APY',
    label: 'APY',
    children: '--'
  },
  {
    key: 'BorrowPowerUsed',
    label: 'Borrow Power Used',
    children: '--'
  }
];
