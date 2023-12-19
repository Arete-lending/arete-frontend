import { getMarketTableContent } from '@/apis/market';
import AssetLogo from '../asset-logo';

export const columns = [
  {
    title: 'Assets',
    dataIndex: 'assets',
    key: 'assets',
    align: 'center' as const,
    render: (asset: string) => <AssetLogo asset={asset} />
  },
  {
    title: 'Collateral Type',
    dataIndex: 'collateralType',
    key: 'collateralType',
    align: 'right' as const
  },
  {
    title: 'LTV',
    dataIndex: 'lTV',
    key: 'lTV',
    align: 'right' as const
  },
  {
    title: 'Supply APY',
    dataIndex: 'supplyAPY',
    key: 'supplyAPY',
    align: 'right' as const
  },
  {
    title: 'Total Supplied',
    dataIndex: 'totalSupplied',
    key: 'totalSupplied',
    align: 'right' as const,
    render: (ts: string[]) => (
      <>
        <p>{ts[0]}</p>
        <p className="text-[12px] opacity-70">{ts[1]}</p>
      </>
    )
  },
  {
    title: 'Borrow APY',
    dataIndex: 'borrowAPY',
    key: 'borrowAPY',
    align: 'right' as const
  },
  {
    title: 'Total Borrowed',
    dataIndex: 'totalBorrowed',
    key: 'totalBorrowed',
    align: 'right' as const,
    render: (tb: string[]) => (
      <>
        <p>{tb[0]}</p>
        <p className="text-[12px] opacity-70">{tb[1]}</p>
      </>
    )
  },
  {
    title: 'Available',
    dataIndex: 'available',
    key: 'available',
    align: 'right' as const,
    render: (ta: string[]) => (
      <>
        <p>{ta[0]}</p>
        <p className="text-[12px] opacity-70">{ta[1]}</p>
      </>
    )
  }
];

export const getMarketTableData = () => {
  const table = getMarketTableContent();
  return table?.map((row, i) => ({
    key: i,
    assets: row.name,
    collateralType: row.ctype,
    lTV: row.LTV,
    supplyAPY: row.sAPY,
    totalSupplied: [row.TS, row.TSC],
    borrowAPY: row.bAPY,
    totalBorrowed: [row.TB, row.TBC],
    available: [row.AV, row.AVC]
  }));
};

export const data = [
  {
    assets: 'BTC',
    collateralType: 'Open',
    lTV: 70,
    supplyAPY: 29.36,
    totalSupplied: 6.75,
    borrowAPY: 1.72,
    totalBorrowed: 1.29,
    available: 5.38
  }
];
