import { getBribeTable } from '@/apis/bribe';
import ActionModal from '../action-modal';
import AssetLogo from '../asset-logo';

export const bribeColumns = [
  {
    title: 'Assets',
    dataIndex: 'assets',
    key: 'assets',
    align: 'center' as const,
    render: (asset: string) => <AssetLogo asset={asset} />
  },
  {
    title: 'Total Votes',
    dataIndex: 'totalVotes',
    key: 'totalVotes',
    align: 'right' as const
  },
  {
    title: 'Total Bribery',
    dataIndex: 'totalBribery',
    key: 'totalBribery',
    align: 'right' as const
  },
  {
    title: 'Bribes + Interest',
    dataIndex: 'bribesAndInterest',
    key: 'bribesAndInterest',
    align: 'right' as const
  },
  {
    title: 'Voting APR',
    dataIndex: 'votingAPR',
    key: 'votingAPR',
    align: 'right' as const
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    align: 'center' as const,
    render: (asset: string) => (
      <ActionModal label="Bribe" endpoint="/bribe/action/bribe" asset={asset} isVoteOrBribe />
    )
  }
];

export const getBribeTableData = () => {
  const table = getBribeTable();
  return table?.map((row, i) => ({
    key: i,
    assets: row.asset,
    totalVotes: row.TV,
    totalBribery: row.TB,
    bribesAndInterest: row['B&I'],
    votingAPR: row.VAPR,
    action: row.asset
  }));
};
