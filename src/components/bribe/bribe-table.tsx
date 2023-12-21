import { Table } from 'antd';
import { bribeColumns, getBribeTableData } from './constant';
import { useContext } from 'react';
import { FUContext } from '@/_app';

const BribeTable = () => {
  const { update } = useContext(FUContext);
  return (
    <div className="w-[1200px]">
      <Table columns={bribeColumns} dataSource={getBribeTableData([update])} pagination={false} />
    </div>
  );
};

export default BribeTable;
