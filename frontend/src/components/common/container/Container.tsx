import React, { HTMLAttributes } from "react";

type IContainerProps = HTMLAttributes<HTMLDivElement>;

export default function Container({
  children,
  className,
  ...rest
}: IContainerProps) {
  return (
    <div
      {...rest}
      className={`flex w-full h-fit justify-start mx-auto sm:w-4/5 overflow-hidden  ${className}`}
    >
      {children}
    </div>
  );
}
