import { tokenDescriptionItems } from '@/components/x-ate/constant';
import TokenManager from '@/components/x-ate/token-manager';
import { Descriptions, Divider } from 'antd';

const XATE = () => {
  return (
    <div className="overflow-auto w-full flex flex-col items-center">
      <div className="flex w-[1200px] items-center py-[60px]">
        <Descriptions
          title={<p className="font-bold text-[32px]">xATE</p>}
          layout="vertical"
          items={tokenDescriptionItems}
        />
        <Divider type="vertical" />
        <Descriptions
          title={<p className="font-bold text-[32px]">ATE</p>}
          layout="vertical"
          items={tokenDescriptionItems}
        />
        <Divider type="vertical" />
      </div>
      <TokenManager />
    </div>
  );
};

export default XATE;
