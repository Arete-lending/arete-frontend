import {
  getBorrowTable,
  getSupplyTable,
  getToBorrowTable,
  getToSupplyTable
} from '@/apis/dashboard';
import ActionModal from '../action-modal';

export const supplyColumns = [
  {
    title: 'Asset',
    dataIndex: 'asset',
    key: 'asset'
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    key: 'balance'
  },
  {
    title: 'APY',
    dataIndex: 'aPY',
    key: 'aPY'
  },
  {
    title: 'Collateral',
    dataIndex: 'collateral',
    key: 'collateral'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: () => <ActionModal label="Withdraw" endpoint="/dashboard/action/withdraw" />
  }
];

// TODO: action
export const getSupplyTableData = () => {
  const table = getSupplyTable();
  return table?.map((row, i) => ({
    key: i,
    asset: row.name,
    balance: row.balance,
    aPY: row.APY,
    collateral: row.COL,
    action: null
  }));
};

export const borrowColumns = [
  {
    title: 'Asset',
    dataIndex: 'asset',
    key: 'asset'
  },
  {
    title: 'Debt',
    dataIndex: 'debt',
    key: 'debt'
  },
  {
    title: 'APY',
    dataIndex: 'aPY',
    key: 'aPY'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: () => <ActionModal label="Repay" endpoint="/dashboard/action/repay" />
  }
];

// TODO: action
export const getBorrowTableData = () => {
  const table = getBorrowTable();
  return table?.map((row, i) => ({
    key: i,
    asset: row.asset,
    debt: row.DEBT,
    aPY: row.APY,
    action: null
  }));
};

export const toSupplyColumns = [
  {
    title: 'Asset',
    dataIndex: 'asset',
    key: 'asset'
  },
  {
    title: 'Wallet Balance',
    dataIndex: 'walletBalance',
    key: 'walletBalance'
  },
  {
    title: 'APY',
    dataIndex: 'aPY',
    key: 'aPY'
  },
  {
    title: 'Collateral Type',
    dataIndex: 'collateralType',
    key: 'collateralType'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: () => <ActionModal label="Supply" endpoint="/dashboard/action/supply" />
  }
];

// TODO: action
export const getToSupplyTableData = () => {
  const table = getToSupplyTable();
  return table?.map((row, i) => ({
    key: i,
    asset: row.asset,
    walletBalance: row.balance,
    aPY: row.APY,
    collateralType: row.ctype,
    action: null
  }));
};

export const toBorrowColumns = [
  {
    title: 'Asset',
    dataIndex: 'asset',
    key: 'asset'
  },
  {
    title: 'Available',
    dataIndex: 'available',
    key: 'available'
  },
  {
    title: 'APY',
    dataIndex: 'aPY',
    key: 'aPY'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: () => <ActionModal label="Borrow" endpoint="/dashboard/action/borrow" />
  }
];

// TODO: action
export const getToBorrowTableData = () => {
  const table = getToBorrowTable();
  return table?.map((row, i) => ({
    key: i,
    asset: row.asset,
    available: row.AV,
    aPY: row.APY,
    action: null
  }));
};
