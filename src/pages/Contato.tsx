import React, { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

export const Contato = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contato', ...data }),
      });
      if (!res.ok) throw new Error('submit failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-blue-950 pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl font-bold text-white mb-4">Contato</h1>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Fale com a Itan Tech sobre consultoria audiovisual, produção e tecnologia para eventos
          ou a plataforma de convites e confirmação de presença por WhatsApp.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-white font-semibold mb-1">E-mail</h2>
                <a
                  href="mailto:pedroitan@itantech.com.br"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  pedroitan@itantech.com.br
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-white font-semibold mb-1">Telefone / WhatsApp</h2>
                <a
                  href="tel:+5521988419463"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  +55 21 98841-9463
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-white font-semibold mb-1">Endereço comercial</h2>
                <p className="text-gray-400">
                  Rua Santo Amaro, 158, Apt 202 – Glória
                  <br />
                  Rio de Janeiro/RJ – CEP 22211-230
                </p>
              </div>
            </div>
          </div>

          <form
            name="contato"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6 space-y-4 backdrop-blur-lg"
          >
            <input type="hidden" name="form-name" value="contato" />
            <p className="hidden">
              <label>
                Não preencha: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label htmlFor="nome" className="block text-sm text-gray-300 mb-1">
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                placeholder="voce@empresa.com.br"
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block text-sm text-gray-300 mb-1">
                Telefone / WhatsApp <span className="text-gray-500">(opcional)</span>
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                placeholder="+55 21 9xxxx-xxxx"
              />
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm text-gray-300 mb-1">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none resize-y"
                placeholder="Conte sobre o seu projeto ou evento"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
            </button>

            {status === 'sent' && (
              <p className="text-green-400 text-sm">
                Mensagem enviada. Retornaremos em breve pelo e-mail informado.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm">
                Não foi possível enviar. Escreva para pedroitan@itantech.com.br ou ligue para
                +55 21 98841-9463.
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
};
