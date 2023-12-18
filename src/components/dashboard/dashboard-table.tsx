import { Descriptions, Table } from 'antd';
import { borrowItems, supplyItems } from './description-constant';
import {
  borrowColumns,
  getBorrowTableData,
  getSupplyTableData,
  getToBorrowTableData,
  getToSupplyTableData,
  supplyColumns,
  toBorrowColumns,
  toSupplyColumns
} from './table-constant';

const DashboardTable = () => {
  return (
    <div className="w-[1200px] py-[20px] flex flex-wrap">
      <div className="flex-[50%] pr-4 pb-4">
        <Descriptions title="My Supplies" layout="vertical" items={supplyItems()} />
        <Table columns={supplyColumns} dataSource={getSupplyTableData()} pagination={false} />
      </div>
      <div className="flex-[50%] pl-4 pb-4">
        <Descriptions title="My Borrows" layout="vertical" items={borrowItems()} />
        <Table columns={borrowColumns} dataSource={getBorrowTableData()} pagination={false} />
      </div>
      <div className="flex-[50%] pr-4">
        <Descriptions title="Assets to Supply" layout="vertical" items={[]} />
        <Table columns={toSupplyColumns} dataSource={getToSupplyTableData()} pagination={false} />
      </div>
      <div className="flex-[50%] pl-4">
        <Descriptions title="Assets to Borrow" layout="vertical" items={[]} />
        <Table columns={toBorrowColumns} dataSource={getToBorrowTableData()} pagination={false} />
      </div>
    </div>
  );
};

export default DashboardTable;
