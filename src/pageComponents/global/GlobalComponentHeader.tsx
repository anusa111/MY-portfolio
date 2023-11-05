import React from "react";

//interface...
interface IHeaderProps {
  small_title: any;
  main_title: any;
  headerStyles?: React.CSSProperties;
}

const GlobalComponentHeader = ({
  small_title,
  main_title,
  headerStyles,
}: IHeaderProps) => {
  return (
    <div>
      <div className="flex flex-col gap-[10px] " style={headerStyles}>
        <div
          className="text-[20px]"
          style={{
            color: "var(--primary-color)",
          }}
        >
          {small_title}
        </div>
        <div className="lg:text-[48px] text-[25px] font-semibold ">
          {main_title}
        </div>
      </div>
    </div>
  );
};

export default GlobalComponentHeader;
