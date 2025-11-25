import React from 'react';
import { User, Briefcase, PenTool, Video, DollarSign, PenSquare, Share2 } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-display font-bold text-white mb-4">Організаційна Структура</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Лінійно-функціональна структура (8 осіб). Гнучкий Agile/Scrum підхід. 
          Допоміжний персонал (юрист, бухгалтер) на аутсорсингу.
        </p>
      </div>

      <div className="grid gap-12">
        {/* Leadership */}
        <div className="flex flex-col items-center">
          <div className="relative p-8 bg-gradient-to-br from-brand-900/50 to-brand-800/20 border border-brand-500/30 rounded-2xl max-w-lg w-full text-center">
             <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/40">
                <User size={24} />
             </div>
             <h3 className="text-2xl font-bold text-white mt-4">CEO / Генеральний Продюсер</h3>
             <p className="text-brand-300 font-medium mb-4">Засновник (1 особа)</p>
             <p className="text-gray-400 text-sm">
               Стратегія, переговори з рекламодавцями, затвердження фінального продукту.
             </p>
          </div>
          <div className="h-12 w-0.5 bg-white/10" />
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-3 gap-8">
            {/* Production */}
            <div className="col-span-1 md:col-span-2 space-y-6">
                <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4 mb-6">
                    Production Department ("Серце" компанії)
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                     <div className="bg-[#18181b] p-5 rounded-xl border border-white/5 hover:border-brand-500/30 transition-all">
                        <div className="flex items-center gap-3 mb-2">
                            <PenTool className="text-accent-pink" size={20} />
                            <h4 className="font-bold text-white">Арт-директор</h4>
                        </div>
                        <p className="text-xs text-gray-500 mb-2">1 особа</p>
                        <p className="text-sm text-gray-400">Візуальний стиль, контроль якості, дизайн персонажів.</p>
                     </div>

                     <div className="bg-[#18181b] p-5 rounded-xl border border-white/5 hover:border-brand-500/30 transition-all">
                        <div className="flex items-center gap-3 mb-2">
                            <PenSquare className="text-accent-pink" size={20} />
                            <h4 className="font-bold text-white">Сценарист</h4>
                        </div>
                         <p className="text-xs text-gray-500 mb-2">1 особа</p>
                        <p className="text-sm text-gray-400">Генерація ідей, діалоги, хуки.</p>
                     </div>

                     <div className="bg-[#18181b] p-5 rounded-xl border border-white/5 hover:border-brand-500/30 transition-all">
                        <div className="flex items-center gap-3 mb-2">
                            <Video className="text-accent-pink" size={20} />
                            <h4 className="font-bold text-white">2D Аніматори</h4>
                        </div>
                         <p className="text-xs text-gray-500 mb-2">2 особи</p>
                        <p className="text-sm text-gray-400">Створення анімації, ріггінг.</p>
                     </div>

                     <div className="bg-[#18181b] p-5 rounded-xl border border-white/5 hover:border-brand-500/30 transition-all">
                        <div className="flex items-center gap-3 mb-2">
                            <Video className="text-accent-pink" size={20} />
                            <h4 className="font-bold text-white">Монтажер</h4>
                        </div>
                         <p className="text-xs text-gray-500 mb-2">1 особа</p>
                        <p className="text-sm text-gray-400">Збірка, кольорокорекція, субтитри.</p>
                     </div>
                </div>
            </div>

            {/* Marketing & Admin */}
            <div className="space-y-6">
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4 mb-6">Marketing</h3>
                    <div className="bg-[#18181b] p-5 rounded-xl border border-white/5 hover:border-accent-cyan/30 transition-all">
                        <div className="flex items-center gap-3 mb-2">
                            <Share2 className="text-accent-cyan" size={20} />
                            <h4 className="font-bold text-white">SMM-менеджер</h4>
                        </div>
                        <p className="text-xs text-gray-500 mb-2">1 особа</p>
                        <p className="text-sm text-gray-400">Публікація, алгоритми, робота з ком'юніті.</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4 mb-6">Outsource</h3>
                    <div className="bg-[#18181b]/50 p-4 rounded-xl border border-white/5 dashed mb-3">
                        <div className="flex items-center gap-3">
                            <DollarSign className="text-gray-500" size={18} />
                            <h4 className="font-medium text-gray-300">Бухгалтер</h4>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">ФОП, Звітність, ЗЕД</p>
                    </div>
                    <div className="bg-[#18181b]/50 p-4 rounded-xl border border-white/5 dashed">
                        <div className="flex items-center gap-3">
                            <Briefcase className="text-gray-500" size={18} />
                            <h4 className="font-medium text-gray-300">Юрист</h4>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Договори (IP, NDA)</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Team;