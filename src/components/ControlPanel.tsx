import { motion } from 'framer-motion';
import {
  Palette,
  Type,
  Hash,
  Maximize2,
  Droplet,
  Settings,
  Monitor,
  FileText,
  Image,
  Sparkles,
} from 'lucide-react';
import { EditorSettings, LANGUAGES, THEMES, GRADIENT_PRESETS } from '../types';

interface ControlPanelProps {
  settings: EditorSettings;
  updateSetting: <K extends keyof EditorSettings>(
    key: K,
    value: EditorSettings[K]
  ) => void;
}

const ControlPanel = ({ settings, updateSetting }: ControlPanelProps) => {
  const {
    language,
    theme,
    showLineNumbers,
    padding,
    backgroundColor,
    backgroundType,
    gradientStart,
    gradientEnd,
    fontSize,
    showWindowControls,
    windowTitle,
    exportScale,
    borderRadius,
  } = settings;

  return (
    <motion.div
      layout
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 space-y-6 border border-gray-700 sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto"
    >
      <div className="flex items-center gap-2 mb-4">
        <Settings className="w-5 h-5 text-blue-400" />
        <h2 className="text-xl font-semibold">Customization</h2>
      </div>

      {/* Language Selection */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
          <Type className="w-4 h-4" />
          Language
        </label>
        <select
          value={language}
          onChange={(e) => updateSetting('language', e.target.value)}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>

      {/* Theme Selection */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
          <Palette className="w-4 h-4" />
          Editor Theme
        </label>
        <select
          value={theme}
          onChange={(e) => updateSetting('theme', e.target.value)}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        >
          {THEMES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* Font Size */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
          <Type className="w-4 h-4" />
          Font Size: {fontSize}px
        </label>
        <input
          type="range"
          min="10"
          max="24"
          value={fontSize}
          onChange={(e) => updateSetting('fontSize', Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      {/* Line Numbers Toggle */}
      <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
          <Hash className="w-4 h-4" />
          Line Numbers
        </label>
        <button
          onClick={() => updateSetting('showLineNumbers', !showLineNumbers)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            showLineNumbers ? 'bg-blue-600' : 'bg-gray-600'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              showLineNumbers ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {/* Padding Control */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
          <Maximize2 className="w-4 h-4" />
          Padding: {padding}px
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={padding}
          onChange={(e) => updateSetting('padding', Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      {/* Background Type */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
          <Droplet className="w-4 h-4" />
          Background Type
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => updateSetting('backgroundType', 'solid')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              backgroundType === 'solid'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Solid
          </button>
          <button
            onClick={() => updateSetting('backgroundType', 'gradient')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              backgroundType === 'gradient'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Gradient
          </button>
        </div>
      </div>

      {/* Background Color Controls */}
      {backgroundType === 'solid' ? (
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">
            Background Color
          </label>
          <div className="flex gap-2">
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => updateSetting('backgroundColor', e.target.value)}
              className="w-12 h-10 rounded cursor-pointer bg-transparent"
            />
            <input
              type="text"
              value={backgroundColor}
              onChange={(e) => updateSetting('backgroundColor', e.target.value)}
              className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Gradient Start
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={gradientStart}
                onChange={(e) => updateSetting('gradientStart', e.target.value)}
                className="w-12 h-10 rounded cursor-pointer bg-transparent"
              />
              <input
                type="text"
                value={gradientStart}
                onChange={(e) => updateSetting('gradientStart', e.target.value)}
                className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Gradient End
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={gradientEnd}
                onChange={(e) => updateSetting('gradientEnd', e.target.value)}
                className="w-12 h-10 rounded cursor-pointer bg-transparent"
              />
              <input
                type="text"
                value={gradientEnd}
                onChange={(e) => updateSetting('gradientEnd', e.target.value)}
                className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* Gradient Presets */}
      {backgroundType === 'gradient' && (
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
            <Sparkles className="w-4 h-4" />
            Gradient Presets
          </label>
          <div className="grid grid-cols-3 gap-2">
            {GRADIENT_PRESETS.map((preset) => (
              <button
                key={preset.name}
                onClick={() => {
                  updateSetting('gradientStart', preset.start);
                  updateSetting('gradientEnd', preset.end);
                }}
                className="h-10 rounded-lg transition-transform hover:scale-105 border-2 border-gray-600 hover:border-blue-500"
                style={{
                  background: `linear-gradient(135deg, ${preset.start} 0%, ${preset.end} 100%)`,
                }}
                title={preset.name}
              />
            ))}
          </div>
        </div>
      )}

      {/* Window Controls */}
      <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
          <Monitor className="w-4 h-4" />
          Window Mockup
        </label>
        <button
          onClick={() => updateSetting('showWindowControls', !showWindowControls)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            showWindowControls ? 'bg-blue-600' : 'bg-gray-600'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              showWindowControls ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {/* Window Title */}
      {showWindowControls && (
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
            <FileText className="w-4 h-4" />
            Window Title
          </label>
          <input
            type="text"
            value={windowTitle}
            onChange={(e) => updateSetting('windowTitle', e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            placeholder="filename.ext"
          />
        </div>
      )}

      {/* Border Radius */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
          <Maximize2 className="w-4 h-4" />
          Border Radius: {borderRadius}px
        </label>
        <input
          type="range"
          min="0"
          max="30"
          value={borderRadius}
          onChange={(e) => updateSetting('borderRadius', Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      {/* Export Scale */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
          <Image className="w-4 h-4" />
          Export Quality: {exportScale}x
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((scale) => (
            <button
              key={scale}
              onClick={() => updateSetting('exportScale', scale)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                exportScale === scale
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {scale}x
            </button>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className="pt-4 border-t border-gray-700">
        <label className="text-sm font-medium text-gray-300 mb-2 block">
          Background Preview
        </label>
        <div
          className="w-full h-20 rounded-lg"
          style={
            backgroundType === 'gradient'
              ? {
                  background: `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
                }
              : { backgroundColor }
          }
        />
      </div>
    </motion.div>
  );
};

export default ControlPanel;
