import Link from "next/link";
import React from "react";

//interface...
interface IButtonProps {
  icon?: any;
  buttonStyle: React.CSSProperties;
  title?: any;
  link?: any;
}

const GlobalButton = ({ icon, buttonStyle, title, link }: IButtonProps) => {
  return (
    <Link
      href={link}
      style={buttonStyle}
      className="flex items-center justify-center gap-[2px] w-fit px-[25px] py-[20px] "
    >
      <div>{title}</div>
      <div>{icon}</div>
    </Link>
  );
};

export default GlobalButton;
