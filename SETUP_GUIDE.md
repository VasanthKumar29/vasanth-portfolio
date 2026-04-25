# 🚀 Vasanth Kumar BM — Portfolio Setup Guide

## Prerequisites

Make sure these are installed on your machine:

1. **Node.js** (v16 or higher) — https://nodejs.org/en/download
   - Download the **LTS version** (recommended)
   - After installing, verify: open terminal and run `node -v` and `npm -v`

2. **VS Code** — https://code.visualstudio.com/download

---

## Step-by-Step Setup

### Step 1: Extract the ZIP

Unzip `vasanth-portfolio.zip` to any folder on your computer.
Example: `C:\Users\Vasanth\Desktop\vasanth-portfolio`

---

### Step 2: Open in VS Code

**Option A:** Right-click the folder → "Open with Code"

**Option B:** Open VS Code → File → Open Folder → Select the `vasanth-portfolio` folder

---

### Step 3: Open Terminal in VS Code

Press `Ctrl + `` ` `` ` (backtick) or go to **Terminal → New Terminal**

---

### Step 4: Install Dependencies

In the terminal, type:

```bash
npm install
```

This downloads all packages. It takes 1–3 minutes. You'll see a `node_modules` folder appear.

---

### Step 5: Add Your Photo

Your photo is already included at:
```
src/assets/vasanth.jpeg
```

If you want to replace it later, just overwrite that file with a new image (keep the same filename `vasanth.jpeg`).

---

### Step 6: Start the Development Server

```bash
npm start
```

Your browser will automatically open at **http://localhost:3000**

The site hot-reloads — any changes you save instantly update in the browser!

---

### Step 7: Build for Production (when ready to deploy)

```bash
npm run build
```

This creates a `build/` folder with optimized files ready to deploy.

---

## Folder Structure

```
vasanth-portfolio/
├── public/
│   └── index.html          ← Main HTML shell
├── src/
│   ├── assets/
│   │   └── vasanth.jpeg    ← Your profile photo
│   ├── components/
│   │   ├── Navbar.js/.css  ← Top navigation
│   │   ├── Hero.js/.css    ← Landing section
│   │   ├── About.js/.css   ← About me
│   │   ├── Experience.js/.css ← Work experience
│   │   ├── Skills.js/.css  ← Technical skills
│   │   ├── Projects.js/.css ← Projects
│   │   ├── Education.js/.css ← Education & certs
│   │   ├── Contact.js/.css ← Contact form
│   │   └── Footer.js/.css  ← Footer
│   ├── App.js              ← Root component + theme context
│   ├── App.css             ← Global section styles
│   ├── index.js            ← Entry point
│   └── index.css           ← Global CSS + theme variables
└── package.json            ← Project config
```

---

## Customization Tips

### Change accent colors (index.css)
```css
[data-theme="dark"] {
  --accent-primary: #38bdf8;   /* ← Change this color */
}
```

### Add/edit experience (Experience.js)
Edit the `experiences` array at the top of the file.

### Add/edit projects (Projects.js)
Edit the `projects` array at the top of the file.

### Change skill percentages (Skills.js)
Edit the `level` values (0–100) in the `skillGroups` array.

---

## Deploying Online (Free Options)

### Option A: Vercel (Recommended — Easiest)
1. Go to https://vercel.com and sign up with GitHub
2. Push your code to a GitHub repository
3. Import the repo in Vercel → it auto-deploys!

### Option B: Netlify
1. Run `npm run build`
2. Go to https://netlify.com → drag & drop the `build/` folder

### Option C: GitHub Pages
1. Run `npm install gh-pages --save-dev`
2. Add to package.json: `"homepage": "https://vasanthkumar29.github.io/portfolio"`
3. Run `npm run build && npx gh-pages -d build`

---

## Recommended VS Code Extensions

Install these for the best experience:
- **ES7+ React/Redux/React-Native snippets** — Quick React code snippets
- **Prettier - Code formatter** — Auto-formats your code
- **Auto Rename Tag** — Renames closing HTML tags automatically
- **GitLens** — Enhanced Git capabilities

---

## Troubleshooting

**`npm install` fails:**
- Try `npm install --legacy-peer-deps`
- Or delete `node_modules` folder and try again

**Port 3000 already in use:**
- The terminal will ask "Would you like to use a different port?" → Press `Y`

**Photo not showing:**
- Make sure the file is at `src/assets/vasanth.jpeg` (exact filename, lowercase)

---

Built with ❤️ using React.js, CSS Variables, and smooth animations.
