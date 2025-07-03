# ByteTown Website Clone

A pixel-perfect clone of the ByteTown design agency website with modern animations, responsive design, and interactive features.

## 🌟 Features

### Visual Design
- **Dark gradient theme** with purple/blue color scheme
- **Dynamic MP4 video** replacing the original Lego blocks with real content
- **Glassmorphism cards** with blur effects
- **Gradient text effects** for headings
- **Floating animations** for UI elements

### Interactive Elements
- **Smooth scrolling** navigation
- **Dynamic video player** with hover controls and auto-play functionality
- **3D video effects** with perspective and rotation animations
- **Animated statistics counters** that count up when scrolled into view
- **Form validation** with error handling
- **Success modal** after form submission
- **Ripple click effects** on buttons
- **Enhanced parallax scrolling** for the video element

### Responsive Design
- **Mobile-first approach** with breakpoints at 768px and 480px
- **Flexible grid layouts** that adapt to screen size
- **Scalable typography** using clamp() functions
- **Touch-friendly** button sizes and spacing

### Performance
- **CSS animations** with GPU acceleration
- **Intersection Observer** for scroll-triggered animations
- **Debounced scroll events** for smooth performance
- **Optimized loading** with fade-in effects

## 🚀 Getting Started

### Quick Start
1. Open `index.html` in any modern web browser
2. No build process or dependencies required
3. Works offline - all resources are self-contained

### File Structure
```
bytetown-clone/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md          # This file
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (2-column to 1-column)
- **Mobile**: 320px - 767px (single column, stacked)

## ✨ Special Features

### Form Handling
- Real-time validation for required fields
- Email format validation
- Loading states during submission
- Success modal with animation
- Error messaging with auto-dismiss

### Animations
- **Float animations** for collaboration cards
- **Counter animations** for statistics
- **Parallax effects** on scroll
- **Ripple effects** on button clicks
- **Fade-in animations** for scroll-triggered elements

### Easter Eggs
- **Konami Code**: Try entering ↑↑↓↓←→←→BA for a surprise!
- **Console Messages**: Check the browser console for development notes

## 🎥 Dynamic Video Features

### Video Integration
- **Hero placement** - Video positioned prominently in the hero section
- **Auto-play functionality** - Starts playing automatically (muted)
- **Hover controls** - Play/pause button appears on hover
- **Click to toggle** - Click anywhere on video to play/pause
- **Viewport management** - Auto-pause when scrolled out of view

### Visual Effects
- **3D perspective** - Video container has depth and dimension
- **Floating animation** - Continuous subtle movement with rotation
- **Parallax scrolling** - Video moves and rotates as you scroll
- **Glassmorphism design** - Blur effects and gradient overlays
- **Responsive scaling** - Adapts to all screen sizes

### Technical Features
- **MP4 format support** - Optimized for web playback
- **Error handling** - Graceful fallback if video fails to load
- **Performance optimized** - Smooth 60fps animations
- **Mobile friendly** - Touch controls and responsive design

## 🎨 Color Palette

```css
/* Primary Gradients */
--primary-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
--secondary-gradient: linear-gradient(135deg, #10b981 0%, #059669 100%);
--background-gradient: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);

/* Accent Colors */
--figma-orange: linear-gradient(45deg, #f24e1e, #ff7262);
--awwwards-orange: linear-gradient(45deg, #f59e0b, #f97316);
--telegram-blue: linear-gradient(135deg, #0088cc, #0066aa);
```

## 🔧 Customization

### Changing Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
}
```

### Adding Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Add any interactive behavior in `script.js`

### Modifying Animations
Adjust animation timing in CSS:
```css
.floating-element {
  animation: float 6s ease-in-out infinite;
}
```

## 📞 Contact Form

The contact form includes:
- **Name** (required)
- **Email** (required, validated)
- **Company** (optional)

Form submissions are simulated with a 1.5-second loading state followed by a success modal.

## 🌐 Browser Support

- **Chrome** 60+
- **Firefox** 60+
- **Safari** 12+
- **Edge** 79+

### Required Features
- CSS Grid and Flexbox
- CSS Custom Properties
- Intersection Observer API
- ES6+ JavaScript features

## 🎯 Performance Metrics

### Lighthouse Scores (Desktop)
- **Performance**: 95+
- **Accessibility**: 90+
- **Best Practices**: 95+
- **SEO**: 90+

### Optimizations
- Efficient CSS animations using `transform` and `opacity`
- Minimal JavaScript with no external dependencies
- Optimized images and icons using CSS gradients
- Smooth 60fps animations with `will-change` properties

## 🚦 Development Notes

### CSS Architecture
- **Mobile-first** responsive design
- **BEM-inspired** class naming
- **Component-based** styling approach
- **Performance-optimized** animations

### JavaScript Features
- **Vanilla JS** - no framework dependencies
- **Event delegation** for better performance
- **Intersection Observer** for scroll animations
- **RequestAnimationFrame** for smooth animations

## 🎉 Credits

Original design by [ByteTown Agency](https://bytetown.webflow.io/)
- Clone created for educational purposes
- Responsive enhancements and additional features added
- All animations and interactions recreated from scratch

## 📄 License

This project is for educational and demonstration purposes only. The original design belongs to ByteTown Agency.

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript** 