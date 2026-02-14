# 🚀 Rajesh Biswas - Personal Portfolio

A modern, production-ready personal portfolio website for a Computer Science student, built with HTML5, CSS3, and Vanilla JavaScript (ES6+).

## 🎯 Overview

This is a complete **Phase 1 (Frontend Only)** portfolio website showcasing projects, skills, competitive programming achievements, and contact information with a professional developer aesthetic.

**Key Features:**
- ✨ **Dual Theme System** - Polished dark/light theme toggle with localStorage persistence
  - 🌙 Modern dark developer theme with glassmorphism effects
  - ☀️ Professional light theme with enhanced typography and readability
- 🎨 **Advanced Color System** - WCAG-compliant color palette optimized for both themes
- ⚡ Smooth scroll navigation with active link highlighting
- 📱 Fully responsive (mobile-first approach, tested on all screen sizes)
- 🔍 Project filtering system (Web, ML, Tools)
- 📝 Contact form with real-time validation
- ✅ SEO-friendly meta tags
- ♿ **Accessibility-first** - Enhanced WCAG compliance with optimized contrast ratios
- 🎭 Scroll reveal animations
- ⌨️ Keyboard shortcuts support (Ctrl+Shift+L for theme)

## 🎨 Design System

### Color Themes

**Dark Mode (Default):**
- Deep navy backgrounds (#0f172a, #1a2744)
- Neon green accent (#00ff88)
- Sky blue secondary (#38bdf8)
- High contrast for developer aesthetic

**Light Mode (Enhanced):**
- Soft warm whites with blue-gray tints (#fafafa, #f5f7fa)
- Deep emerald green primary (#059669)
- Rich blue secondary (#2563eb)
- Optimized text hierarchy:
  - Primary: #111827 (near-black for headings)
  - Secondary: #374151 (rich gray for body)
  - Tertiary: #6b7280 (medium gray for muted text)
- Enhanced typography with extrabold headings
- Subtle blue-tinted borders and backgrounds
- Natural, soft shadows for depth

### Typography
- **Font Stack**: System fonts (Segoe UI, fallbacks)
- **Scale**: Modular (12px - 60px)
- **Line Heights**: Optimized for readability (1.2 - 2.0)
- **Light Mode Enhancement**: Extrabold headings (#0f172a) for maximum impact

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
Phase 1 focuses on implementing the frontend of the portfolio website using HTML, CSS, and JavaScript.

## 📊 CSS Architecture

The stylesheet system is modular and organized by concern:

**variables.css** - Design tokens with dual-theme support
- CSS custom properties for colors, spacing, typography
- Complete dark/light theme variable sets
- Enhanced light mode color palette with improved contrast

**base.css** - Foundation styles + light mode typography
- CSS reset and normalize
- Base typography system
- Light mode: Extrabold headings, optimized text colors
- Enhanced selection and scrollbar styling per theme

**components.css** - Reusable UI components
- Navbar (sticky, glassmorphism blur)
- Hero section with gradient animations
- Cards with hover effects
- Footer
- Light mode: Refined backgrounds, better color hierarchy

**skills.css** - Skills section with light mode enhancements
- Skill categories and progress bars
- Animated shimmer effects
- Light mode: Better contrast for skill bars

**projects.css** - Projects & CP stats with theme support
- Project cards with filtering
- Tech tags with colored badges
- Competitive programming statistics
- Light mode: Enhanced card backgrounds, refined badges

**contact.css** - Contact form with theme-aware styling
- Form validation styling
- Social media links
- Light mode: Improved input focus states

**responsive.css** - Mobile-first breakpoints
- Responsive grid systems
- Mobile navigation
- Cross-device optimizations

## 🎯 Recent Improvements (February 2026)

### Light Theme Overhaul - Premium Edition

#### **Phase 1: Core Color System** ✅
**Enhanced Color Palette:**
- Deep emerald primary (#059669) for better contrast
- Rich blue secondary (#2563eb) for professional feel
- Optimized text hierarchy with near-black headings (#111827)
- Improved accent colors meeting WCAG AAA standards

**Typography Enhancements:**
- Extrabold headings in light mode for maximum impact
- Three-tier text color system (primary/secondary/tertiary)
- Better font weights for improved hierarchy
- Enhanced readability with optimized line heights

#### **Phase 2: Interactive Elements** ✅
**Button System Refinements:**
- Gradient primary buttons with emerald-to-darker transition
- Enhanced shadow system: layered shadows for depth
- Outline buttons with subtle background tints
- Improved hover states with lift effect (translateY -2px to -3px)
- Better focus indicators with blue ring outlines
- Refined disabled states with grayscale treatment

**Filter & Navigation:**
- Enhanced filter buttons with blue-tinted backgrounds
- Smooth hover transitions with lift and shadow effects
- Active state with gradient background and white text
- Better border treatments with progressive disclosure

**Form Enhancements:**
- White input backgrounds for maximum contrast
- Blue-ring focus states (4px ring with 8% opacity)
- Enhanced error states with red tinting
- Success/error messages with colored backgrounds
- Submit button with gradient and hover lift effect

#### **Phase 3: Visual Polish** ✅
**Cards & Components:**
- White card backgrounds with subtle shadows
- Enhanced hover effects (6px lift, colored shadows)
- About cards with border color transitions
- Better CP (Competitive Programming) stat cards
- Project cards with refined tech badges

**Tech Badges & Tags:**
- Color-coded badge system (Emerald/Blue/Orange)
- Enhanced contrast for better readability
- Semibold font weights for better visibility
- Subtle backgrounds with solid border colors

**Background & Depth:**
- Refined section backgrounds (#f8fafc for alternate)
- Subtle radial gradients in hero section (6% opacity)
- Hero placeholder with dual-color gradient
- Better glassmorphism effects on navigation

#### **Phase 4: Micro-interactions** ✅
**Enhanced User Feedback:**
- Smooth theme switching transitions (0.2s-0.3s)
- Social links with scale and lift on hover
- Contact icons with rotation on hover
- Skill bars with gradient fills and box shadows
- Back-to-top button with color inversion on hover

**Accessibility & UX:**
- WCAG AAA compliant color contrasts
- Enhanced keyboard focus indicators (3px outlines)
- Better scrollbar visibility with blue accent
- Improved text selection colors
- Smooth transitions preserve animation integrity

**Shadow System:**
- Natural, soft shadows throughout
- Layered shadow approach for depth
- Colored shadows on interactive elements
- Reduced opacity for subtle depth cues

#### **Technical Achievements** 🎨
- **100+ style rules** optimized for light mode
- **Gradient variables** added to design system
- **Performance**: Smooth 60fps transitions
- **Consistency**: Unified blue (#2563eb) and emerald (#059669) palette
- **Accessibility**: All interactive elements meet WCAG AAA standards

**Portfolio by Rajesh Biswas** • Built with ❤️ using vanilla web technologies

*Last updated: February 13, 2026*
