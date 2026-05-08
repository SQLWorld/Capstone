# Argyle Magnet School - Website Presentation

A stunning, interactive HTML presentation showcasing the new Argyle Magnet School website.

## 🎯 Features

- **Interactive Slides**: Navigate with arrow keys, buttons, or touch gestures
- **Particle Effects**: Dynamic particle system with mouse interaction
- **Glass Morphism Design**: Modern, elegant UI matching the website's aesthetic
- **Smooth Animations**: Beautiful transitions and staggered reveals
- **Custom Cursor**: Unique cursor design
- **Progress Bar**: Visual progress indicator
- **Fully Responsive**: Works on desktop, tablet, and mobile

## 🚀 Quick Start

### View Locally

Simply open `index.html` in your web browser. No server or build process required!

### Deploy to GitHub Pages

1. **Create a new GitHub repository** (e.g., `argyle-presentation`)

2. **Upload files to GitHub**:
   ```bash
   cd argyle-presentation
   git init
   git add .
   git commit -m "Initial commit: Argyle presentation"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/argyle-presentation.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

4. **Your presentation will be live at**:
   `https://YOUR_USERNAME.github.io/argyle-presentation/`

## 🎮 Controls

- **Arrow Keys** (← →): Navigate between slides
- **Space Bar**: Next slide
- **Home/End**: Jump to first/last slide
- **Mouse/Touch**: Click buttons or swipe on mobile
- **Hover**: Interactive elements respond to mouse movement

## 📝 Customization

### Change Presenter Name

Edit line 598 in `index.html`:
```html
<p class="author">Presented by [Your Name]</p>
```

### Modify Content

All slides are clearly marked with HTML comments. Edit the content within each `<div class="slide">` section.

### Adjust Colors

The presentation uses Argyle's color palette:
- **Blue**: `#38bdf8`
- **Purple**: `#a855f7`
- **Pink**: `#ec4899`
- **Background**: `#0f172a`

Search and replace these hex codes in the CSS section to customize.

## 📦 File Structure

```
argyle-presentation/
├── index.html          # Main presentation file (all-in-one)
└── README.md          # This file
```

## 🎨 Design Features

- **Glass Morphism**: Frosted glass effect on cards
- **Gradient Text**: Animated gradient headings
- **Particle System**: Interactive canvas particles
- **Smooth Transitions**: Cubic-bezier animations
- **Staggered Reveals**: Sequential item animations
- **Custom Scrollbar**: Styled scrollbar matching theme

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 🔧 Technical Details

- **Pure HTML/CSS/JavaScript**: No dependencies or build tools
- **Canvas API**: For particle effects
- **CSS Animations**: Hardware-accelerated transitions
- **Responsive Design**: Mobile-first approach

## 📄 License

Created for Argyle Magnet School. All rights reserved.

---

**Built with ❤️ for Argyle Magnet School**





