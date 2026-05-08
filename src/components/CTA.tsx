import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="cta"
      className="py-24 lg:py-32 bg-brand-dark relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Pronto para transformar a{' '}
            <span className="text-brand-green">sua correção</span>?
          </h2>
          <p className="text-lg lg:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Junte-se a milhares de professores que já economizam horas com
            correção automática. Comece gratuitamente hoje.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-brand-green text-white font-bold text-lg hover:bg-brand-green-dark transition-all shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-0.5"
          >
            Começar gratuitamente
            <ArrowRight size={20} />
          </a>
          <p className="mt-4 text-sm text-white/40">
            Sem cartão de crédito. Cadastro rápido.
          </p>
        </div>
      </div>
    </section>
  );
}
