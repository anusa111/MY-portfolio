import React from "react";

//interface...
interface IButtonProps {
  icon?: any;
  buttonStyle: React.CSSProperties;
  title?: any;
  link?: any;
  downloadtype?: any;
}

const GlobalButton = ({
  icon,
  buttonStyle,
  title,
  link,
  downloadtype,
}: IButtonProps) => {
  return (
    <a
      download={downloadtype}
      href={link}
      style={buttonStyle}
      className="flex items-center justify-center gap-[2px] w-fit px-[25px] py-[20px] "
    >
      <div>{title}</div>
      <div>{icon}</div>
    </a>
  );
};

export default GlobalButton;
