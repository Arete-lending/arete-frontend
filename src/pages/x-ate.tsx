import { tokenDescriptionItems } from '@/components/x-ate/constant';
import TokenManager from '@/components/x-ate/token-manager';
import { Button, Descriptions, Divider } from 'antd';

const XATE = () => {
  return (
    <div>
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
        <Button>Claim ATE+xATE</Button>
      </div>
      <TokenManager />
    </div>
  );
};

export default XATE;
