# 🎌 Lakshay's Portfolio

A stunning anime-themed portfolio website featuring warrior animations, fire particles, floating elements, and an immersive dark aesthetic inspired by Demon Slayer.

![Portfolio Banner](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.11-FF0055?style=for-the-badge&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

### 🎭 Epic Animations
- **Warrior Intro Scene** - Cinematic opening with samurai warrior animation
- **Entry Page** - Gaming-style landing page with animated warrior character
- **Fire Particle System** - 50+ realistic flame particles with lifecycle animations
- **Floating Elements** - Dynamic kanji characters and symbols floating across the screen
- **Custom Cursor** - Interactive custom cursor that follows mouse movement
- **Parallax Effects** - Smooth parallax scrolling throughout sections

### 🌟 Interactive Sections
- **Hero Section** - Animated text, glowing energy circles, and floating orbs
- **About Section** - Animated stats, rotating background elements, PEC & IIT Ropar details
- **Skills Section** - 7 skill categories with hover effects and interactive animations
- **Projects Section** - 10 featured projects with enhanced hover effects
- **Experience Timeline** - Leadership positions and achievements with animated cards
- **Contact Form** - Functional email integration using EmailJS

### 🎨 Visual Effects
- Dark demon slayer aesthetic (Crimson #e63946, Gold #ffd700)
- Scanline overlay for retro CRT effect
- Neon glow effects and text shimmer
- Gradient borders and animated dividers
- Glassmorphism UI elements

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/lakshaymittal45/Lakshay-s-Portfolio.git
cd Lakshay-s-Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

See [EMAIL_SETUP.md](EMAIL_SETUP.md) for detailed EmailJS configuration.

4. **Start development server**
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 📦 Build for Production

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 🛠️ Tech Stack

### Core
- **React 18.3** - UI library
- **Vite 5.4** - Build tool and dev server
- **JavaScript** - Programming language

### Animations
- **Framer Motion 11.11** - Advanced animations and gestures
- **GSAP** - Professional-grade animation library
- **React Type Animation** - Typewriter effect

### Styling
- **CSS3** - Custom styling with modern features
- **Canvas API** - Fire particle rendering

### Email
- **EmailJS** - Email service for contact form

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── assets/              # Static assets (resume PDF, images)
│   ├── components/
│   │   ├── IntroScene/      # Warrior intro animation
│   │   ├── EntryPage/       # Landing page with warrior
│   │   ├── Hero/            # Hero section
│   │   ├── About/           # About section
│   │   ├── Skills/          # Skills showcase
│   │   ├── Projects/        # Projects grid
│   │   ├── Experience/      # Timeline
│   │   ├── Contact/         # Contact form
│   │   ├── FireParticles/   # Fire effect system
│   │   ├── FloatingElements/# Floating symbols
│   │   ├── ParticleField/   # Background particles
│   │   ├── CustomCursor/    # Custom cursor
│   │   ├── AnimeCompanion/  # Side character
│   │   └── Navbar/          # Navigation bar
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles & animations
│   └── main.jsx             # Entry point
├── .env                     # Environment variables (not in git)
├── .env.example             # Environment template
├── EMAIL_SETUP.md           # EmailJS setup guide
└── README.md                # You are here!
```

## 🎨 Customization

### Colors
Edit color variables in `src/index.css`:
```css
--color-primary: #e63946;    /* Crimson red */
--color-accent: #ffd700;     /* Gold */
--color-bg: #06060f;         /* Dark background */
```

### Content
- **Personal Info**: Update in `src/components/Hero/Hero.jsx`
- **Projects**: Modify array in `src/components/Projects/Projects.jsx`
- **Skills**: Edit categories in `src/components/Skills/Skills.jsx`
- **Experience**: Update timeline in `src/components/Experience/Experience.jsx`

## 📧 Contact Form Setup

The contact form uses EmailJS for email delivery. Follow these steps:

1. Create free account at [EmailJS.com](https://www.emailjs.com/)
2. Connect your Gmail account
3. Create email template (see [EMAIL_SETUP.md](EMAIL_SETUP.md))
4. Add credentials to `.env` file
5. Test the form!

Free tier: 200 emails/month

## 🌐 Deployment

### GitHub Pages (Free Forever) ✅🎉

**Your site will be live at:** `https://lakshaymittal45.github.io/Lakshay-s-Portfolio/`

**Step 1: Push to GitHub**
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

**Step 2: Enable GitHub Pages**
1. Go to your GitHub repository
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: **GitHub Actions** ✅
4. That's it! Wait 2-3 minutes for first deployment

**✨ CI/CD Active!** Every push to `main` automatically rebuilds and deploys your site.

**No environment variables needed on GitHub!** EmailJS keys work from client-side.

### Alternative: Vercel + GitHub (Bonus CI/CD)

**Step 1: Push to GitHub** (same as above)

**Step 2: Deploy on Vercel**
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your portfolio repository
4. Vercel auto-detects Vite configuration ✅
5. Add environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
6. Click "Deploy"

**Step 3: Add Custom Domain (GitHub Student Pack)**
1. Get free domain from [Namecheap](https://education.github.com/pack) (.me domain)
2. In Vercel project → Settings → Domains
3. Add your domain and follow DNS instructions
4. SSL certificate auto-configured 🔒

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Lakshay Mittal**
- GitHub: [@lakshaymittal45](https://github.com/lakshaymittal45)
- LinkedIn: [lakshaymittal45](https://linkedin.com/in/lakshaymittal45)
- Email: mittalakshay89@gmail.com

## 🙏 Acknowledgments

- Inspired by Demon Slayer anime aesthetic
- Fire particles inspired by traditional Japanese art
- Animation techniques from Framer Motion & GSAP communities

## 🐛 Known Issues

None at the moment! If you find any, please open an issue.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

<div align="center">
  Made with ❤️ and ⚔️ by Lakshay Mittal
  <br>
  <sub>A warrior's portfolio for the modern age</sub>
</div>
