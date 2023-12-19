import { getVoteTable } from '@/apis/vote';
import ActionModal from '../action-modal';
import AssetLogo from '../asset-logo';

export const voteColumns = [
  {
    title: 'Assets',
    key: 'assets',
    dataIndex: 'assets',
    align: 'center' as const,
    render: (asset: string) => <AssetLogo asset={asset} />
  },
  {
    title: 'Total Votes',
    key: 'totalVotes',
    dataIndex: 'totalVotes',
    align: 'right' as const
  },
  {
    title: 'Bribes',
    key: 'bribes',
    dataIndex: 'bribes',
    align: 'right' as const
  },
  {
    title: 'Bribes + Interest',
    key: 'bribesAndInterest',
    dataIndex: 'bribesAndInterest',
    align: 'right' as const
  },
  {
    title: 'Voting APR',
    key: 'votingAPR',
    dataIndex: 'votingAPR',
    align: 'right' as const
  },
  {
    title: 'My Votes',
    key: 'myVotes',
    dataIndex: 'myVotes',
    align: 'right' as const
  },
  {
    title: 'My Votes %',
    key: 'myVotesRatio',
    dataIndex: 'myVotesRatio',
    align: 'right' as const
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    render: (asset: string) => (
      <ActionModal label="Cast Vote" endpoint="/vote/action/vote" asset={asset} isVoteOrBribe />
    ),
    align: 'center' as const
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
