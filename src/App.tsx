import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { initials, finals } from './data/pinyin';
import PinyinCard from './components/PinyinCard';
import Settings from './components/Settings';
import { BookOpen, Grid, Sparkles, Settings as SettingsIcon, ExternalLink } from 'lucide-react';

type Tab = 'initials' | 'finals' | 'yabla' | 'studycli' | 'settings';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('initials');

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f0]/80 backdrop-blur-md border-b border-black/5">
        <div className={`mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between transition-all duration-300 ${['yabla', 'studycli', 'settings'].includes(activeTab) ? 'max-w-[95%]' : 'max-w-7xl'}`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              P
            </div>
            <span className="font-bold text-xl tracking-tight">Pinyin Pal</span>
          </div>
          
          <nav className="flex gap-1 bg-white/50 p-1 rounded-xl border border-black/5 overflow-x-auto">
            <button
              onClick={() => setActiveTab('initials')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === 'initials' 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Initials
            </button>
            <button
              onClick={() => setActiveTab('finals')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === 'finals' 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Finals
            </button>
            <div className="w-px bg-gray-300 mx-1 h-6 self-center"></div>
            <button
              onClick={() => setActiveTab('yabla')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === 'yabla' 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Yabla Chart
            </button>
            <button
              onClick={() => setActiveTab('studycli')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === 'studycli' 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              StudyCLI Chart
            </button>
            <div className="w-px bg-gray-300 mx-1 h-6 self-center"></div>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'settings' 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
              title="Settings"
            >
              <SettingsIcon size={18} />
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className={`pt-24 pb-12 px-4 sm:px-6 lg:px-8 mx-auto transition-all duration-300 ${['yabla', 'studycli', 'settings'].includes(activeTab) ? 'max-w-[95%]' : 'max-w-7xl'}`}>
        <AnimatePresence mode="wait">
          
          {activeTab === 'initials' && (
            <motion.div
              key="initials"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Initials (聲母)</h1>
                <p className="text-gray-500 max-w-2xl">
                  Initials are the starting sounds of a Chinese syllable. There are 23 initials in standard Mandarin.
                  Click on any card to hear its pronunciation.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {initials.map((item) => (
                  <PinyinCard key={item.char} item={item} colorClass="bg-white hover:bg-indigo-50/50" />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'finals' && (
            <motion.div
              key="finals"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Finals (韻母)</h1>
                <p className="text-gray-500 max-w-2xl">
                  Finals are the ending sounds of a syllable. They can be simple vowels, compound vowels, or nasal sounds.
                </p>
              </div>

              <div className="space-y-12">
                {['Simple', 'Compound', 'Nasal'].map((group) => (
                  <section key={group}>
                    <div className="flex items-center gap-3 mb-6">
                      <h2 className="text-xl font-semibold text-gray-800">{group} Finals</h2>
                      <div className="h-px flex-1 bg-gray-200"></div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {finals.filter(f => f.group.includes(group)).map((item) => (
                        <PinyinCard key={item.char} item={item} colorClass="bg-white hover:bg-emerald-50/50" />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'yabla' && (
            <motion.div
              key="yabla"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-[calc(100vh-8rem)]"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden h-full flex flex-col">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                  <h2 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                    <BookOpen size={20} className="text-indigo-600"/>
                    Yabla Pinyin Chart
                  </h2>
                  <a 
                    href="https://chinese.yabla.com/chinese-pinyin-chart.php" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1 font-medium"
                  >
                    Open in new tab <ExternalLink size={14} />
                  </a>
                </div>
                <iframe 
                  src="https://chinese.yabla.com/chinese-pinyin-chart.php"
                  className="w-full flex-1 border-0"
                  title="Yabla Pinyin Chart"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              </div>
            </motion.div>
          )}

          {activeTab === 'studycli' && (
            <motion.div
              key="studycli"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-[calc(100vh-8rem)]"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden h-full flex flex-col">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                  <h2 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                    <BookOpen size={20} className="text-indigo-600"/>
                    StudyCLI Pinyin Chart
                  </h2>
                  <a 
                    href="https://studycli.org/pinyin-chart/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1 font-medium"
                  >
                    Open in new tab <ExternalLink size={14} />
                  </a>
                </div>
                <iframe 
                  src="https://studycli.org/pinyin-chart/"
                  className="w-full flex-1 border-0"
                  title="StudyCLI Pinyin Chart"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              </div>
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Settings />
            </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
}
