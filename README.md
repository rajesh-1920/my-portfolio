# 🚀 Rajesh Biswas - Personal Portfolio

A modern, production-ready personal portfolio website for a Computer Science student, built with HTML5, CSS3, and Vanilla JavaScript (ES6+).

## 🎯 Overview

This is a complete **Phase 1 (Frontend Only)** portfolio website showcasing projects, skills, competitive programming achievements, and contact information with a professional developer aesthetic.

**Key Features:**
- ✨ Dark/Light theme toggle with localStorage persistence
- 🎨 Modern dark developer theme with glassmorphism effects
- ⚡ Smooth scroll navigation with active link highlighting
- 📱 Fully responsive (mobile-first approach, tested on all screen sizes)
- 🔍 Project filtering system (Web, ML, Tools)
- 📝 Contact form with real-time validation
- ✅ SEO-friendly meta tags
- ♿ Accessibility-friendly (WCAG compliance)
- 🎭 Scroll reveal animations
- ⌨️ Keyboard shortcuts support (Ctrl+Shift+L for theme)

## 📁 Project Structure

```
my-portfolio/
├── README.md
├── frontend/
│   ├── index.html (Main portfolio page with all sections)
│   │
│   ├── assets/
│   │   ├── css/
│   │   │   ├── variables.css (Design tokens & custom properties)
│   │   │   ├── base.css (Reset, typography, base styles)
│   │   │   ├── components.css (Navbar, hero, cards, footer)
│   │   │   ├── skills.css (Skills section styles)
│   │   │   ├── projects.css (Projects & CP stats)
│   │   │   ├── contact.css (Contact form styles)
│   │   │   └── responsive.css (Mobile-first responsive design)
│   │   │
│   │   ├── js/
│   │   │   ├── theme.js (Dark/light mode toggle)
│   │   │   ├── nav.js (Navigation & smooth scroll)
│   │   │   ├── animations.js (Scroll reveal & typing effect)
│   │   │   ├── projects.js (Project filtering)
│   │   │   ├── contact.js (Form validation & submission)
│   │   │   └── main.js (App initialization & coordinator)
│   │   │
│   │   ├── images/ (For future image assets)
│   │   └── fonts/ (For custom fonts)
│   │
│   ├── components/ (Reusable component templates)
│   │   ├── navbar.html
│   │   ├── footer.html
│   │   └── project-card.html
│   │
│   └── pages/ (Future pages)
│       ├── projects.html
│       ├── blog.html
│       └── contact.html
│
├── backend/ (Future development - Phase 2)
├── database/ (Future development - Phase 2)
└── .gitignore
```

## 🎨 Design System

### Color Palette
- **Primary Background**: `#0f172a` (Dark navy)
- **Secondary Background**: `#1a2744` (Lighter navy)
- **Primary Accent**: `#00ff88` (Neon green)
- **Secondary Accent**: `#38bdf8` (Sky blue)
- **Text Primary**: `#e2e8f0` (Light blue-gray)
- **Text Secondary**: `#cbd5e1` (Medium blue-gray)
- **Text Tertiary**: `#94a3b8` (Dark blue-gray)

### Typography
- **Font**: Segoe UI, Tahoma, Geneva, Verdana
- **Sizes**: `fs-xs` to `fs-6xl` (12px to 60px)
- **Weights**: Light (300) to Extra Bold (800)

### Spacing & Units
- **Base Unit**: 8px
- **Scale**: `space-1` to `space-32` (4px to 128px)

## 🚀 Getting Started

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. **Open in browser**
   - Simple: Just open `frontend/index.html` in your browser
   - Or use a local server (see below)

### Local Development Server

**Python:**
```bash
cd frontend
python -m http.server 8000
# Visit http://localhost:8000
```

**Node.js:**
```bash
npx http-server frontend
# Visit http://localhost:8080
```

## 📋 Website Sections

