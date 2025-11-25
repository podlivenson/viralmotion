import React from 'react';
import { ArrowRight, Play, Zap, Globe, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-pink/10 rounded-full blur-[128px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Start-up Phase Active
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-black text-white tracking-tight mb-8 leading-tight">
            Створюємо <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-pink">Вірусні Історії</span><br />
            за 60 Секунд
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-10 leading-relaxed">
            Short-form Video Production повного циклу. Від сценарію до мільйонів переглядів на YouTube Shorts, TikTok та Reels.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/strategy" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40">
              Дивитися бізнес-план <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/production" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
              Процес виробництва <Play className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0a0a0c]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-500/30 transition-colors group">
              <div className="w-12 h-12 bg-brand-500/20 rounded-lg flex items-center justify-center mb-6 text-brand-400 group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Віральність</h3>
              <p className="text-gray-400">
                Ми не просто робимо відео, ми розповідаємо історії з хуками, кульмінацією та розв'язкою за 60 секунд. High Retention Rate > 70%.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-pink/30 transition-colors group">
              <div className="w-12 h-12 bg-accent-pink/20 rounded-lg flex items-center justify-center mb-6 text-accent-pink group-hover:scale-110 transition-transform">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Глобальний Ринок</h3>
              <p className="text-gray-400">
                Анімація без діалогів або з мінімальним дубляжем дозволяє легко масштабуватися на Tier-1 країни (США, ЄС).
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-cyan/30 transition-colors group">
              <div className="w-12 h-12 bg-accent-cyan/20 rounded-lg flex items-center justify-center mb-6 text-accent-cyan group-hover:scale-110 transition-transform">
                <DollarSign size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Гібридна Монетизація</h3>
              <p className="text-gray-400">
                Поєднання AdSense (стабільність) та прямих інтеграцій брендів (висока маржинальність). Product Placement у сюжеті.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Mission Statement */}
       <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-8">Наша Місія</h2>
          <blockquote className="text-2xl md:text-3xl font-light italic text-gray-300 leading-relaxed">
            "Створення високоякісного вірального анімаційного контенту, що порушує соціально важливі теми мовою сучасної поп-культури."
          </blockquote>
          <div className="mt-8 font-mono text-brand-400">
            — Business Plan, Section 1
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;