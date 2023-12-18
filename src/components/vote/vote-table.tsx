import { Button, Card, Table, Input } from 'antd';
import { getVoteTableData, voteColumns } from './constant';
import { useState } from 'react';

const { Search } = Input;

const VoteTable = ({ VPU }: { VPU: string }) => {
  const [market, setMarket] = useState('');
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
          <div className="flex justify-between items-center gap-[20px]">
            Vote Power Used: {VPU}
            <Button disabled>Cast Vote</Button>
          </div>
        </Card>
      </div>
      <Table columns={voteColumns} dataSource={getVoteTableData()} pagination={false} />
    </div>
  );
};

export default VoteTable;
