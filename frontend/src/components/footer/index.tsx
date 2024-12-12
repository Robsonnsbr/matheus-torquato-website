import React, { HTMLAttributes } from "react";
import ContainerMedium from "../common/container/ContainerMedium";

type FooterProps = HTMLAttributes<HTMLDivElement>;

const Footer = ({ ...rest }: FooterProps) => {
  return (
    <footer
      {...rest}
      className="global-height-footer bg-deepIndigoBlue text-whiteSnow"
    >
      <section className="pt-16 pb-8  bg-mid-dark border-t-8 border-t-lightApricotSalmon border-b border-b-mediumBlueGray">
        <ContainerMedium id="container-top-footer">
          <h1 className="flex items-center justify-center font-extrabold text-4xl">
            FOOTER
          </h1>
        </ContainerMedium>
      </section>
    </footer>
  );
};

export default Footer;
