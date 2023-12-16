import VoteTable from '@/components/vote/vote-table';
import { Card } from 'antd';

const Vote = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-[1200px] gap-[60px] my-[60px]">
        <div>
          <div className="flex  gap-[60px] my-[60px]">
            <div>
              <div className="flex font-bold text-[48px] h-[60px] mb-[10px] items-end">0.00</div>
              <div className="text-[16px]">My total voting power</div>
            </div>
            <div>
              <div className="flex font-bold text-[32px] h-[60px] mb-[10px] items-end">$0.00</div>
              <div className="text-[16px]">Total rewards accured this epoch</div>
            </div>
            <div>
              <div className="flex font-bold text-[32px] h-[60px] mb-[10px] items-end">$0.00</div>
              <div className="text-[16px]">My rewards this epoch</div>
            </div>
          </div>
          <div>
            Voters earn all bribes and interest split from the asset voted during the epoch.
            Unchanged votes carry over into the next epoch.
          </div>
        </div>
        <Card>
          <p>Next Epoch: Epoch #0</p>
          <p>--/--/-- UTC</p>
          <p>Starting in: 0 Day 00:00:00</p>
        </Card>
      </div>
      <VoteTable />
    </div>
  );
};

export default Vote;
