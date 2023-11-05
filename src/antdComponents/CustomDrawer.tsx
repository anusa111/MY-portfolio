import React, { useState } from "react";

//antd imports
import { Button, Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";

//interface..
interface IDrawerProps {
  onClose?: any;
  open?: any;
  children?: React.ReactNode;
}

const CustomDrawer = ({ onClose, open, children }: IDrawerProps) => {
  const customCloseIcon = (
    <CloseOutlined
      style={{
        color: "var(--black-color)",
        backgroundColor: "var(--primary-color)",
      }}
      className="p-2 rounded-full"
    />
  );
  return (
    <Drawer
      placement="right"
      onClose={onClose}
      open={open}
      className="bg-black"
      styles={{
        header: { background: "#141c27", color: "red" },
        body: {
          backgroundColor: "#09101A",
        },
      }}
      closeIcon={customCloseIcon}
    >
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
