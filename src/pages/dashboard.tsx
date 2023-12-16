import DashboardTable from '@/components/dashboard/dashboard-table';

const Dashboard = () => {
  return (
    <div>
      <div className="flex w-[1200px] gap-[60px] my-[60px]">
        <div>
          <div className="flex font-bold text-[48px] h-[60px] mb-[10px] items-end">$0.00</div>
          <div className="text-[16px]">Net Worth</div>
        </div>
        <div>
          <div className="flex font-bold text-[36px] h-[60px] mb-[10px] items-end">--</div>
          <div className="text-[16px]">Net APY</div>
        </div>
        <div>
          <div className="flex font-bold text-[36px] h-[60px] mb-[10px] items-end">--</div>
          <div className="text-[16px]">Current LV</div>
        </div>
        <div>
          <div className="flex font-bold text-[36px] h-[60px] mb-[10px] items-end">--</div>
          <div className="text-[16px]">Health Factor</div>
        </div>
      </div>
      <DashboardTable />
    </div>
  );
};

export default Dashboard;
