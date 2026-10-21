# saneee.in — Designed to be distinguished.

> **Digital Presence Studio & Engineering Collective**  
> Sub-second, mobile-first flagships engineered to convert and distinguish your brand.

---

## 🌐 Live Deployments
- **Production (Firebase CDN)**: [https://saneee-web-2026.web.app](https://saneee-web-2026.web.app)
- **Alternate Mirror**: [https://saneee-web-2026.firebaseapp.com](https://saneee-web-2026.firebaseapp.com)

---

## ⚡ Architecture & Tech Stack
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Static Export `output: "export"`)
- **Runtime / UI**: React 19, TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4, Vanilla CSS Design System Tokens
- **Smooth Scrolling**: [Lenis Smooth Scroll](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting**: Firebase Hosting with global edge CDN caching

---

## 🎨 Brand Design Tokens
- **Ink**: `#0A0A0A`
- **Paper**: `#F6F5F0`
- **Cursor Green**: `#C4F135` (High-contrast focal accent)
- **Depth**: `#141414`
- **Mist**: `#E2E1DC`
- **Ash**: `#7C7C76`

### Typography
- **Display**: `Syne` (600, 700, 800)
- **Body**: `Inter` (300, 400, 500)
- **Labels & HUD**: `Space Mono` (400, 700)

---

## 📂 Project Structure
```
saneee-web/
├── public/
│   ├── logo/          # Brand wordmarks & kinetic MP4 video reel
│   ├── team/          # Core team portrait photographs
│   └── works/         # Pinned case study visual captures
├── src/
│   ├── app/           # Next.js App Router (layout, page, globals)
│   ├── components/    # Modular UI components
│   │   ├── FloatingHeader.tsx    # Frosted pill nav with sub-label
│   │   ├── HeroWordmark.tsx      # HUD bar & 9-discipline workbench
│   │   ├── HeroMediaPanel.tsx    # Kinetic brand video reel player
│   │   ├── ScrollManifesto.tsx   # Word-by-word scrubbed manifesto
│   │   ├── HomeWorks.tsx         # Pinned stacking case study cards
│   │   ├── HomeAbout.tsx         # Concentric human orbit rings
│   │   ├── HomeWhyUs.tsx         # Bento grid with Lighthouse 100/100 bar
│   │   ├── Marquee.tsx           # Infinite edge-masked marquee
│   │   ├── CraftDetails.tsx      # Design vs Engineering tab switcher
│   │   ├── Footer.tsx            # Dual-theme footer with 4 live LCD clocks
│   │   ├── FlimCommandDock.tsx   # Cmd+K quick filter modal
│   │   └── CustomCursor.tsx      # Magnet cursor with morphing state
│   ├── data/          # Typed data layers (projects, services, team, industries)
│   └── types/         # Strict TypeScript schemas
├── firebase.json      # Firebase Hosting configuration
└── package.json
```

---

## 🛠️ Development & Build

### Install Dependencies
```bash
npm install
```

### Run Locally
```bash
npm run dev
# Open http://localhost:3000
```

### Static Production Build
```bash
npm run build
# Compiles static HTML/CSS/JS export into the /out directory
```

### Deploy to Firebase
```bash
firebase deploy --only hosting
```

---

## 📩 Contact
- **Email**: [saneeedotin@gmail.com](mailto:saneeedotin@gmail.com)
- **Instagram**: [@saneeedotin](https://instagram.com/saneeedotin)
- **Location**: Mumbai, Maharashtra, India