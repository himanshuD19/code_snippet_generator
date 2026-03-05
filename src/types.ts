export interface EditorSettings {
  code: string;
  language: string;
  theme: string;
  showLineNumbers: boolean;
  padding: number;
  backgroundColor: string;
  backgroundType: 'solid' | 'gradient';
  gradientStart: string;
  gradientEnd: string;
  fontSize: number;
  showWindowControls: boolean;
  windowTitle: string;
  exportScale: number;
  borderRadius: number;
}

export interface Language {
  value: string;
  label: string;
}

export interface Theme {
  value: string;
  label: string;
}

export const LANGUAGES: Language[] = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'cpp', label: 'C++' },
  { value: 'csharp', label: 'C#' },
  { value: 'php', label: 'PHP' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'go', label: 'Go' },
  { value: 'rust', label: 'Rust' },
  { value: 'html', label: 'HTML' },
  { value: 'css', label: 'CSS' },
  { value: 'json', label: 'JSON' },
  { value: 'sql', label: 'SQL' },
  { value: 'shell', label: 'Shell' },
];

export const THEMES: Theme[] = [
  { value: 'vs-dark', label: 'Dark' },
  { value: 'light', label: 'Light' },
  { value: 'hc-black', label: 'High Contrast Dark' },
];

export interface GradientPreset {
  name: string;
  start: string;
  end: string;
  angle?: string;
}

export const GRADIENT_PRESETS: GradientPreset[] = [
  { name: 'Sunset', start: '#ff6b6b', end: '#feca57' },
  { name: 'Ocean', start: '#667eea', end: '#764ba2' },
  { name: 'Forest', start: '#56ab2f', end: '#a8e063' },
  { name: 'Purple Haze', start: '#8e2de2', end: '#4a00e0' },
  { name: 'Fire', start: '#f12711', end: '#f5af19' },
  { name: 'Ice', start: '#00c6ff', end: '#0072ff' },
  { name: 'Rose', start: '#eb3349', end: '#f45c43' },
  { name: 'Mint', start: '#00b09b', end: '#96c93d' },
  { name: 'Peach', start: '#ed4264', end: '#ffedbc' },
  { name: 'Sky', start: '#2193b0', end: '#6dd5ed' },
  { name: 'Cosmic', start: '#5f2c82', end: '#49a09d' },
  { name: 'Candy', start: '#fc00ff', end: '#00dbde' },
];

export const DEFAULT_SETTINGS: EditorSettings = {
  code: `// Welcome to Code Snippet Generator!\n// Start typing your code here...\n\nfunction greet(name) {\n  console.log(\`Hello, \${name}!\`);\n}\n\ngreet('World');`,
  language: 'javascript',
  theme: 'vs-dark',
  showLineNumbers: true,
  padding: 20,
  backgroundColor: '#1e1e1e',
  backgroundType: 'solid',
  gradientStart: '#667eea',
  gradientEnd: '#764ba2',
  fontSize: 14,
  showWindowControls: true,
  windowTitle: 'code.js',
  exportScale: 2,
  borderRadius: 12,
};
