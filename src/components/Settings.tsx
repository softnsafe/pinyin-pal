
import { useState, useEffect } from 'react';
import { Save, RotateCcw } from 'lucide-react';

// Define the shape of our custom audio map
export interface CustomAudioMap {
  [key: string]: string;
}

export const DEFAULT_AUDIO_BASE_URL = 'https://raw.githubusercontent.com/shawn-sterling/pinyin-audio/master/mp3/';

export default function Settings() {
  const [baseUrl, setBaseUrl] = useState(DEFAULT_AUDIO_BASE_URL);
  const [customMap, setCustomMap] = useState<CustomAudioMap>({});
  const [jsonInput, setJsonInput] = useState('');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saved' | 'error'>('idle');

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedBaseUrl = localStorage.getItem('pinyin_audio_base_url');
    const savedMap = localStorage.getItem('pinyin_custom_audio_map');

    if (savedBaseUrl) setBaseUrl(savedBaseUrl);
    if (savedMap) {
      try {
        const parsed = JSON.parse(savedMap);
        setCustomMap(parsed);
        setJsonInput(JSON.stringify(parsed, null, 2));
      } catch (e) {
        console.error('Failed to parse saved audio map', e);
      }
    }
  }, []);

  const handleSave = () => {
    try {
      // Validate JSON if input is not empty
      let newMap = {};
      if (jsonInput.trim()) {
        newMap = JSON.parse(jsonInput);
      }

      localStorage.setItem('pinyin_audio_base_url', baseUrl);
      localStorage.setItem('pinyin_custom_audio_map', JSON.stringify(newMap));
      
      setCustomMap(newMap);
      setSaveStatus('saved');
      
      // Reset status after 2 seconds
      setTimeout(() => setSaveStatus('idle'), 2000);
      
      // Dispatch event so other components can reload settings
      window.dispatchEvent(new Event('pinyin-settings-changed'));
      
    } catch (e) {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all audio settings to default?')) {
      setBaseUrl(DEFAULT_AUDIO_BASE_URL);
      setCustomMap({});
      setJsonInput('');
      localStorage.removeItem('pinyin_audio_base_url');
      localStorage.removeItem('pinyin_custom_audio_map');
      window.dispatchEvent(new Event('pinyin-settings-changed'));
    }
  };

  return (
    <div className="w-full mx-auto p-6">
      <div className="bg-white rounded-3xl shadow-sm border border-black/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Audio Settings</h2>
          <p className="text-gray-500">Configure custom audio sources for Initials, Finals, and Sandbox pronunciation.</p>
        </div>

        <div className="space-y-8">
          
          {/* Base URL Section */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Base Audio URL
            </label>
            <p className="text-xs text-gray-500 mb-2">
              The root URL where standard pinyin audio files are hosted. 
              Must end with a slash. Files are expected to be named like <code>bo1.mp3</code>.
            </p>
            <input
              type="text"
              value={baseUrl}
              onChange={(e) => setBaseUrl(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all font-mono text-sm"
              placeholder="https://example.com/audio/"
            />
          </div>

          {/* Custom Map Section */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Custom Audio Overrides (JSON)
            </label>
            <p className="text-xs text-gray-500 mb-2">
              Provide specific URLs for individual pinyin sounds. Keys are the pinyin (e.g., "bo1", "a1"), values are the full URLs.
            </p>
            <div className="relative">
              <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                className="w-full h-64 p-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all font-mono text-sm"
                placeholder={`{\n  "bo1": "https://mysite.com/audio/my-bo1.mp3",\n  "a1": "https://mysite.com/audio/my-a1.mp3"\n}`}
              />
            </div>
            {saveStatus === 'error' && (
              <p className="text-red-500 text-sm mt-2">Invalid JSON format. Please check your syntax.</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium"
            >
              <RotateCcw size={16} />
              Reset to Defaults
            </button>

            <button
              onClick={handleSave}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-white font-medium transition-all ${
                saveStatus === 'saved' 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg'
              }`}
            >
              {saveStatus === 'saved' ? (
                <>Saved!</>
              ) : (
                <>
                  <Save size={18} />
                  Save Changes
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
