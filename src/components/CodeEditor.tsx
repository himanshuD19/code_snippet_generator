import React from 'react';
import Editor from '@monaco-editor/react';
import { motion } from 'framer-motion';
import { EditorSettings } from '../types';

interface CodeEditorProps {
  settings: EditorSettings;
  onCodeChange: (code: string) => void;
  editorRef: React.RefObject<HTMLDivElement>;
}

const CodeEditor = ({ settings, onCodeChange, editorRef }: CodeEditorProps) => {
  const {
    code,
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
    borderRadius,
  } = settings;

  const getBackgroundStyle = () => {
    if (backgroundType === 'gradient') {
      return {
        background: `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
      };
    }
    return {
      backgroundColor,
    };
  };

  return (
    <motion.div
      layout
      className="rounded-xl overflow-hidden shadow-2xl"
      style={{
        ...getBackgroundStyle(),
        padding: `${padding}px`,
      }}
      ref={editorRef}
    >
      <motion.div
        layout
        className="overflow-hidden"
        style={{ borderRadius: `${borderRadius}px` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {showWindowControls && (
          <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center text-sm text-gray-400 font-medium">
              {windowTitle}
            </div>
            <div className="w-16"></div>
          </div>
        )}
        <Editor
          height="600px"
          language={language}
          value={code}
          theme={theme}
          onChange={(value) => onCodeChange(value || '')}
          options={{
            minimap: { enabled: false },
            fontSize,
            lineNumbers: showLineNumbers ? 'on' : 'off',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            wordWrap: 'on',
            fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
            fontLigatures: true,
            padding: { top: 16, bottom: 16 },
            renderLineHighlight: 'all',
            cursorBlinking: 'smooth',
            smoothScrolling: true,
          }}
          loading={
            <div className="flex items-center justify-center h-full bg-gray-900">
              <div className="text-gray-400">Loading editor...</div>
            </div>
          }
        />
      </motion.div>
    </motion.div>
  );
};

export default CodeEditor;
