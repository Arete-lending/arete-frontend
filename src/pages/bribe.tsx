import BribeTable from '@/components/bribe/bribe-table';
import EpochCard from '@/components/epoch-card';

const Bribe = () => {
  return (
    <div className="overflow-auto w-full flex flex-col items-center">
      <div className="flex justify-between items-center w-[1200px] gap-[60px] my-[60px]">
        <div>
          <div className="font-bold text-[36px] my-[12px]">Bribe</div>
          <div>Bribers can deposit bribes to make a pool more attractive to voters.</div>
        </div>
        <EpochCard />
      </div>
      <BribeTable />
    </div>
  );
};

export default Bribe;
