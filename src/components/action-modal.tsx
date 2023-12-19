import { addr } from '@/apis/config';
import { Button, Input, Modal } from 'antd';
import axios from 'axios';
import { useState } from 'react';

interface ActionModalProps {
  label: string;
  endpoint: string;
  asset?: string;
}

const ActionModal = ({ label, endpoint, asset = 'DAI' }: ActionModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [balance, setBalance] = useState('');
  const showModal = () => {
    setIsOpen(true);
  };
  const handleOk = async () => {
    const res = await axios.get(
      `${endpoint}?address=${addr}&asset=${asset.toLowerCase()}&balance=${balance}`
    );
    // TODO: alert by res
    console.log(res);
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
          addonAfter={asset}
          placeholder="0.00"
          className="my-[30px] text-right"
        />
      </Modal>
    </>
  );
};

export default ActionModal;
