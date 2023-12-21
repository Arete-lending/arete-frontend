import { Card, Table, Input } from 'antd';
import { getVoteTableData, voteColumns } from './constant';
import { useContext, useState } from 'react';
import { FUContext } from '@/_app';

const { Search } = Input;

const VoteTable = ({ VPU }: { VPU: string }) => {
  const [market, setMarket] = useState('');
  const { update } = useContext(FUContext);
  return (
    <div className="w-[1200px]">
      <div className="flex justify-between items-center my-[20px]">
        <Search
          className="w-[320px]"
          placeholder="Search for a market"
          value={market}
          onChange={(e) => setMarket(e.target.value)}
        />
        <Card>
          <div className="flex justify-between items-center gap-[20px]">Vote Power Used: {VPU}</div>
        </Card>
      </div>
      <Table columns={voteColumns} dataSource={getVoteTableData([update])} pagination={false} />
    </div>
  );
};

export default VoteTable;
