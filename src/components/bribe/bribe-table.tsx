import { Table } from 'antd';
import { bribeColumns, getBribeTableData } from './constant';

const BribeTable = () => {
  return (
    <div className="w-[1200px]">
      <Table columns={bribeColumns} dataSource={getBribeTableData()} pagination={false} />
    </div>
  );
};

export default BribeTable;
