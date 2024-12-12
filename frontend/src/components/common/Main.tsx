import React from "react";

type IMainProps = React.HTMLAttributes<HTMLDivElement>;

const Main = ({ children, className, ...props }: IMainProps) => {
  return (
    <main
      className={`global-height-main pt-0 flex w-full flex-col items-center  bg-white ${className}`}
      id="main"
      {...props}
    >
      {children}
    </main>
  );
};

export default Main;
