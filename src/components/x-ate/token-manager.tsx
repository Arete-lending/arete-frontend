import { Button, Card, Input, Table } from 'antd';
import { extractColumns } from './constant';

const TokenManager = () => {
  return (
    <div className="flex w-[1200px] gap-[60px]">
      <Card title="Forge xATE">
        <p>Forge your ATE into xATE</p>
        <Input className="w-[240px] mt-[20px] mb-[5px]" />
        <div className="flex justify-end items-center w-full gap-[5px] text-[12px]">
          Balance 0.00{' '}
          <Button size="small" style={{ fontSize: '12px' }}>
            MAX
          </Button>
        </div>
        <Button className="w-full mt-[5px]">Forge xATE</Button>
      </Card>
      <Card title="Extract ATE" className="flex-1">
        <div className="flex justify-between items-end pb-[30px]">
          Extract your ATE from xATE over a vesting period of 1 days(1 → 0.5 ratio) to 3 months (1 →
          1 ratio)
          <Button>Extract ATE</Button>
        </div>
        <Table columns={extractColumns} dataSource={[]} pagination={false} />
      </Card>
    </div>
  );
};

export default TokenManager;
