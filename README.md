# Anniversary Storybook 💕

A beautiful, interactive digital storybook to celebrate 5 years together. Built with React and Framer Motion.

## Features

✨ **Scroll-based animations** - Elegant transitions as you scroll through your story
📖 **Chapter structure** - Five beautifully designed chapters
⏱️ **Timeline** - Interactive timeline showing your journey together
🖼️ **Photo gallery** - Page-flip effect for your favorite moments
✍️ **Typewriter effect** - Love letter that writes itself
🎨 **Grain texture** - Authentic "paper" feel
📱 **Mobile optimized** - Perfect on any device

## Getting Started

### Prerequisites

- Node.js 18+ installed on your computer
- npm (comes with Node.js)

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

3. **Open your browser:**
The app will automatically open at `http://localhost:3000`

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` folder, ready to deploy.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Customization Guide

### 1. Change the Story Content

Edit `src/App.jsx` to customize:

**Cover Page:**
```javascript
Five years.<br />
A thousand sunsets.<br />
One story.
```

**Chapter 1 paragraphs:**
```javascript
const paragraphs = [
  "Your story here...",
  // Add more paragraphs
];
```

**Timeline milestones:**
```javascript
const milestones = [
  { 
    year: "Year 1", 
    title: "Your Title", 
    description: "Your description...", 
    side: "left" 
  },
  // Add more milestones
];
```

**Love letter:**
```javascript
const fullText = `Your love letter here...`;
```

### 2. Add Your Photos

Replace the photo placeholders in the gallery:

1. Add your images to `src/assets/` folder
2. Import them in `App.jsx`:
```javascript
import photo1 from './assets/photo1.jpg';
```
3. Update the PhotoCard component to use real images instead of the placeholder emoji

### 3. Customize Colors

Edit `src/App.css` or the inline styles in `App.jsx`:

- **Background:** `#F9F7F2` (Warm Paper)
- **Accent:** `#D68C8C` (Dusty Rose)
- **Text:** `#4A3F3F` (Deep Charcoal)

### 4. Change Fonts

The project uses:
- **Cormorant Garamond** (serif, italic) for titles
- **Inter** (sans-serif) for body text

To change fonts, edit the Google Fonts link in `index.html`

## Project Structure

```
anniversary-storybook/
├── src/
│   ├── App.jsx          # Main component with all chapters
│   ├── App.css          # All styling
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
└── vite.config.js       # Vite configuration
```

## Technologies Used

- **React 18** - UI framework
- **Framer Motion 11** - Smooth animations
- **Vite** - Fast build tool
- **Google Fonts** - Typography

## Deployment

This can be deployed to:

- **Vercel** - `vercel deploy`
- **Netlify** - Drag the `dist/` folder
- **GitHub Pages** - Use `gh-pages` package
- Any static hosting service

## Tips for Personalization

1. **Add more chapters** - Create new chapter components
2. **Include audio** - Add background music or voice messages
3. **Interactive elements** - Add clickable memories or hidden surprises
4. **Video integration** - Embed special video messages
5. **Download option** - Add a button to save as PDF

## License

This is a personal gift project - use it however you'd like! ❤️

---

*Made with love using React and Framer Motion*
