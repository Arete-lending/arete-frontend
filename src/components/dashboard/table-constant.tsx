import {
  getBorrowTable,
  getSupplyTable,
  getToBorrowTable,
  getToSupplyTable
} from '@/apis/dashboard';
import ActionModal from '../action-modal';
import AssetLogo from '../asset-logo';

export const supplyColumns = [
  {
    title: 'Asset',
    dataIndex: 'asset',
    key: 'asset',
    align: 'center',
    render: (asset: string) => <AssetLogo asset={asset} />
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    key: 'balance',
    align: 'right'
  },
  {
    title: 'APY',
    dataIndex: 'aPY',
    key: 'aPY',
    align: 'right'
  },
  {
    title: 'Collateral',
    dataIndex: 'collateral',
    key: 'collateral',
    align: 'right'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (asset: string) => (
      <ActionModal label="Withdraw" endpoint="/dashboard/action/withdraw" asset={asset} />
    ),
    align: 'center'
  }
];

export const getSupplyTableData = () => {
  const table = getSupplyTable();
  return table?.map((row, i) => ({
    key: i,
    asset: row.name,
    balance: row.balance,
    aPY: row.APY,
    collateral: row.COL,
    action: row.name
  }));
};

export const borrowColumns = [
  {
    title: 'Asset',
    dataIndex: 'asset',
    key: 'asset',
    align: 'center',
    render: (asset: string) => <AssetLogo asset={asset} />
  },
  {
    title: 'Debt',
    dataIndex: 'debt',
    key: 'debt',
    align: 'right'
  },
  {
    title: 'APY',
    dataIndex: 'aPY',
    key: 'aPY',
    align: 'right'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (asset: string) => (
      <ActionModal label="Repay" endpoint="/dashboard/action/repay" asset={asset} />
    ),
    align: 'center'
  }
];

export const getBorrowTableData = () => {
  const table = getBorrowTable();
  return table?.map((row, i) => ({
    key: i,
    asset: row.asset,
    debt: row.DEBT,
    aPY: row.APY,
    action: row.asset
  }));
};

export const toSupplyColumns = [
  {
    title: 'Asset',
    dataIndex: 'asset',
    key: 'asset',
    align: 'center',
    render: (asset: string) => <AssetLogo asset={asset} />
  },
  {
    title: 'Wallet Balance',
    dataIndex: 'walletBalance',
    key: 'walletBalance',
    align: 'right'
  },
  {
    title: 'APY',
    dataIndex: 'aPY',
    key: 'aPY',
    align: 'right'
  },
  {
    title: 'Collateral Type',
    dataIndex: 'collateralType',
    key: 'collateralType',
    align: 'right'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (asset: string) => (
      <ActionModal label="Supply" endpoint="/dashboard/action/supply" asset={asset} />
    ),
    align: 'center'
  }
];

export const getToSupplyTableData = () => {
  const table = getToSupplyTable();
  return table?.map((row, i) => ({
    key: i,
    asset: row.asset,
    walletBalance: row.balance,
    aPY: row.APY,
    collateralType: row.ctype,
    action: row.asset
  }));
};

export const toBorrowColumns = [
  {
    title: 'Asset',
    dataIndex: 'asset',
    key: 'asset',
    align: 'center',
    render: (asset: string) => <AssetLogo asset={asset} />
  },
  {
    title: 'Available',
    dataIndex: 'available',
    key: 'available',
    align: 'right'
  },
  {
    title: 'APY',
    dataIndex: 'aPY',
    key: 'aPY',
    align: 'right'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (asset: string) => (
      <ActionModal label="Borrow" endpoint="/dashboard/action/borrow" asset={asset} />
    ),
    align: 'center'
  }
];

export const getToBorrowTableData = () => {
  const table = getToBorrowTable();
  return table?.map((row, i) => ({
    key: i,
    asset: row.asset,
    available: row.AV,
    aPY: row.APY,
    action: row.asset
  }));
};
