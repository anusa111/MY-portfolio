import { Button } from "antd";
import { link } from "fs";
import Link from "next/link";
import React from "react";

interface IBtnProps {
  onClick?: any;
  loadingBtn?: any;
  children: React.ReactNode;
  btnStyles?: React.CSSProperties;
  link?: any;
}

const CustomAntdButton = ({
  onClick,
  loadingBtn,
  children,
  btnStyles,
  link,
}: IBtnProps) => {
  return (
    <Button
      loading={loadingBtn}
      onClick={onClick}
      size="large"
      htmlType="submit"
      style={btnStyles}
      className="lg:w-[332px] w-[280px] "
    >
      {children}
    </Button>
  );
};

export default CustomAntdButton;
