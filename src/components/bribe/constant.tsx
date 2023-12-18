import { getBribeTable } from '@/apis/bribe';
import { Button } from 'antd';

export const bribeColumns = [
  {
    title: 'Assets',
    dataIndex: 'assets',
    key: 'assets'
  },
  {
    title: 'Total Votes',
    dataIndex: 'totalVotes',
    key: 'totalVotes'
  },
  {
    title: 'Total Bribery',
    dataIndex: 'totalBribery',
    key: 'totalBribery'
  },
  {
    title: 'Bribes + Interest',
    dataIndex: 'bribesAndInterest',
    key: 'bribesAndInterest'
  },
  {
    title: 'Voting APR',
    dataIndex: 'votingAPR',
    key: 'votingAPR'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: () => <Button disabled>Bribe</Button>
  }
];

// TODO: implement action
export const getBribeTableData = () => {
  const table = getBribeTable();
  return table?.map((row, i) => ({
    key: i,
    assets: row.asset,
    totalVotes: row.TV,
    totalBribery: row.TB,
    bribesAndInterest: row['B&I'],
    votingAPR: row.VAPR,
    action: null
  }));
};