### 1. Navigation Bar (Sticky)
- Logo with accent colors
- Smooth scroll navigation links
- Dark/Light mode toggle
- Mobile-responsive hamburger menu
- Active link highlighting based on scroll

### 2. Hero Section
- Large greeting with name
- Animated typing effect for title
- Professional summary
- CTA buttons (View Projects, Download CV)
- Animated background with gradients

### 3. About Section
- Education details
- Technical interests
- Career goals statement
- Key strengths
- Card-based layout with hover effects

### 4. Skills Section
- Programming languages (C++, Python, JavaScript, Java)
- Web development skills (HTML5, CSS3, Responsive Design)
- Tools & technologies (Git, Linux, VS Code, Docker)
- Animated progress bars with shimmer effect
- Organized in responsive grid

### 5. Projects Section
- Filterable project cards (All, Web, ML, Tools)
- Project preview images/SVGs
- Title, description, tech badges
- GitHub and Live Demo buttons
- Smooth filter animations
- Hover effects with elevation

### 6. Competitive Programming Stats
- Cards for 4 CP platforms (Codeforces, AtCoder, LeetCode, HackerRank)
- Platform ratings and stats
- Problem-solving metrics
- Difficulty level badges
- Profile links

### 7. Contact Section
- Form with validation (Name, Email, Subject, Message)
- Real-time error messages
- Success/error notifications
- Contact information cards (Email, Phone, Location, Social)
- Social media links
- Prepared for backend API integration

### 8. Footer
- About section
- Quick navigation links
- Social media links
- Copyright information
- Back to Top button

## ⌨️ Keyboard Shortcuts

- `Ctrl + Shift + L` (Cmd on Mac) - Toggle dark/light theme
- `Ctrl + Home` - Jump to top of page
- `Tab` - Navigate through interactive elements
- `Enter` - Activate buttons/links

## 🎯 JavaScript Modules

### theme.js
Manages dark/light mode with localStorage persistence.
```javascript
Theme.toggle()          // Toggle between dark and light
Theme.getTheme()        // Get current theme
Theme.setTheme(theme)   // Set specific theme
```

### nav.js
Handles smooth scrolling and navigation functionality.
```javascript
Navigation.init()            // Initialize
Navigation.closeMobileMenu() // Close mobile menu
```

### animations.js
Manages scroll reveals and typing animation.
```javascript
Animations.init()             // Initialize
Animations.triggerAnimation() // Trigger specific animation
```

### projects.js
Handles project filtering functionality.
```javascript
Projects.filterProjects(category)  // Filter by category
Projects.getAllCategories()        // Get available categories
```

### contact.js
Manages form validation and submission.
```javascript
Contact.validateForm()   // Validate entire form
Contact.resetForm()      // Reset form
Contact.showMessage()    // Show custom message
```

### main.js
Application initialization and coordination.
```javascript
App.init()  // Initialize entire app
```

## 🔧 Customization Guide

### 1. Update Personal Information
Edit `frontend/index.html`:
- Change name "Rajesh Biswas" throughout
- Update email, phone, location
- Modify education details
- Update project information
- Add your social media links

### 2. Change Color Scheme
Edit `frontend/assets/css/variables.css`:
```css
--accent-primary: #00ff88;    /* Change neon color */
--accent-secondary: #38bdf8;  /* Change secondary */
--bg-primary: #0f172a;        /* Change background */
--text-primary: #e2e8f0;      /* Change text */
```

### 3. Add More Projects
In `index.html`, duplicate a `.project-card`:
```html
<article class="project-card" data-category="web">
    <!-- Update content -->
</article>
```

### 4. Modify Skills
Edit `.skill-item` elements and adjust progress bar width values.

### 5. Change Fonts
Edit `variables.css`:
```css
--font-primary: 'Your Font Name', sans-serif;
```

### 6. Update CP Platforms
Edit `.cp-card` elements with platform stats.

## 🔗 Future Backend Integration

The contact form is prepared for backend integration:

