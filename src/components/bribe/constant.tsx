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

export const bribeData = [
  {
    assets: 'HAY',
    totalVotes: 0.0,
    totalBribery: 0.0,
    bribesAndInterest: 0.0,
    votingAPR: 0.0,
    action: null
  }
];
