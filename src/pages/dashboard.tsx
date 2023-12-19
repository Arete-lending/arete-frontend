import { getDashboardHeader } from '@/apis/dashboard';
import DashboardTable from '@/components/dashboard/dashboard-table';

const Dashboard = () => {
  const dashboardHeader = getDashboardHeader();
  return (
    <div className="overflow-auto w-full flex flex-col items-center pb-[60px]">
      <div className="flex w-[1200px] gap-[60px] my-[60px]">
        <div>
          <div className="flex font-bold text-[48px] h-[60px] mb-[10px] items-end">
            {dashboardHeader?.Net}
          </div>
          <div className="text-[16px]">Net Worth</div>
        </div>
        <div>
          <div className="flex font-bold text-[36px] h-[60px] mb-[10px] items-end">
            {dashboardHeader?.nAPY}
          </div>
          <div className="text-[16px]">Net APY</div>
        </div>
        <div>
          <div className="flex font-bold text-[36px] h-[60px] mb-[10px] items-end">
            {dashboardHeader?.cLTV}
          </div>
          <div className="text-[16px]">Current LV</div>
        </div>
        <div>
          <div className="flex font-bold text-[36px] h-[60px] mb-[10px] items-end">
            {dashboardHeader?.HF}
          </div>
          <div className="text-[16px]">Health Factor</div>
        </div>
      </div>
      <DashboardTable />
    </div>
  );
};

export default Dashboard;
