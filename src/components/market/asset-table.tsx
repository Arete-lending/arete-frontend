import { Table } from 'antd';
import { columns, data } from './constant';

// TODO: add cell render designs
// TODO: add links to detail page
const AssetTable = () => {
  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default AssetTable;