1. In `contact.js`, replace simulated API:
```javascript
const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

2. Backend should handle:
   - Email validation
   - Form data storage
   - Confirmation emails
   - Anti-spam protection

## 📱 Responsive Breakpoints

| Breakpoint | Width | Device |
|-----------|-------|--------|
| Mobile | < 640px | Phones |
| Tablet (S) | 641px - 768px | Small tablets |
| Tablet (L) | 769px - 1024px | Large tablets |
| Desktop | 1025px+ | Desktop/Laptop |
| Large | 1280px+ | Large desktop |
| Ultra | 1536px+ | Ultra-wide/4K |

## ♿ Accessibility Features

- ✅ Semantic HTML5 elements (`<section>`, `<article>`, `<nav>`, etc.)
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus-visible indicators
- ✅ Color contrast (WCAG AA)
- ✅ Skip to main content link
- ✅ Alt text for images
- ✅ Form error aria-labels
- ✅ Screen reader support

## 🔍 SEO Optimization

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Mobile-friendly responsive design
- ✅ Fast loading performance
- ✅ Proper heading hierarchy

## 📊 Performance

- **HTML**: ~50KB
- **CSS**: ~40KB (7 files, loaded conditionally)
- **JS**: ~30KB (6 modular files)
- **Total**: ~120KB (pre-compression)
- **Gzip**: ~40KB (typical)

**Optimization Tips:**
- Minify CSS and JS in production
- Use image compression
- Enable browser caching
- Consider CDN for assets
- Lazy load images

## 🐛 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| IE11 | ⚠️ Limited |

## 🚀 Deployment Options

### GitHub Pages (Free)
1. Push to GitHub
2. Settings → Pages
3. Select `frontend` folder as source
4. Available at `username.github.io/my-portfolio`

### Netlify
1. Connect GitHub repo
2. Build command: (none)
3. Publish: `frontend`
4. Auto-deploys on push

### Vercel
1. Import project
2. Framework: None (static)
3. Root: `frontend`
4. Deploy!

### Traditional Hosting
1. Upload `frontend` folder to server
2. Configure web root to `frontend`
3. Ensure proper permissions

## 📝 Development Tips

### Adding Console Shortcuts
Access `#debug` hash to enable debug logging:
```
https://yoursite.com#debug
```

### Testing Form
Contact form stores submissions in localStorage by default (demo mode).

### Dark Mode Testing
Use keyboard shortcut: `Ctrl + Shift + L`

### Mobile Testing
- Use Firefox/Chrome DevTools
- Test on real devices when possible

## 🔄 Future Enhancements (Phase 2+)

### Backend Implementation
- [ ] Express.js/Node.js server
- [ ] MongoDB database
- [ ] Email service integration
- [ ] Admin dashboard
- [ ] User authentication

### Features to Add
- [ ] Blog system
- [ ] Project detail pages
- [ ] Search functionality
- [ ] Analytics
- [ ] Newsletter
- [ ] Comments system

### Optimizations
- [ ] Image optimization
- [ ] Code minification
- [ ] Service Worker (PWA)
- [ ] Pagination
- [ ] Infinite scroll

## 🤝 Contributing

Feel free to:
- Use as template for your portfolio
- Customize layout and design
- Add features
- Improve documentation
- Submit improvements

## 📄 License

Free to use for personal projects. Attribution appreciated!

## ✉️ Support & Questions

For issues or questions:
1. Check component templates in `components/`
2. Review stylesheet organization in `assets/css/`
3. Check JavaScript modules in `assets/js/`
4. See inline code comments

## 🎓 Learning Resources

Built using knowledge of:
- HTML5 semantic elements
- CSS3 (Flexbox, Grid, Variables)
- Vanilla JavaScript (ES6+, modules)
- Form validation patterns
- Responsive design methodology
- Web accessibility standards
- Performance optimization

---

**Portfolio by Rajesh Biswas** • Built with ❤️ using vanilla web technologies

*Last updated: February 2026*
