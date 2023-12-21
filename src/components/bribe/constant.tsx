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
    align: 'right' as const,
    render: (tv: string[]) => (
      <>
        <p>{tv[0]}</p>
        <p className="text-[12px] opacity-70">{tv[1]}</p>
      </>
    )
  },
  {
    title: 'Total Bribery',
    dataIndex: 'totalBribery',
    key: 'totalBribery',
    align: 'right' as const,
    render: (tb: string[]) => (
      <>
        <p>{tb[0]}</p>
        <p className="text-[12px] opacity-70">{tb[1]}</p>
      </>
    )
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

export const getBribeTableData = (deps: any[] = []) => {
  const table = getBribeTable(deps);
  return table?.map((row, i) => ({
    key: i,
    assets: row.asset,
    totalVotes: [row.TV, row.TVP],
    totalBribery: [row.TB, row.TBC],
    bribesAndInterest: row['B&I'],
    votingAPR: row.VAPR,
    action: row.asset
  }));
};
