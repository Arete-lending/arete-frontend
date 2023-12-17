import { Table } from 'antd';
import { columns, data } from './constant';

// TODO: add cell render designs
// TODO: add links to detail page
const AssetTable = () => {
  return (
    <div className="w-[1200px]">
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default AssetTable;
