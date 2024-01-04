"use client";

import { customButtonProps } from "@/constants/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon
}: customButtonProps) => {
  return (
    <button
    disabled={false}
      className={`custom-btn ${containerStyles} `}
      onClick={handleClick}
      type={btnType||"button"}
    >
      <span className={`flex-1`}>{title} </span>
      {rightIcon ? ( <Image width={20} height={20} className="absolute  right-[8px]" src={rightIcon} alt="right arrow"/>):""}
    </button>
  );
};

export default CustomButton;
