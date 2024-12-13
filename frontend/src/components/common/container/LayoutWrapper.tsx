import React, { ReactNode, HTMLAttributes } from "react";

interface ILayoutWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const LayoutWrapper = ({ children, ...rest }: ILayoutWrapperProps) => {
  return (
    <div
      {...rest}
      className="relative bg-dark w-full max-w-screen-2xl overflow-hidden"
    >
      {children}
    </div>
  );
};

export default LayoutWrapper;
