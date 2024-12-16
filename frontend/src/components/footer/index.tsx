import React, { HTMLAttributes } from "react";
import ContainerMedium from "../common/container/ContainerMedium";

type FooterProps = HTMLAttributes<HTMLDivElement>;

const Footer = ({ ...rest }: FooterProps) => {
  return (
    <footer
      {...rest}
      className="footer bg-deepIndigoBlue text-whiteSnow bg-mid-dark"
    >
      <section className="pt-16 pb-8 bg-mid-dark border-t-8">
        <ContainerMedium id="container-top-footer">
          <div className=" flex justify-between text-white">
            <div className="space-y-2 w-[2000px]">
              <h2 className="font-semibold text-lg">Sobre Nós</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-accent">
                    Quem somos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    Nossa missão
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    Carreiras
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold text-lg">Serviços</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-accent">
                    Consultoria
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    Suporte Técnico
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    Treinamentos
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold text-lg">Redes Sociais</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-accent">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold text-lg">Contato</h2>
              <ul>
                <li>
                  <a
                    href="mailto:contato@empresa.com"
                    className="hover:text-accent"
                  >
                    contato@empresa.com
                  </a>
                </li>
                <li>
                  <a href="tel:+5511999999999" className="hover:text-accent">
                    (11) 99999-9999
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Linha de separação */}
          <div className="border-t border-t-lightApricotSalmon mt-8"></div>

          {/* Copyright */}
          <div className="mt-6 text-center text-white text-sm">
            <p>&copy; 2024 Empresa Exemplo. Todos os direitos reservados.</p>
          </div>
        </ContainerMedium>
      </section>
    </footer>
  );
};

export default Footer;
