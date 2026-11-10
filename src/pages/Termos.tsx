import React, { useEffect } from 'react';
import { Link } from '../lib/router';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
    <div className="text-gray-300 space-y-3 leading-relaxed">{children}</div>
  </section>
);

export const Termos = () => {
  useEffect(() => {
    document.title = 'Termos de Uso — Itan Tech';
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-blue-950 pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-white mb-2">Termos de Uso</h1>
        <p className="text-gray-500 mb-12">Última atualização: novembro de 2026</p>

        <Section title="1. Identificação">
          <p>
            Estes Termos de Uso regulam o acesso ao site itantech.com.br e a contratação dos
            serviços oferecidos por <strong>Itan Tech</strong>, razão social{' '}
            <strong>30.319.670 PEDRO ITAN ANDRADE</strong>, CNPJ 30.319.670/0001-36, com endereço
            em Rua Santo Amaro, 158, Apt 202 – Glória – Rio de Janeiro/RJ – CEP 22211-230,
            contato{' '}
            <a href="mailto:pedroitan@itantech.com.br" className="text-blue-400 hover:underline">
              pedroitan@itantech.com.br
            </a>{' '}
            e telefone +55 21 98841-9463.
          </p>
        </Section>

        <Section title="2. Serviços">
          <p>A Itan Tech oferece:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Consultoria, projeto e implementação de soluções audiovisuais e tecnologia para
              eventos;
            </li>
            <li>
              Plataforma de convites e confirmação de presença (RSVP) por WhatsApp, com envio de
              convites e lembretes, ingressos com QR code e check-in na portaria, destinada a
              organizadores de eventos, agências, cerimoniais e marcas.
            </li>
          </ul>
        </Section>

        <Section title="3. Responsabilidades do cliente na plataforma">
          <p>Ao contratar a plataforma de convites e RSVP, o cliente (organizador) declara que:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Possui base legal — em especial consentimento ou legítimo interesse, conforme a
              LGPD — para fornecer os dados dos convidados e enviar mensagens a eles;
            </li>
            <li>
              Não utilizará a plataforma para envio de spam, mensagens não solicitadas ou
              conteúdo ilegal, enganoso ou abusivo;
            </li>
            <li>
              Respeitará as políticas do WhatsApp Business Platform e da Meta Platforms,
              incluindo o uso de templates de mensagem aprovados;
            </li>
            <li>
              Responderá às solicitações de exclusão e opt-out dos convidados, incluindo as
              respostas "SAIR" recebidas pelo WhatsApp;
            </li>
            <li>
              É o controlador dos dados pessoais dos convidados, sendo a Itan Tech operadora
              desses dados nos termos da LGPD.
            </li>
          </ul>
        </Section>

        <Section title="4. Limitação de responsabilidade">
          <p>
            A Itan Tech envidará seus melhores esforços para manter a plataforma disponível, mas
            não garante funcionamento ininterrupto. Não nos responsabilizamos por:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Indisponibilidade, atraso ou falha na entrega de mensagens decorrente da WhatsApp
              Business Platform, da Meta Platforms ou de operadoras de telecomunicação;
            </li>
            <li>
              Uso indevido da plataforma pelo cliente ou por terceiros, incluindo o envio de
              mensagens sem base legal;
            </li>
            <li>Danos indiretos, lucros cessantes ou perda de dados causados por terceiros.</li>
          </ul>
        </Section>

        <Section title="5. Propriedade intelectual">
          <p>
            O conteúdo deste site, a marca Itan Tech e o software da plataforma são de titularidade
            da Itan Tech ou licenciados a ela, sendo vedada a reprodução sem autorização prévia.
          </p>
        </Section>

        <Section title="6. Privacidade">
          <p>
            O tratamento de dados pessoais é regido pela nossa{' '}
            <Link to="/privacidade" className="text-blue-400 hover:underline">
              Política de Privacidade
            </Link>
            , que integra estes Termos.
          </p>
        </Section>

        <Section title="7. Alterações e foro">
          <p>
            Estes Termos podem ser atualizados a qualquer momento, com vigência a partir da
            publicação nesta página. Fica eleito o foro da Comarca do Rio de Janeiro/RJ para dirimir
            eventuais controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.
          </p>
        </Section>
      </div>
    </main>
  );
};
