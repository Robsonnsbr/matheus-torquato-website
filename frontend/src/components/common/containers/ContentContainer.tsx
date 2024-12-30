import React, { HTMLAttributes } from "react";

type IContainerProps = HTMLAttributes<HTMLDivElement>;

export default function ContentContainer({
  children,
  className,
  ...rest
}: IContainerProps) {
  return (
    <div
      {...rest}
      className={`flex w-full h-fit justify-start mx-auto p-4 sm:w-4/5 overflow-hidden container max-w-screen-xl ${className}`}
    >
      {children}
    </div>
  );
}
