import { getATEHeader, getATEVesting } from '@/apis/x-ate';
import { Button } from 'antd';
import { onExtract } from './../../apis/x-ate';

export const getATEDescriptionItems = () => {
  const aTEHeader = getATEHeader();
  return {
    xATE: [
      {
        key: 'balance',
        label: 'Your balance',
        children: aTEHeader?.xATE.balance
      },
      {
        key: 'value',
        label: 'Value($)',
        children: aTEHeader?.xATE.balanceD
      }
    ],
    ATE: [
      {
        key: 'balance',
        label: 'Your balance',
        children: aTEHeader?.ATE.balance
      },
      {
        key: 'value',
        label: 'Value($)',
        children: aTEHeader?.ATE.balanceD
      }
    ]
  };
};

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
    dataIndex: 'actions',
    render: (idx: number) => <Button onClick={() => onExtract(idx)}>Extract ATE</Button>
  }
];

export const getATEVestingTable = () => {
  const table = getATEVesting();
  return table?.map((row, i) => ({
    key: i,
    xVesting: row.xKZA,
    output: row.KZA,
    time: row.etime,
    actions: i
  }));
};
