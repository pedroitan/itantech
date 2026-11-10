import React from 'react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
    <div className="text-gray-300 space-y-3 leading-relaxed">{children}</div>
  </section>
);

export const Privacidade = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-blue-950 pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-white mb-2">Política de Privacidade</h1>
        <p className="text-gray-500 mb-12">Última atualização: novembro de 2026</p>

        <Section title="1. Controlador dos dados">
          <p>
            Esta Política de Privacidade é aplicada por <strong>Itan Tech</strong>, razão social{' '}
            <strong>30.319.670 PEDRO ITAN ANDRADE</strong>, CNPJ 30.319.670/0001-36, com endereço
            em Rua Santo Amaro, 158, Apt 202 – Glória – Rio de Janeiro/RJ – CEP 22211-230.
          </p>
          <p>
            Encarregado pelo tratamento de dados pessoais (DPO): Pedro Itan Andrade —{' '}
            <a href="mailto:pedroitan@itantech.com.br" className="text-blue-400 hover:underline">
              pedroitan@itantech.com.br
            </a>
            .
          </p>
        </Section>

        <Section title="2. Dados que coletamos">
          <p>
            <strong>a) Visitantes do site e formulário de contato:</strong> nome, e-mail, telefone
            e o conteúdo da mensagem, quando você os fornece voluntariamente pelo formulário de
            contato, e-mail ou telefone.
          </p>
          <p>
            <strong>b) Plataforma de convites e confirmação de presença:</strong> nome,
            telefone/WhatsApp, e-mail (opcional), categoria do convite, acompanhantes, restrições
            alimentares e registros de check-in dos convidados. Esses dados são fornecidos pelos
            organizadores do evento (nossos clientes). Nesse contexto, a Itan Tech atua como{' '}
            <strong>operadora</strong> dos dados pessoais, tratando-os em nome do organizador,
            que é o <strong>controlador</strong>.
          </p>
        </Section>

        <Section title="3. Finalidades do tratamento">
          <ul className="list-disc pl-6 space-y-2">
            <li>Responder a solicitações de contato e orçamentos;</li>
            <li>Enviar convites, lembretes e ingressos aos convidados por WhatsApp;</li>
            <li>Registrar confirmações de presença (RSVP);</li>
            <li>Emitir ingressos com QR code e realizar o controle de acesso (check-in) no evento;</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>
        </Section>

        <Section title="4. Compartilhamento de dados">
          <p>Compartilhamos dados pessoais apenas com:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Meta Platforms, Inc. (WhatsApp Business Platform)</strong>, para a entrega
              das mensagens de convite, lembrete e ingresso aos convidados;
            </li>
            <li>
              <strong>Provedores de infraestrutura</strong> (hospedagem e banco de dados),
              necessários à operação da plataforma;
            </li>
            <li>Autoridades públicas, quando exigido por lei ou ordem judicial.</li>
          </ul>
          <p>Não vendemos nem alugamos dados pessoais.</p>
        </Section>

        <Section title="5. Opt-out de mensagens">
          <p>
            O convidado pode interromper o recebimento de mensagens de um evento a qualquer
            momento respondendo <strong>"SAIR"</strong> à mensagem recebida no WhatsApp. O
            descadastro é processado e o número deixa de receber novas mensagens daquele evento.
          </p>
        </Section>

        <Section title="6. Retenção dos dados">
          <p>
            Os dados de convidados de um evento são mantidos por até <strong>12 meses</strong>{' '}
            após a realização do evento; depois desse prazo, são excluídos ou anonimizados, salvo
            quando a conservação for exigida por lei. Dados enviados pelo formulário de contato
            são mantidos enquanto durar a relação comercial e pelo prazo necessário ao
            cumprimento de obrigações legais.
          </p>
        </Section>

        <Section title="7. Direitos do titular (LGPD)">
          <p>
            Nos termos do art. 18 da Lei nº 13.709/2018 (LGPD), você pode solicitar, a qualquer
            momento e gratuitamente:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Confirmação da existência de tratamento dos seus dados;</li>
            <li>Acesso aos seus dados pessoais;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
            <li>Portabilidade dos dados a outro fornecedor, quando aplicável;</li>
            <li>Eliminação dos dados tratados com base no consentimento;</li>
            <li>Informação sobre com quem seus dados foram compartilhados;</li>
            <li>Revogação do consentimento e oposição ao tratamento.</li>
          </ul>
          <p>
            Para exercer seus direitos, escreva para{' '}
            <a href="mailto:pedroitan@itantech.com.br" className="text-blue-400 hover:underline">
              pedroitan@itantech.com.br
            </a>
            . Responderemos em até 15 dias. Você também pode apresentar reclamação à Autoridade
            Nacional de Proteção de Dados (ANPD).
          </p>
          <p>
            Quando a Itan Tech atuar como operadora (dados de convidados de eventos), sua
            solicitação poderá ser encaminhada ao organizador do evento, que é o controlador dos
            dados.
          </p>
        </Section>

        <section id="exclusao-de-dados" className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white mb-4">8. Exclusão de dados</h2>
          <div className="text-gray-300 space-y-3 leading-relaxed">
            <p>
              Para pedir a exclusão dos seus dados pessoais (seja como contato comercial ou como
              convidado de um evento), envie um e-mail para{' '}
              <a href="mailto:pedroitan@itantech.com.br" className="text-blue-400 hover:underline">
                pedroitan@itantech.com.br
              </a>{' '}
              com o assunto <strong>"Exclusão de dados"</strong>, informando o número de telefone
              (WhatsApp) e o e-mail utilizados.
            </p>
            <p>
              Confirmaremos o recebimento e concluiremos a exclusão em até <strong>15 dias</strong>,
              salvo quando a conservação dos dados for exigida por lei ou necessária à defesa de
              direitos em processo.
            </p>
            <p>
              Você também pode responder <strong>"SAIR"</strong> a qualquer mensagem recebida no
              WhatsApp para deixar de receber comunicações do evento correspondente.
            </p>
          </div>
        </section>

        <Section title="9. Cookies">
          <p>
            Este site não utiliza cookies de rastreamento ou ferramentas de analytics de
            terceiros. Caso isso mude, esta política será atualizada.
          </p>
        </Section>

        <Section title="10. Segurança e alterações">
          <p>
            Adotamos medidas técnicas e organizacionais adequadas para proteger os dados
            pessoais. Esta política pode ser atualizada periodicamente; a versão vigente estará
            sempre disponível nesta página, com a data da última atualização.
          </p>
        </Section>
      </div>
    </main>
  );
};
