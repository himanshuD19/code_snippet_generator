import { useState, useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import CodeEditor from './components/CodeEditor';
import ControlPanel from './components/ControlPanel';
import { useLocalStorage } from './hooks/useLocalStorage';
import { DEFAULT_SETTINGS, EditorSettings } from './types';
import html2canvas from 'html2canvas';
import { Download, Code2, Copy, Sparkles } from 'lucide-react';
import { detectLanguage, extensionToLanguage, getFileExtension } from './utils/languageDetector';

function App() {
  const [settings, setSettings] = useLocalStorage<EditorSettings>(
    'code-snippet-settings',
    DEFAULT_SETTINGS
  );
  const [isExporting, setIsExporting] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  const updateSetting = <K extends keyof EditorSettings>(
    key: K,
    value: EditorSettings[K]
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  // Auto-detect language
  const autoDetectLanguage = () => {
    const detected = detectLanguage(settings.code);
    if (detected !== settings.language) {
      updateSetting('language', detected);
      toast.success(`Language detected: ${detected}`, { autoClose: 2000 });
    } else {
      toast.info(`Already set to ${detected}`, { autoClose: 2000 });
    }
  };

  // Copy code to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(settings.code);
      toast.success('Code copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy code');
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl/Cmd + S: Export
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        exportAsImage();
      }
      // Ctrl/Cmd + D: Auto-detect language
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        autoDetectLanguage();
      }
      // Ctrl/Cmd + Shift + C: Copy code
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        copyToClipboard();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [settings.code, settings.language]);

  // Auto-update window title based on language
  useEffect(() => {
    const extensions: Record<string, string> = {
      javascript: 'code.js',
      typescript: 'code.ts',
      python: 'script.py',
      java: 'Main.java',
      cpp: 'main.cpp',
      csharp: 'Program.cs',
      php: 'index.php',
      ruby: 'script.rb',
      go: 'main.go',
      rust: 'main.rs',
      html: 'index.html',
      css: 'styles.css',
      json: 'data.json',
      sql: 'query.sql',
      shell: 'script.sh',
    };
    
    const currentExt = getFileExtension(settings.windowTitle);
    const currentLang = extensionToLanguage(currentExt);
    
    if (currentLang !== settings.language) {
      updateSetting('windowTitle', extensions[settings.language] || 'code.txt');
    }
  }, [settings.language]);

  const exportAsImage = async () => {
    if (!editorRef.current) return;

    setIsExporting(true);
    toast.info('Generating image...', { autoClose: 2000 });

    try {
      // Wait a bit for any animations to complete
      await new Promise((resolve) => setTimeout(resolve, 100));

      const canvas = await html2canvas(editorRef.current, {
        backgroundColor: null,
        scale: settings.exportScale,
        logging: false,
        useCORS: true,
      });

      // Convert canvas to blob
      canvas.toBlob((blob) => {
        if (!blob) {
          toast.error('Failed to generate image');
          setIsExporting(false);
          return;
        }

        // Create download link
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const timestamp = new Date().getTime();
        link.download = `code-snippet-${timestamp}.png`;
        link.href = url;
        link.click();

        // Cleanup
        URL.revokeObjectURL(url);
        toast.success('Image downloaded successfully!');
        setIsExporting(false);
      }, 'image/png');
    } catch (error) {
      console.error('Error exporting image:', error);
      toast.error('Failed to export image');
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Code2 className="w-8 h-8 text-blue-500" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Code Snippet Generator
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={autoDetectLanguage}
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                title="Auto-detect language (Ctrl/Cmd + D)"
              >
                <Sparkles className="w-5 h-5" />
                Auto-detect
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                title="Copy code (Ctrl/Cmd + Shift + C)"
              >
                <Copy className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={exportAsImage}
                disabled={isExporting}
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                title="Export as image (Ctrl/Cmd + S)"
              >
                <Download className="w-5 h-5" />
                {isExporting ? 'Exporting...' : 'Export'}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_350px] gap-6">
          {/* Editor Section */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="order-2 lg:order-1"
          >
            <CodeEditor
              settings={settings}
              onCodeChange={(code) => updateSetting('code', code)}
              editorRef={editorRef}
            />
          </motion.div>

          {/* Control Panel */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <ControlPanel settings={settings} updateSetting={updateSetting} />
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 mt-12 py-6 text-center text-gray-400 text-sm">
        <p>Create beautiful code snippets with customizable themes and export as images</p>
      </footer>
    </div>
  );
}

export default App;
