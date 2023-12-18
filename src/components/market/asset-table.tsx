import { Table } from 'antd';
import { columns, getMarketTableData } from './constant';

const AssetTable = () => {
  return (
    <div className="w-[1200px]">
      <Table columns={columns} dataSource={getMarketTableData()} pagination={false} />
    </div>
  );
};

export default AssetTable;
