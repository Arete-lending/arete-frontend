import { Table } from 'antd';
import { columns, data } from './constant';
import { getMarketHeader } from '@/apis/market';

// TODO: add cell render designs
const AssetTable = () => {
  console.log(getMarketHeader());
  return (
    <div className="w-[1200px]">
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default AssetTable;
