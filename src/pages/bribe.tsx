import BribeTable from '@/components/bribe/bribe-table';
import { Card } from 'antd';

const Bribe = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-[1200px] gap-[60px] my-[60px]">
        <div>
          <div className="font-bold text-[36px] my-[12px]">Bribe</div>
          <div>Bribers can deposit bribes to make a pool more attractive to voters.</div>
        </div>
        <Card>
          <p>Next Epoch: Epoch #0</p>
          <p>--/--/-- UTC</p>
          <p>Starting in: 0 Day 00:00:00</p>
        </Card>
      </div>
      <BribeTable />
    </div>
  );
};

export default Bribe;
