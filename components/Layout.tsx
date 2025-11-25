import React, { useState } from 'react';
import { Menu, X, Youtube, Instagram, Twitter, Film, TrendingUp, Users, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Головна', path: '/', icon: <Film size={18} /> },
    { name: 'Стратегія', path: '/strategy', icon: <TrendingUp size={18} /> },
    { name: 'Команда', path: '/team', icon: <Users size={18} /> },
    { name: 'Виробництво', path: '/production', icon: <FileText size={18} /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0f0f13]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-accent-pink rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-brand-400 transition-colors">
                  ViralMotion
                </span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#18181b] border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-2 block px-3 py-2 rounded-md text-base font-medium ${
                     isActive(item.path)
                        ? 'bg-brand-500/20 text-brand-400'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0c] border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <span className="font-display font-bold text-xl text-white mb-4 block">ViralMotion Studio</span>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Студія анімаційного продакшену повного циклу. Створюємо вірусний контент, що порушує соціально важливі теми мовою сучасної поп-культури.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Юридична інформація</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>ФОП 3-тя група</li>
                <li>КВЕД 59.11 Виробництво кінофільмів</li>
                <li>Єдиний податок 5%</li>
                <li>B2B Contractor Model</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Соцмережі</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors"><Youtube size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-accent-pink transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
            &copy; 2024 ViralMotion Studio. Усі права захищені.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;