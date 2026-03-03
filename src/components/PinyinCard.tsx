
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Volume2 } from 'lucide-react';
import { PinyinChar } from '../data/pinyin';
import { DEFAULT_AUDIO_BASE_URL, CustomAudioMap } from './Settings';

interface PinyinCardProps {
  item: PinyinChar;
  colorClass?: string;
}

const PinyinCard: React.FC<PinyinCardProps> = ({ item, colorClass = "bg-white" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Settings state
  const [audioBaseUrl, setAudioBaseUrl] = useState(DEFAULT_AUDIO_BASE_URL);
  const [customAudioMap, setCustomAudioMap] = useState<CustomAudioMap>({});

  // Load settings
  const loadSettings = () => {
    const savedBaseUrl = localStorage.getItem('pinyin_audio_base_url');
    const savedMap = localStorage.getItem('pinyin_custom_audio_map');
    
    if (savedBaseUrl) setAudioBaseUrl(savedBaseUrl);
    if (savedMap) {
      try {
        setCustomAudioMap(JSON.parse(savedMap));
      } catch (e) {
        console.error('Failed to parse custom audio map', e);
      }
    }
  };

  useEffect(() => {
    loadSettings();
    
    // Listen for settings changes
    const handleSettingsChange = () => loadSettings();
    window.addEventListener('pinyin-settings-changed', handleSettingsChange);
    
    return () => {
      window.removeEventListener('pinyin-settings-changed', handleSettingsChange);
    };
  }, []);

  const playSound = () => {
    if (isPlaying) return;

    setIsPlaying(true);

    // Try to play from online source first
    if (item.pronunciation) {
      let audioUrl = '';
      
      // 1. Check custom map override first
      if (customAudioMap[item.pronunciation]) {
        audioUrl = customAudioMap[item.pronunciation];
      } 
      // 2. Use base URL + filename
      else {
        audioUrl = `${audioBaseUrl}${item.pronunciation}.mp3`;
      }
      
      if (!audioRef.current) {
        audioRef.current = new Audio(audioUrl);
      } else {
        audioRef.current.src = audioUrl;
      }

      audioRef.current.play()
        .then(() => {
          audioRef.current!.onended = () => setIsPlaying(false);
        })
        .catch((err) => {
          console.warn(`Audio play failed for ${audioUrl}, falling back to TTS`, err);
          fallbackTTS();
        });
    } else {
      fallbackTTS();
    }
  };

  const fallbackTTS = () => {
    if ('speechSynthesis' in window) {
      // Use the example character for better pronunciation context
      const textToSpeak = item.exampleChar || item.char;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.8;
      
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    } else {
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={playSound}
      className={`relative flex flex-col items-center justify-between p-4 rounded-2xl shadow-sm border border-black/5 cursor-pointer transition-colors ${colorClass} hover:shadow-md aspect-[3/4] overflow-hidden`}
    >
      <div className="absolute top-3 right-3 text-black/20 z-10">
        <Volume2 size={20} className={isPlaying ? "animate-pulse text-indigo-500" : ""} />
      </div>
      
      {/* Top: Pinyin Character */}
      <div className="flex-1 flex items-center justify-center w-full z-10 pt-4">
        <span className="text-5xl font-bold text-gray-800 font-sans drop-shadow-sm">{item.char}</span>
      </div>

      {/* Middle: Emoji Image */}
      {item.emoji && (
        <div className="flex items-center justify-center mb-2 z-0">
          <span className="text-6xl filter drop-shadow-sm transform hover:scale-110 transition-transform duration-200 cursor-default">
            {item.emoji}
          </span>
        </div>
      )}
      
      {/* Bottom: Example */}
      <div className="w-full pt-2 border-t border-black/5 text-center z-10 bg-white/50 backdrop-blur-sm rounded-b-xl -mx-4 -mb-4 pb-4">
        <div className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-0.5 mt-2">{item.group}</div>
        {item.example && (
          <div className="text-sm text-gray-700">
            <span className="font-serif italic font-medium">{item.example}</span>
            <span className="ml-1.5 text-gray-500">{item.exampleChar}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PinyinCard;
