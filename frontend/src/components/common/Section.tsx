import React, { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export default function Section({
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      className={`relative flex min-h-[43rem] bg-white w-full } ${
        className ? className : ""
      }`}
      {...props}
    >
      {children}
    </section>
  );
}
