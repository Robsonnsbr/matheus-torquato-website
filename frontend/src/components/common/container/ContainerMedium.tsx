import React, { HTMLAttributes } from "react";

type IContainerProps = HTMLAttributes<HTMLDivElement>;

const ContainerMedium = ({ children, className, ...rest }: IContainerProps) => {
  return (
    <div
      {...rest}
      className={`container w-full h-10 mx-auto px-2 sm:w-4/5 bg-fuchsia-600 ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerMedium;
