import React from 'react';
import { Layers, Music, Monitor, PenTool, Smartphone } from 'lucide-react';

const Production: React.FC = () => {
  const pipeline = [
    {
      title: "Pre-production",
      icon: <PenTool className="text-brand-400" size={32} />,
      steps: ["Ідея & Хуки", "Сценарій (Script)", "Розкадровка (Storyboard)", "Стилістика"],
      desc: "На цьому етапі народжується вірусність. Ми плануємо кожну секунду для утримання уваги."
    },
    {
      title: "Production",
      icon: <Layers className="text-accent-pink" size={32} />,
      steps: ["Малювання ассетів", "Ріггінг персонажів", "Ключова анімація", "Motion Capture"],
      desc: "Використання Toon Boom Harmony або Adobe After Effects для оживлення персонажів."
    },
    {
      title: "Post-production",
      icon: <Monitor className="text-accent-cyan" size={32} />,
      steps: ["Саунд-дизайн (SFX)", "Монтаж", "Субтитри", "Рендер 4K (9:16)"],
      desc: "Додавання динаміки, звукових акцентів та фінальний полішинг."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-display font-bold text-white mb-4">Виробничий Пайплайн</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Оптимізований процес створення контенту, що дозволяє випускати 3-4 високоякісних відео на тиждень.
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="relative mb-24">
        <div className="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-brand-500 via-accent-pink to-accent-cyan opacity-30 hidden md:block transform -translate-x-1/2"></div>
        
        <div className="space-y-12">
          {pipeline.map((stage, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              <div className="w-full md:w-5/12">
                <div className="bg-[#18181b] p-8 rounded-2xl border border-white/10 hover:border-brand-500/50 transition-all hover:-translate-y-1 duration-300">
                  <div className="mb-4">{stage.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{stage.title}</h3>
                  <p className="text-gray-400 mb-6">{stage.desc}</p>
                  <ul className="space-y-2">
                    {stage.steps.map((step, idx) => (
                      <li key={idx} className="flex items-center text-sm font-medium text-gray-300 bg-white/5 p-2 rounded-lg">
                        <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-3" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="hidden md:flex w-2/12 justify-center">
                <div className="w-8 h-8 rounded-full bg-[#18181b] border-4 border-brand-500 z-10" />
              </div>

              <div className="w-full md:w-5/12" /> 
            </div>
          ))}
        </div>
      </div>

      {/* Tech Specs */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-brand-900/20 to-black p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Smartphone className="mr-3" /> Технічні Вимоги
            </h3>
            <div className="space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">Формат</span>
                    <span className="text-white font-mono">9:16 (Вертикальний)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">Роздільна здатність</span>
                    <span className="text-white font-mono">1080p / 4K</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">Тривалість</span>
                    <span className="text-white font-mono">30-60 секунд</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">FPS</span>
                    <span className="text-white font-mono">24 / 30 / 60</span>
                </div>
            </div>
        </div>

        <div className="bg-gradient-to-bl from-[#18181b] to-black p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Monitor className="mr-3" /> Software Stack
            </h3>
             <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-500/30">Adobe Creative Cloud</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30">Toon Boom Harmony</span>
                <span className="px-3 py-1 bg-orange-900/30 text-orange-300 rounded-full text-sm border border-orange-500/30">Blender (3D)</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-sm border border-green-500/30">FL Studio / Audition</span>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Production;