import { Mail, Instagram, Youtube, Linkedin } from 'lucide-react';

const footerLinks = {
  Produto: ['Recursos', 'Como funciona', 'Planos', 'Integracoes'],
  Suporte: ['Central de ajuda', 'Tutoriais', 'Contato', 'Status'],
  Empresa: ['Sobre nos', 'Blog', 'Carreiras', 'Imprensa'],
  Legal: ['Termos de uso', 'Privacidade', 'LGPD', 'Cookies'],
};

export default function Footer() {
  return (
    <footer id="contato" className="bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center">
                <span className="text-white font-extrabold text-xs">G</span>
              </div>
              <span className="text-lg font-bold text-white">
                Gabarito<span className="text-brand-green">.pro</span>
              </span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Plataforma educacional para criacao e correcao automatica de provas
              objetivas.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Youtube, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon size={16} className="text-white/60" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-white/80 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Gabarito.pro. Todos os direitos
            reservados.
          </p>
          <p className="text-sm text-white/30">
            Feito com dedicacao para professores brasileiros
          </p>
        </div>
      </div>
    </footer>
  );
}
