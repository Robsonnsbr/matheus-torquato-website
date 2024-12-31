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
        <Container className="flex flex-col gap-12">
          <div className="flex flex-wrap gap-6 justify-center items-center text-white pt-4 w-full">
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

            <div className="space-y-10 flex-1  min-w-[200px] max-w-[300px] text-center">
              <h2 className="font-semibold text-lg self-end">Contato</h2>
              <ul>
                <li>
                  <a
                    href="mailto:financialsiq@gmail.com"
                    className="hover:text-accent"
                  >
                    financialsiq@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+554199539-8000" className="hover:text-accent">
                    (41) 99539-8000
                  </a>
                </li>
                <li>
                  <a href="tel:+554199539-8000" className="hover:text-accent">
                    (41) 99539-8000
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col my-2 gap-2 text-center text-white text-sm">
            <p>
              &copy;Copyright 2024{" "}
              <strong className="text-red">IQ Financials.</strong> Todos os
              direitos reservados.
            </p>
            <p className="text-center text-white ">
              Este site é protegido pelo reCAPTCHA e está sujeito à{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Política de Privacidade
              </a>{" "}
              e aos{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Termos de Serviço
              </a>{" "}
              do Google.
            </p>
          </div>
        </Container>
      </ContainerSection>
    </footer>
  );
};

export default Footer;
