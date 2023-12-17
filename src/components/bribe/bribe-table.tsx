import { Table } from 'antd';
import { bribeColumns, bribeData } from './constant';

const BribeTable = () => {
  return (
    <div className="w-[1200px]">
      <Table columns={bribeColumns} dataSource={bribeData} pagination={false} />
    </div>
  );
};

export default BribeTable;
