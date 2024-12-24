import React, { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export default function ContainerSection({
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      id="container-section"
      className={`relative flex min-h-[43rem] 3xl:min-h-[54rem] bg-transparent w-full } ${
        className ? className : ""
      }`}
      {...props}
    >
      {children}
    </section>
  );
}
