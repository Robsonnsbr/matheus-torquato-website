import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-blue h-fit w-fit text-white hover:text-red active:scale-90 rounded-md py-1 px-2 shadow-md ${className}`}
      {...props}
    />
  );
}

export default Button;
