import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Target, TrendingUp, AlertTriangle, Shield, CheckCircle } from 'lucide-react';

const Strategy: React.FC = () => {
  // Data derived from Document 3 (Financials)
  const revenueData = [
    { name: 'AdSense / Creator Fund', value: 40, color: '#8b5cf6' },
    { name: 'Direct Brand Deals', value: 60, color: '#ec4899' },
  ];

  // Data derived from Document 4 (Competitor Analysis)
  const rpmData = [
    { name: 'UA/CIS', min: 0.01, max: 0.06 },
    { name: 'USA/EU', min: 0.10, max: 0.20 },
    { name: 'Long-form (Ref)', min: 1.00, max: 5.00 },
  ];

  const swotData = {
    strengths: [
      "Унікальний авторський стиль",
      "Високий потенціал віральності",
      "Низька собівартість копіювання на різні платформи"
    ],
    weaknesses: [
      "Залежність від алгоритмів соцмереж",
      "Висока трудомісткість анімації",
      "Необхідність постійно генерувати нові ідеї"
    ],
    opportunities: [
      "Масштабування на іноземні ринки",
      "Створення власного мобільного додатку/гри",
      "Продаж прав на використання персонажів (Merch)"
    ],
    threats: [
      "Зміна правил монетизації платформами",
      "Блокування акаунтів (Shadowban)",
      "Конкуренція з ШІ-генерацією відео"
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-display font-bold text-white mb-4">Бізнес-Стратегія</h1>
        <p className="text-gray-400 text-lg">Аналіз ринку, фінансова модель та дорожня карта розвитку.</p>
      </div>

      {/* Financial Charts */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Revenue Mix */}
        <div className="bg-[#18181b] border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <Target className="mr-2 text-brand-400" size={20} />
            Прогноз Джерел Доходу
            <span className="ml-2 text-xs font-normal text-gray-500">(Реалістичний сценарій)</span>
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={revenueData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {revenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#27272a', border: '1px solid #3f3f46', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-400 mt-4 text-center">
            Орієнтація на прямі інтеграції брендів (60%) як основне джерело прибутку.
          </p>
        </div>

        {/* RPM Comparison */}
        <div className="bg-[#18181b] border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <TrendingUp className="mr-2 text-accent-pink" size={20} />
            Аналіз RPM (Revenue Per Mille)
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={rpmData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
              >
                <XAxis type="number" stroke="#71717a" />
                <YAxis dataKey="name" type="category" stroke="#e4e4e7" width={80} />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ backgroundColor: '#27272a', border: '1px solid #3f3f46', borderRadius: '8px' }}
                />
                <Bar dataKey="max" fill="#06b6d4" radius={[0, 4, 4, 0]} name="Макс. ціна ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Ринок США/Європи приносить у 5-10 разів більше доходу за 1000 переглядів.
          </p>
        </div>
      </div>

      {/* SWOT Matrix */}
      <h2 className="text-3xl font-display font-bold text-white mb-8">SWOT-аналіз Проєкту</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="bg-brand-900/10 border border-brand-500/20 rounded-xl p-6">
          <h4 className="text-brand-400 font-bold mb-4 flex items-center uppercase tracking-wide">
            <Shield className="mr-2" size={18} /> Strengths (Сильні сторони)
          </h4>
          <ul className="space-y-2">
            {swotData.strengths.map((item, i) => (
              <li key={i} className="flex items-start text-gray-300">
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-orange-900/10 border border-orange-500/20 rounded-xl p-6">
          <h4 className="text-orange-400 font-bold mb-4 flex items-center uppercase tracking-wide">
            <AlertTriangle className="mr-2" size={18} /> Weaknesses (Слабкі сторони)
          </h4>
          <ul className="space-y-2">
            {swotData.weaknesses.map((item, i) => (
              <li key={i} className="flex items-start text-gray-300">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-green-900/10 border border-green-500/20 rounded-xl p-6">
          <h4 className="text-green-400 font-bold mb-4 flex items-center uppercase tracking-wide">
            <TrendingUp className="mr-2" size={18} /> Opportunities (Можливості)
          </h4>
          <ul className="space-y-2">
            {swotData.opportunities.map((item, i) => (
              <li key={i} className="flex items-start text-gray-300">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-6">
          <h4 className="text-red-400 font-bold mb-4 flex items-center uppercase tracking-wide">
            <AlertTriangle className="mr-2" size={18} /> Threats (Загрози)
          </h4>
          <ul className="space-y-2">
            {swotData.threats.map((item, i) => (
              <li key={i} className="flex items-start text-gray-300">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Roadmap */}
      <div className="relative border-l border-white/10 ml-4 space-y-12">
        <div className="relative pl-8">
          <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-brand-500 ring-4 ring-[#0f0f13]" />
          <h3 className="text-xl font-bold text-white">Етап 1: Запуск (1-3 місяці)</h3>
          <p className="text-gray-400 mt-2">
            Найм ядра команди (8 осіб), розробка "Show Bible", виробництво MVP (пілотний пакет з 10 відео).
            Закупівля Wacom/Huion, ліцензій Adobe.
          </p>
        </div>
        <div className="relative pl-8">
          <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-accent-pink ring-4 ring-[#0f0f13]" />
          <h3 className="text-xl font-bold text-white">Етап 2: Активний Ріст (4-8 місяців)</h3>
          <p className="text-gray-400 mt-2">
            Вихід на графік 4 відео/тиждень. KPI: Retention Rate {'>'} 70%, 10 млн переглядів Shorts.
            Крос-постинг (YouTube, TikTok, IG).
          </p>
        </div>
        <div className="relative pl-8">
          <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-accent-cyan ring-4 ring-[#0f0f13]" />
          <h3 className="text-xl font-bold text-white">Етап 3: Монетизація та Scale-up (9-12+ місяців)</h3>
          <p className="text-gray-400 mt-2">
            Перший Cash Flow. Підключення партнерських програм. Створення медіа-кіта.
            Початок мерчандайзингу та вихід на Tier-1 ринки.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Strategy;