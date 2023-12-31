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

export const extractColumns = (forceUpdate: () => void) => [
  {
    title: 'xATE vesting',
    key: 'xVesting',
    dataIndex: 'xVesting',
    align: 'right' as const
  },
  {
    title: 'ATE output',
    key: 'output',
    dataIndex: 'output',
    align: 'right' as const
  },
  {
    title: 'Elapsed time',
    key: 'time',
    dataIndex: 'time',
    align: 'right' as const
  },
  {
    title: 'Actions',
    key: 'actions',
    dataIndex: 'actions',
    render: (idx: number) => (
      <Button onClick={() => onExtract(idx, forceUpdate)}>Extract ATE</Button>
    ),
    align: 'center' as const
  }
];

export const getATEVestingTable = (deps: any[] = []) => {
  const table = getATEVesting(deps);
  return table?.map((row, i) => ({
    key: i,
    xVesting: row.xKZA,
    output: row.KZA,
    time: row.etime,
    actions: i
  }));
};
