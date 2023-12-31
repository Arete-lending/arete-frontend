import { Button, Card, Input, Table } from 'antd';
import { extractColumns, getATEVestingTable } from './constant';
import { useContext, useState } from 'react';
import { onForge } from '@/apis/x-ate';
import { FUContext } from '@/_app';

const TokenManager = () => {
  const [balance, setBalance] = useState('');
  const { update, forceUpdate } = useContext(FUContext);
  return (
    <div className="flex w-[1200px] gap-[60px]">
      <Card title="Forge xATE">
        <p>Forge your ATE into xATE</p>
        <Input
          className="w-[240px] mt-[20px] mb-[20px] text-right"
          addonAfter="ATE"
          placeholder="0.00"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
        {/* <div className="flex justify-end items-center w-full gap-[5px] text-[12px]">
          Balance 0.00{' '}
          <Button size="small" style={{ fontSize: '12px' }}>
            MAX
          </Button>
        </div> */}
        <div />
        <Button
          className="w-[240px] mt-[5px]"
          onClick={() => {
            onForge(balance).then(forceUpdate);
          }}>
          Forge xATE
        </Button>
      </Card>
      <Card title="Extract ATE" className="flex-1">
        <div className="flex justify-between items-end pb-[30px]">
          Extract your ATE from xATE over a vesting period of 1 days(1 → 0.5 ratio) to 3 months (1 →
          1 ratio)
        </div>
        <Table
          columns={extractColumns(forceUpdate)}
          dataSource={getATEVestingTable([update])}
          pagination={false}
        />
      </Card>
    </div>
  );
};

export default TokenManager;
