import { Button, Card, Table, Input } from 'antd';
import { voteColumns } from './constant';
import { useState } from 'react';

const { Search } = Input;

const VoteTable = () => {
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
            Vote Power Used: 0%
            <Button disabled>Cast Vote</Button>
          </div>
        </Card>
      </div>
      <Table columns={voteColumns} dataSource={[]} pagination={false} />
    </div>
  );
};

export default VoteTable;
