import { Shuffle, Camera, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Shuffle,
    title: 'Geracao automatica de versoes',
    description:
      'Crie multiplas versoes da mesma prova com questoes e alternativas embaralhadas automaticamente, garantindo provas unicas para cada aluno.',
    color: 'from-brand-blue to-blue-400',
    bg: 'bg-brand-blue/5',
    border: 'border-brand-blue/10',
  },
  {
    icon: Camera,
    title: 'Correcao por camera (OMR)',
    description:
      'Aponte a camera do celular para o cartao-resposta e receba a nota instantaneamente. Tecnologia OMR precisa e rapida, sem scanners.',
    color: 'from-brand-green to-emerald-400',
    bg: 'bg-brand-green/5',
    border: 'border-brand-green/10',
  },
  {
    icon: Clock,
    title: 'Reducao de cola e economia de tempo',
    description:
      'Com versoes unicas, a cola entre alunos e eliminada. E voce economiza horas de correcao manual que podem ser usadas para ensinar.',
    color: 'from-amber-500 to-orange-400',
    bg: 'bg-amber-500/5',
    border: 'border-amber-500/10',
  },
];

export default function WhyUse() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="recursos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-4">
            Recursos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
            Por que usar o{' '}
            <span className="gradient-text">Gabarito.pro</span>?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Tudo que voce precisa para modernizar a criacao e correcao de provas
            objetivas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-8 rounded-2xl border ${feature.border} ${feature.bg} hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
