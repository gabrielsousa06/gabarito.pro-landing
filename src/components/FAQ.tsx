import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  {
    question: 'O que e o Gabarito.pro?',
    answer:
      'O Gabarito.pro e uma plataforma educacional que permite criar provas objetivas com versoes unicas, gerar cartoes-resposta personalizados e corrigi-los automaticamente usando a camera do celular.',
  },
  {
    question: 'Como funciona a correcao por camera?',
    answer:
      'Apos a prova, voce aponta a camera do celular para o cartao-resposta preenchido. Nossa tecnologia de reconhecimento optico (OMR) le as marcacoes e calcula a nota automaticamente, em segundos.',
  },
  {
    question: 'Preciso de algum equipamento especial?',
    answer:
      'Nao! Voce so precisa de um celular com camera. Nao e necessario scanner, leitor optico ou nenhum equipamento adicional. A correcao e feita diretamente pelo app.',
  },
  {
    question: 'As versoes da prova sao realmente unicas?',
    answer:
      'Sim. O sistema embaralha tanto a ordem das questoes quanto a ordem das alternativas, gerando combinacoes unicas para cada versao. Isso torna a cola entre alunos praticamente impossivel.',
  },
  {
    question: 'O Gabarito.pro e gratuito?',
    answer:
      'Oferecemos um plano gratuito para professores comecarem a usar imediatamente. Para recursos avancados como relatorios detalhados e integracao com LMS, temos planos premium acessiveis.',
  },
  {
    question: 'Funciona para qualquer disciplina?',
    answer:
      'Sim! O Gabarito.pro funciona para qualquer disciplina que utilize questoes objetivas (multipla escolha). Voce pode organizar questoes por materia, assunto e nivel de dificuldade.',
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-semibold text-brand-dark pr-4 group-hover:text-brand-blue transition-colors">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`text-gray-400 shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-48 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-gray-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Tire suas duvidas sobre o Gabarito.pro
          </p>
        </div>

        <div
          className={`bg-gray-50/50 rounded-2xl border border-gray-100 px-6 lg:px-8 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
