import React, { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  text: string;
  className?: string;
  children?: ReactNode;
  style?: object;
}

const Button: React.FC<NavLinkProps> = ({
  href,
  text,
  className,
  children,
  style
}) => {
  return (
    <button
      style={style}
      className={`focus:outline-none uppercase font-medium cursor-pointer ${className}`}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
