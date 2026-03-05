// Simple language detection based on code patterns
export function detectLanguage(code: string): string {
  const trimmedCode = code.trim();
  
  // Empty code
  if (!trimmedCode) return 'javascript';
  
  // HTML detection
  if (/<\/?[a-z][\s\S]*>/i.test(trimmedCode)) {
    return 'html';
  }
  
  // CSS detection
  if (/^[\s\S]*\{[\s\S]*:[\s\S]*;[\s\S]*\}/.test(trimmedCode) && 
      /(?:color|margin|padding|display|position):/i.test(trimmedCode)) {
    return 'css';
  }
  
  // JSON detection
  if ((trimmedCode.startsWith('{') && trimmedCode.endsWith('}')) ||
      (trimmedCode.startsWith('[') && trimmedCode.endsWith(']'))) {
    try {
      JSON.parse(trimmedCode);
      return 'json';
    } catch {
      // Not valid JSON, continue
    }
  }
  
  // Python detection
  if (/^(def|class|import|from|if __name__|print\()/m.test(trimmedCode) ||
      /:\s*$/m.test(trimmedCode)) {
    return 'python';
  }
  
  // Java detection
  if (/^(public|private|protected)\s+(class|interface|enum)/m.test(trimmedCode) ||
      /System\.out\.println/m.test(trimmedCode)) {
    return 'java';
  }
  
  // C++ detection
  if (/#include\s*<.*>/.test(trimmedCode) ||
      /std::|cout|cin/.test(trimmedCode) ||
      /using namespace/.test(trimmedCode)) {
    return 'cpp';
  }
  
  // C# detection
  if (/^using\s+System/m.test(trimmedCode) ||
      /Console\.WriteLine/m.test(trimmedCode) ||
      /namespace\s+\w+/.test(trimmedCode)) {
    return 'csharp';
  }
  
  // PHP detection
  if (/^<\?php/m.test(trimmedCode) || /\$\w+\s*=/.test(trimmedCode)) {
    return 'php';
  }
  
  // Ruby detection
  if (/^(require|class|module|def|end$)/m.test(trimmedCode) ||
      /puts\s+/.test(trimmedCode)) {
    return 'ruby';
  }
  
  // Go detection
  if (/^package\s+\w+/m.test(trimmedCode) ||
      /^func\s+\w+/m.test(trimmedCode) ||
      /fmt\.Print/.test(trimmedCode)) {
    return 'go';
  }
  
  // Rust detection
  if (/^(fn|let|mut|pub|use|mod)\s+/m.test(trimmedCode) ||
      /println!\(/.test(trimmedCode)) {
    return 'rust';
  }
  
  // SQL detection
  if (/^(SELECT|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER)\s+/im.test(trimmedCode)) {
    return 'sql';
  }
  
  // Shell/Bash detection
  if (/^#!\/bin\/(bash|sh)/m.test(trimmedCode) ||
      /^(echo|cd|ls|mkdir|rm|grep|awk|sed)\s+/m.test(trimmedCode)) {
    return 'shell';
  }
  
  // TypeScript detection (check before JavaScript)
  if (/:\s*(string|number|boolean|any|void|never|unknown)/.test(trimmedCode) ||
      /interface\s+\w+/.test(trimmedCode) ||
      /<.*>\(/.test(trimmedCode)) {
    return 'typescript';
  }
  
  // JavaScript detection (default for many cases)
  if (/^(const|let|var|function|class|import|export|async|await)/m.test(trimmedCode) ||
      /console\.(log|error|warn)/.test(trimmedCode) ||
      /=>\s*\{?/.test(trimmedCode)) {
    return 'javascript';
  }
  
  // Default to JavaScript
  return 'javascript';
}

// Get file extension from window title
export function getFileExtension(filename: string): string {
  const match = filename.match(/\.([^.]+)$/);
  return match ? match[1] : '';
}

// Map file extension to language
export function extensionToLanguage(ext: string): string {
  const map: Record<string, string> = {
    'js': 'javascript',
    'jsx': 'javascript',
    'ts': 'typescript',
    'tsx': 'typescript',
    'py': 'python',
    'java': 'java',
    'cpp': 'cpp',
    'cc': 'cpp',
    'cxx': 'cpp',
    'c': 'cpp',
    'h': 'cpp',
    'hpp': 'cpp',
    'cs': 'csharp',
    'php': 'php',
    'rb': 'ruby',
    'go': 'go',
    'rs': 'rust',
    'html': 'html',
    'htm': 'html',
    'css': 'css',
    'scss': 'css',
    'sass': 'css',
    'json': 'json',
    'sql': 'sql',
    'sh': 'shell',
    'bash': 'shell',
  };
  
  return map[ext.toLowerCase()] || 'javascript';
}
