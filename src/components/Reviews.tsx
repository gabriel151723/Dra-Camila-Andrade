import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  initials: string;
  source: string;
  date: string;
  rating: number;
  treatment: string;
  comment: string;
  category: 'lentes' | 'clareamento' | 'atendimento';
}

const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Paciente Auditada (P. V.)',
    initials: 'PV',
    source: 'Avaliação Verificada no Google Maps',
    date: '30 de maio de 2026',
    rating: 5,
    treatment: '10 Lentes em Resina Nanoparticulada',
    comment: 'Fiz 10 lentes em resina com a Dra. Camila e indico de olhos fechados. O atendimento dela é extremamente acolhedor, ela explica cada detalhe com paciência e o resultado ficou super harmônico e natural. Meus amigos elogiam o sorriso sem nem desconfiar que coloquei lentes!',
    category: 'lentes',
  },
  {
    id: '2',
    author: 'M. Rodrigues',
    initials: 'MR',
    source: 'Avaliação Verificada no Google Maps',
    date: '24 de abril de 2026',
    rating: 5,
    treatment: 'Fechamento de Diastemas + Clareamento',
    comment: 'Dra. Camila tem mãos levíssimas! Tinha muito pavor de mexer nos dentes da frente por trauma de outros profissionais, mas o procedimento foi 100% indolor. A sutileza com que ela fechou o espaço entre meus incisivos foi impressionante.',
    category: 'atendimento',
  },
  {
    id: '3',
    author: 'T. Silva',
    initials: 'TS',
    source: 'Avaliação Verificada no Google Maps',
    date: '18 de fevereiro de 2026',
    rating: 5,
    treatment: 'Clareamento Combinado + Placa de Bruxismo',
    comment: 'Consultório impecável, moderno e super bem localizado no Itaigara, com estacionamento fácil e elevador. Pontualidade britânica, sem atrasos. O clareamento deu uma luminosidade incrível sem me causar sensibilidade.',
    category: 'clareamento',
  },
  {
    id: '4',
    author: 'Fernanda C.',
    initials: 'FC',
    source: 'Avaliação Verificada no Google Maps',
    date: '12 de janeiro de 2026',
    rating: 5,
    treatment: '6 Lentes de Canino a Canino',
    comment: 'Eu tinha dentes curtos e bordas desgastadas pelo bruxismo. A Dra. Camila reconstruiu o formato com uma textura que reflete a luz igualzinha ao dente verdadeiro. Foi feito tudo em uma única tarde tranquila.',
    category: 'lentes',
  },
  {
    id: '5',
    author: 'Eduardo M.',
    initials: 'EM',
    source: 'Avaliação Verificada no Google Maps',
    date: '04 de novembro de 2025',
    rating: 5,
    treatment: 'Reabilitação Estética Superior',
    comment: 'O melhor é saber que não precisou lixar agressivamente meus dentes. Fiquei muito satisfeito com o profissionalismo, higiene e privacidade no consultório do Itaigara.',
    category: 'lentes',
  },
];

export const Reviews: React.FC = () => {
  const [filter, setFilter] = useState<'todos' | 'lentes' | 'clareamento' | 'atendimento'>('todos');

  const filtered = filter === 'todos' ? REVIEWS : REVIEWS.filter((r) => r.category === filter);

  return (
    <section className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-[#C5A059] font-bold">
            Reputação Factual
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2 [text-wrap:balance]">
            O que Dizem Pacientes que Já Transformaram o Sorriso
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-300">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white text-sm">Nota 5.0 Estrelas</span>
            <span className="text-slate-400">· 49 avaliações registradas no Google Maps</span>
          </div>

          {/* Interactive Filter Controls (Functional button elements) */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 bg-[#121620] border border-white/10 rounded-xl max-w-md mx-auto">
            <button
              onClick={() => setFilter('todos')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                filter === 'todos' ? 'bg-[#C5A059] text-[#090B0E] font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Todos ({REVIEWS.length})
            </button>
            <button
              onClick={() => setFilter('lentes')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                filter === 'lentes' ? 'bg-[#C5A059] text-[#090B0E] font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Lentes em Resina
            </button>
            <button
              onClick={() => setFilter('clareamento')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                filter === 'clareamento' ? 'bg-[#C5A059] text-[#090B0E] font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Clareamento
            </button>
            <button
              onClick={() => setFilter('atendimento')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                filter === 'atendimento' ? 'bg-[#C5A059] text-[#090B0E] font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Sem Medo
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((review) => (
            <div
              key={review.id}
              className="luxury-card rounded-2xl p-6 flex flex-col justify-between hover:border-[#C5A059]/40 transition-all"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#1A202C] border border-[#C5A059]/30 text-[#E9D5A1] font-mono font-bold text-xs flex items-center justify-center">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {review.author}
                    </h4>
                    <span className="text-[11px] text-slate-400 block font-mono">
                      {review.date}
                    </span>
                  </div>
                </div>

                {/* Stars and Procedure */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3 text-xs">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#C5A059] font-mono font-medium">
                    {review.treatment}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{review.source}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
