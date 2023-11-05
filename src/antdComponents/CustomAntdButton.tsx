import { Button } from "antd";
import React from "react";

interface IBtnProps {
  onClick?: any;
  loadingBtn?: any;
  children: React.ReactNode;
  btnStyles?: React.CSSProperties;
}

const CustomAntdButton = ({
  onClick,
  loadingBtn,
  children,
  btnStyles,
}: IBtnProps) => {
  return (
    <Button
      loading={loadingBtn}
      onClick={onClick}
      size="large"
      htmlType="submit"
      style={btnStyles}
      className="lg:w-[340px] w-[280px] "
    >
      {children}
    </Button>
  );
};

export default CustomAntdButton;
