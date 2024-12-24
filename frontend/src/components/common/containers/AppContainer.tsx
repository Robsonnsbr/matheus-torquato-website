import React, { ReactNode, HTMLAttributes } from "react";

interface IAppContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const AppContainer = ({ children, ...rest }: IAppContainerProps) => {
  return (
    <div
      {...rest}
      className="flex flex-col container overflow-y-hidden"
      id="app-container"
    >
      {children}
    </div>
  );
};

export default AppContainer;
