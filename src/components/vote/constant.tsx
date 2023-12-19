import { getVoteTable } from '@/apis/vote';
import ActionModal from '../action-modal';

export const voteColumns = [
  {
    title: 'Assets',
    key: 'assets',
    dataIndex: 'assets',
    align: 'center'
  },
  {
    title: 'Total Votes',
    key: 'totalVotes',
    dataIndex: 'totalVotes',
    align: 'right'
  },
  {
    title: 'Bribes',
    key: 'bribes',
    dataIndex: 'bribes',
    align: 'right'
  },
  {
    title: 'Bribes + Interest',
    key: 'bribesAndInterest',
    dataIndex: 'bribesAndInterest',
    align: 'right'
  },
  {
    title: 'Voting APR',
    key: 'votingAPR',
    dataIndex: 'votingAPR',
    align: 'right'
  },
  {
    title: 'My Votes',
    key: 'myVotes',
    dataIndex: 'myVotes',
    align: 'right'
  },
  {
    title: 'My Votes %',
    key: 'myVotesRatio',
    dataIndex: 'myVotesRatio',
    align: 'right'
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    render: (asset: string) => (
      <ActionModal label="Cast Vote" endpoint="/vote/action/vote" asset={asset} isVoteOrBribe />
    ),
    align: 'center'
  }
];

export const getVoteTableData = () => {
  const table = getVoteTable();
  return table?.map((row, i) => ({
    key: i,
    assets: row.asset,
    totalVotes: row.TV,
    bribes: row.bribes,
    bribesAndInterest: row['B&I'],
    votingAPR: row.VAPR,
    myVotes: row.MV,
    myVotesRatio: row.MVP,
    action: row.asset
  }));
};
