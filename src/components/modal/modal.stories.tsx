import { useState } from "react";
import Modal from ".";
import { ModalProps } from ".";

export default {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
};

const Template = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export const Basic = {
  render:Template,
  args:{
    title:"Modal Title",
    children:"Modal Content",
    size:"medium",
    onClose:()=>{}
  } as ModalProps,
};
