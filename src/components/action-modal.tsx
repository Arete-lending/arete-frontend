import { FUContext } from '@/_app';
import { addr } from '@/apis/config';
import { Button, Input, Modal, message } from 'antd';
import axios from 'axios';
import { useContext, useState } from 'react';

interface ActionModalProps {
  label: string;
  endpoint: string;
  asset: string;
  isVoteOrBribe?: boolean;
}

const ActionModal = ({ label, endpoint, asset, isVoteOrBribe }: ActionModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [balance, setBalance] = useState('');
  const { forceUpdate } = useContext(FUContext);
  const showModal = () => {
    setIsOpen(true);
  };
  const handleOk = async () => {
    const res = await axios.get(
      `${endpoint}?address=${addr}&asset=${asset.toLowerCase()}&balance=${balance}`
    );
    if (res.status === 200) {
      message.success('Action successful');
      forceUpdate();
    } else message.error('Action failed');
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Button onClick={showModal}>{label}</Button>
      <Modal title={label} open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          addonAfter={isVoteOrBribe ? 'xATE' : asset}
          placeholder="0.00"
          className="my-[30px] text-right"
        />
      </Modal>
    </>
  );
};

export default ActionModal;
