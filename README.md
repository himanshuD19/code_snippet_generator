# Code Snippet Generator 🎨

A beautiful, modern web application for creating customizable code snippets and exporting them as images. Perfect for sharing code on social media, documentation, or presentations.

![Code Snippet Generator](https://img.shields.io/badge/React-18.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-blue)

## ✨ Features

### 🎯 Core Features
- **Monaco Editor Integration** - Professional code editor with IntelliSense
- **Multi-Language Support** - 15+ programming languages including JavaScript, Python, TypeScript, Java, C++, PHP, and more
- **Syntax Highlighting** - Beautiful syntax highlighting for all supported languages
- **Export to Image** - Download your code snippets as high-quality PNG images (1x, 2x, or 3x quality)

### 🎨 Customization Options
- **Themes** - Choose from Dark, Light, or High Contrast themes
- **Line Numbers** - Toggle line numbers on/off
- **Font Size** - Adjustable font size (10-24px)
- **Padding Control** - Customize padding around your code (0-100px)
- **Background Types**:
  - Solid colors with color picker
  - Beautiful gradient backgrounds with dual color control
  - **12 Preset Gradients** - One-click gradient themes (Sunset, Ocean, Forest, Purple Haze, Fire, Ice, Rose, Mint, Peach, Sky, Cosmic, Candy)
- **Window Mockup** - Add macOS-style window controls with customizable title
- **Border Radius** - Adjust corner roundness (0-30px)
- **Live Preview** - See your changes in real-time

### 🤖 Smart Features
- **Auto-Detect Language** - Automatically detect programming language from code patterns
- **Smart Window Titles** - Auto-update window title based on selected language
- **Copy to Clipboard** - One-click code copying
- **Keyboard Shortcuts**:
  - `Ctrl/Cmd + S` - Export as image
  - `Ctrl/Cmd + D` - Auto-detect language
  - `Ctrl/Cmd + Shift + C` - Copy code to clipboard

### 💾 Additional Features
- **LocalStorage Persistence** - Your settings and code are automatically saved
- **Toast Notifications** - User-friendly notifications for actions
- **Smooth Animations** - Powered by Framer Motion
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Modern UI** - Built with TailwindCSS and Lucide icons

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd /home/himanshudwivedi/Pictures/code-snippet
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎮 Usage

1. **Enter Your Code** - Type or paste your code into the Monaco editor
2. **Select Language** - Choose manually or click "Auto-detect" to detect automatically
3. **Customize Appearance**:
   - Pick a theme (Dark, Light, or High Contrast)
   - Adjust font size with the slider
   - Toggle line numbers on/off
   - Set padding to your preference
   - Choose between solid color or gradient background
   - Use preset gradients or customize colors using the color pickers
   - Enable window mockup with custom title
   - Adjust border radius and export quality
4. **Quick Actions**:
   - Click **Auto-detect** to identify the programming language
   - Click **Copy** icon to copy code to clipboard
   - Click **Export** to download as high-quality PNG
5. **Keyboard Shortcuts** - Use shortcuts for faster workflow (see Smart Features above)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2 with TypeScript
- **Code Editor**: Monaco Editor (VS Code's editor)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Image Export**: html2canvas
- **Notifications**: React Toastify
- **Build Tool**: Vite
- **State Management**: React Hooks + LocalStorage

## 📁 Project Structure

```
code-snippet/
├── src/
│   ├── components/
│   │   ├── CodeEditor.tsx      # Monaco editor with window mockup
│   │   └── ControlPanel.tsx    # All customization controls
│   ├── hooks/
│   │   └── useLocalStorage.ts  # LocalStorage persistence hook
│   ├── utils/
│   │   └── languageDetector.ts # Smart language detection
│   ├── App.tsx                 # Main app with smart features
│   ├── main.tsx               # Entry point
│   ├── types.ts               # TypeScript types & presets
│   └── index.css              # Global styles
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Adding New Languages
Edit `src/types.ts` and add to the `LANGUAGES` array:
```typescript
{ value: 'your-language', label: 'Your Language' }
```

### Adding New Themes
Edit `src/types.ts` and add to the `THEMES` array:
```typescript
{ value: 'theme-id', label: 'Theme Name' }
```

### Modifying Default Settings
Edit `DEFAULT_SETTINGS` in `src/types.ts` to change initial values.

## 🌟 Features in Detail

### Monaco Editor
- Full VS Code editing experience
- IntelliSense and autocomplete
- Syntax validation
- Multiple cursor support
- Find and replace
- Command palette

### Smart Language Detection
- Pattern-based detection for 15+ languages
- Recognizes syntax patterns, keywords, and file structures
- Auto-updates window title to match detected language
- Instant feedback with toast notifications

### Window Mockup
- macOS-style window controls (red, yellow, green buttons)
- Customizable window title
- Automatically updates based on language
- Professional look for screenshots

### Gradient Presets
- 12 beautiful pre-designed gradients
- One-click application
- Covers various color schemes (warm, cool, vibrant)
- Custom gradient support with color pickers

### Export Quality
- Configurable scale: 1x, 2x, or 3x for different quality needs
- Transparent background support
- Preserves all styling and colors
- Optimized PNG output
- High DPI support for retina displays

### Keyboard Shortcuts
- Productivity-focused shortcuts
- Works across all major browsers
- Non-intrusive (doesn't conflict with editor shortcuts)
- Visual feedback for all actions

### Responsive Design
- Mobile-first approach
- Adaptive layout for all screen sizes
- Touch-friendly controls
- Optimized for both portrait and landscape
- Scrollable control panel on smaller screens

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Monaco Editor team for the amazing code editor
- TailwindCSS for the utility-first CSS framework
- Framer Motion for smooth animations
- All the open-source libraries that made this possible

---

<div align="center">

### Made with ❤️ by [Himanshu Dwivedi](https://github.com/himanshudwivedi)

Built using React, TypeScript, and TailwindCSS

**© 2026 Code Snippet Generator • v1.0**

</div>
