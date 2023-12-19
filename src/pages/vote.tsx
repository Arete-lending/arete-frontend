import { DOCS_URL } from '@/apis/config';
import { getVoteHeader } from '@/apis/vote';
import EpochCard from '@/components/epoch-card';
import VoteTable from '@/components/vote/vote-table';

const Vote = () => {
  const voteHeader = getVoteHeader();
  return (
    <div className="overflow-auto w-full flex flex-col items-center">
      <div className="flex justify-between items-center w-[1200px] gap-[60px] my-[60px]">
        <div>
          <div className="flex  gap-[60px] my-[60px]">
            <div>
              <div className="flex font-bold text-[48px] h-[60px] mb-[10px] items-end">
                {voteHeader?.TVP}
              </div>
              <div className="text-[16px]">My total voting power</div>
            </div>
            <div>
              <div className="flex font-bold text-[32px] h-[60px] mb-[10px] items-end">
                {voteHeader?.TR}
              </div>
              <div className="text-[16px]">Total rewards accured this epoch</div>
            </div>
            <div>
              <div className="flex font-bold text-[32px] h-[60px] mb-[10px] items-end">
                {voteHeader?.MR}
              </div>
              <div className="text-[16px]">My rewards this epoch</div>
            </div>
          </div>
          <div>
            Voters earn all bribes and interest split from the asset voted during the epoch.
            Unchanged votes carry over into the next epoch. Read{' '}
            <a href={DOCS_URL} className="text-tprimary" rel="noreferrer" target="_blank">
              our docs
            </a>{' '}
            for more details.
          </div>
        </div>
        <EpochCard />
      </div>
      <VoteTable VPU={voteHeader?.VPU ?? ''} />
    </div>
  );
};

export default Vote;
