import { getMarketTableContent } from '@/apis/market';

export const columns = [
  {
    title: 'Assets',
    dataIndex: 'assets',
    key: 'assets'
  },
  {
    title: 'Collateral Type',
    dataIndex: 'collateralType',
    key: 'collateralType'
  },
  {
    title: 'LTV',
    dataIndex: 'lTV',
    key: 'lTV'
  },
  {
    title: 'Supply APY',
    dataIndex: 'supplyAPY',
    key: 'supplyAPY'
  },
  {
    title: 'Total Supplied',
    dataIndex: 'totalSupplied',
    key: 'totalSupplied'
  },
  {
    title: 'Borrow APY',
    dataIndex: 'borrowAPY',
    key: 'borrowAPY'
  },
  {
    title: 'Total Borrowed',
    dataIndex: 'totalBorrowed',
    key: 'totalBorrowed'
  },
  {
    title: 'Available',
    dataIndex: 'available',
    key: 'available'
  }
];

// TODO: add cell renders
export const getMarketTableData = () => {
  const table = getMarketTableContent();
  return table?.map((row, i) => ({
    key: i,
    assets: row.name,
    collateralType: row.ctype,
    lTV: row.LTV,
    supplyAPY: row.sAPY,
    totalSupplied: row.TS,
    borrowAPY: row.bAPY,
    totalBorrowed: row.TB,
    available: row.AV
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
