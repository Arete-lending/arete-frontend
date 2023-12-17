import { DescriptionsProps } from 'antd';

export const tokenDescriptionItems: DescriptionsProps['items'] = [
  {
    key: 'balance',
    label: 'Your balance',
    children: 0.0
  },
  {
    key: 'value',
    label: 'Value($)',
    children: 0.0
  }
];

export const extractColumns = [
  {
    title: 'xATE vesting',
    key: 'xVesting',
    dataIndex: 'xVesting'
  },
  {
    title: 'ATE output',
    key: 'output',
    dataIndex: 'output'
  },
  {
    title: 'Elapsed time',
    key: 'time',
    dataIndex: 'time'
  },
  {
    title: 'Actions',
    key: 'actions',
    dataIndex: 'actions'
  }
];
