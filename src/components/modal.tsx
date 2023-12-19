import { Button, Modal } from 'antd';
import { useState } from 'react';

interface ActionModalProps {
  label: string;
}

const ActionModal = ({ label }: ActionModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Button onClick={showModal}>{label}</Button>
      <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        some modal
      </Modal>
    </>
  );
};

export default ActionModal;
