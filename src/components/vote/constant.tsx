import { getVoteTable } from '@/apis/vote';
import ActionModal from '../action-modal';

export const voteColumns = [
  {
    title: 'Assets',
    key: 'assets',
    dataIndex: 'assets'
  },
  {
    title: 'Total Votes',
    key: 'totalVotes',
    dataIndex: 'totalVotes'
  },
  {
    title: 'Bribes',
    key: 'bribes',
    dataIndex: 'bribes'
  },
  {
    title: 'Bribes + Interest',
    key: 'bribesAndInterest',
    dataIndex: 'bribesAndInterest'
  },
  {
    title: 'Voting APR',
    key: 'votingAPR',
    dataIndex: 'votingAPR'
  },
  {
    title: 'My Votes',
    key: 'myVotes',
    dataIndex: 'myVotes'
  },
  {
    title: 'My Votes %',
    key: 'myVotesRatio',
    dataIndex: 'myVotesRatio'
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    render: (asset: string) => (
      <ActionModal label="Cast Vote" endpoint="/vote/action/vote" asset={asset} isVoteOrBribe />
    )
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
