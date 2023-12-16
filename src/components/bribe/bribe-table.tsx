import { Table } from 'antd';
import { bribeColumns, bribeData } from './constant';

const BribeTable = () => {
  return <Table columns={bribeColumns} dataSource={bribeData} pagination={false} />;
};

export default BribeTable;
