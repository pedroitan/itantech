import React from 'react';
import { Link } from '../lib/router';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6 text-center text-sm text-gray-400 space-y-2">
        <p className="text-white font-semibold text-base">Itan Tech</p>
        <p>30.319.670 PEDRO ITAN ANDRADE · CNPJ 30.319.670/0001-36</p>
        <p>Rua Santo Amaro, 158, Apt 202 – Glória – Rio de Janeiro/RJ – CEP 22211-230</p>
        <p>
          <a
            href="mailto:pedroitan@itantech.com.br"
            className="hover:text-blue-400 transition-colors"
          >
            pedroitan@itantech.com.br
          </a>
          {' · '}
          <a href="tel:+5521988419463" className="hover:text-blue-400 transition-colors">
            +55 21 98841-9463
          </a>
        </p>
        <p className="pt-2">
          <Link to="/privacidade" className="hover:text-blue-400 transition-colors">
            Política de Privacidade
          </Link>
          {' · '}
          <Link to="/termos" className="hover:text-blue-400 transition-colors">
            Termos de Uso
          </Link>
          {' · '}
          <Link to="/privacidade#exclusao-de-dados" className="hover:text-blue-400 transition-colors">
            Exclusão de Dados
          </Link>
        </p>
        <p className="pt-4 text-gray-500">© 2026 Itan Tech. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
