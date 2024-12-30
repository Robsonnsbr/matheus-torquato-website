import React, { HTMLAttributes } from "react";
import Container from "@components/common/containers/ContentContainer";
import ContainerSection from "@components/common/containers/SectionContainer";

type FooterProps = HTMLAttributes<HTMLDivElement>;

const Footer = ({ ...rest }: FooterProps) => {
  return (
    <footer {...rest} className="text-whiteSnow">
      <ContainerSection
        id="footer-section"
        className="relative flex !min-h-fit bg-blue w-full"
      >
        <Container className="flex flex-col gap-4 py-12">
          <div className="flex flex-wrap gap-6 justify-center items-center text-white w-full">
            <div className="space-y-10 flex-1 min-w-[200px] max-w-[300px] text-center">
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

            <div className="space-y-10 flex-1 min-w-[200px] max-w-[300px] text-center">
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

            <div className="space-y-10 flex-1 min-w-[200px] max-w-[300px] text-center">
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

            <div className="space-y-10 flex-1 min-w-[200px] max-w-[300px] text-center">
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
          {/* Copyright */}
          <div className="mt-6 text-center text-white text-sm">
            <p>&copy; 2024 Empresa Exemplo. Todos os direitos reservados.</p>
          </div>
        </Container>
      </ContainerSection>
    </footer>
  );
};

export default Footer;
