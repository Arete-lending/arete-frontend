import { Table } from 'antd';
import { columns, data } from './constant';

// TODO: add sorters and cell render designs
const AssetTable = () => {
  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default AssetTable;
