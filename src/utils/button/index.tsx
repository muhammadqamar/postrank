import React, { MouseEventHandler, ReactNode } from "react";

interface IndexProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  Icon?: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const Index: React.FC<IndexProps> = ({
  text,
  onClick,
  className,
  Icon,
  type,
  disabled,
}) => {
  return (
    <button
      className={`flex items-center md:py-[14px] xsm:py-[10px] md:px-5 xsm:px-4 bg-blue-100 rounded-full text-blue-700 ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {Icon && <span className="mr-2">{Icon}</span>}
      {text}
    </button>
  );
};

export default Index;
