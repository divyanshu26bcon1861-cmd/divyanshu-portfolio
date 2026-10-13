# Divyanshu Jain — Premium Personal Portfolio Website

A world-class, modern, ultra-responsive developer portfolio website designed for **Divyanshu Jain**, first-year B.Tech CSE (AI & ML) student at JECRC University, Jaipur.

Designed with a futuristic, minimal dark theme inspired by high-end developer portfolios, modern SaaS landing pages, and award-winning interactive agency websites.

---

## 🌟 Visual Identity & Design Highlights

- **Aesthetic:** Deep midnight black (`#07080e`, `#0b0d17`) with electric violet (`#8b5cf6`) and ice cyan (`#06b6d4`) accents.
- **Glassmorphism:** Frosted glass cards with backdrop blur (`backdrop-blur-xl`), fine borders (`border-white/10`), and interactive cursor spotlight glow.
- **Hero Canvas:** Interactive particle constellation background that reacts smoothly to mouse hover and pauses when off-screen.
- **Micro-Interactions:**
  - Dynamic typewriter effect cycling through roles (*Aspiring Software Developer*, *Tech Enthusiast*, *Problem Solver*, *Future Full-Stack Developer*, *AI & ML Explorer*).
  - Ambient glowing blobs and subtle dot grid matrix.
  - Active navigation spy with `IntersectionObserver` highlighting sections during scroll.
  - Interactive project category filters (*All*, *Web Development*, *Applications*, *Tools & Experiments*).
  - Project Quick-View Modals with detailed specs and feature breakdowns.
  - Interactive Curriculum Vitae / Resume modal with one-click **Print / Save as PDF** support.
  - Functional contact form with validation, live toast notifications, and mailto fallback resilience.

---

## 📁 Project Architecture

```
portfolio/
├── index.html                 # Semantic HTML5, SEO meta tags, OpenGraph, accessible structure
├── css/
│   └── styles.css             # Glassmorphism, glow effects, canvas, typography & print styles
├── js/
│   ├── portfolio-data.js      # Centralized single-source configuration (bio, education, skills, projects)
│   ├── main.js                # Core UI engine: typing effect, canvas particles, navigation, resume modal
│   ├── projects.js            # Dynamic project gallery, category filters, interactive previews & modal
│   └── contact.js             # Form validation, email submission, copy-to-clipboard, toast system
├── assets/
│   ├── profile.jpg            # Divyanshu's portrait photograph
│   └── favicon.svg            # Stylized DJ monogram in electric violet-to-cyan gradient
└── README.md                  # Project documentation & customization guide
```

---

## 🚀 How to Run Locally

You don't need any complex build tooling or Node.js to preview the portfolio.

### Option 1: Open Directly in Browser
Simply double-click `index.html` or drag it into any modern web browser (Google Chrome, Safari, Microsoft Edge, Brave, Firefox).

### Option 2: Run with Python HTTP Server (Recommended)
Open your terminal in this directory and run:

```bash
# Python 3
python3 -m http.server 8000
```
Then visit:
`http://localhost:8000`

---

## 🛠️ How to Customize Your Portfolio

All personal information, education, skills, projects, and social links are centralized in a clean, reusable data file:

👉 **[`js/portfolio-data.js`](file:///Users/divyanshujain/Documents/portfolio/js/portfolio-data.js)**

### 1. Update Personal Info & Social Links
Open `js/portfolio-data.js` and edit the `personalInfo` object:
```javascript
personalInfo: {
  fullName: "DIVYANSHU JAIN",
  linkedin: "https://linkedin.com/in/YOUR-ACTUAL-LINKEDIN-USERNAME",
  github: "https://github.com/divyanshu26bcon1861-cmd",
  email: "divyanshujaindj777@gmail.com",
  // ...
}
```

### 2. Add New Projects
In `js/portfolio-data.js`, add a new object to `projects.items`:
```javascript
{
  id: "my-new-project",
  title: "AI Voice Assistant",
  category: "Applications", // All, Web Development, Applications, Tools & Experiments
  isPlaceholder: false,
  featured: true,
  tag: "Live Project",
  shortDescription: "A smart voice recognition assistant built with Python and Gemini API.",
  fullDescription: "Detailed breakdown of the architecture, audio pipeline, and features.",
  techStack: ["Python", "Gemini API", "SpeechRecognition", "PyAudio"],
  githubUrl: "https://github.com/divyanshu26bcon1861-cmd/my-project",
  liveDemoUrl: "https://my-demo.com",
  previewImage: "portfolio",
  highlights: [
    "Real-time voice activity detection",
    "Streamed AI responses with sub-second latency"
  ]
}
```

### 3. Add Certifications or Hackathon Milestones
Update `achievements.items` in `js/portfolio-data.js` to showcase your wins and certificates as you progress through your B.Tech journey.

### 4. Enable Direct Contact Form API (Optional)
The contact form is 100% functional out-of-the-box. When submitted, it validates inputs and prepares a formatted message in the user's default email client.

If you'd like messages sent directly to your inbox without opening the user's email client:
1. Get a free access key from [Web3Forms](https://web3forms.com) (takes 30 seconds, no credit card required).
2. Paste your access key in `js/portfolio-data.js`:
   ```javascript
   contact: {
     web3formsAccessKey: "YOUR-WEB3FORMS-ACCESS-KEY-HERE",
     // ...
   }
   ```

---

## 🌐 Deploy to GitHub Pages in 2 Minutes

Since this site is built as a clean, static, zero-dependency modern web app, you can host it for free on GitHub Pages:

1. Create a repository on your GitHub account (`https://github.com/divyanshu26bcon1861-cmd/portfolio` or `divyanshu26bcon1861-cmd.github.io`).
2. Push this folder to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of premium personal portfolio"
   git branch -M main
   git remote add origin https://github.com/divyanshu26bcon1861-cmd/portfolio.git
   git push -u origin main
   ```
3. In GitHub, go to **Settings** > **Pages** > **Branch: main** / `/ (root)` > Click **Save**.
4. Your website is live worldwide at `https://divyanshu26bcon1861-cmd.github.io/portfolio`!

---

## 📜 License & Attribution

Designed and developed for **Divyanshu Jain**  
B.Tech CSE (AI & ML) · JECRC University, Jaipur  
*“Designed with curiosity. Built with purpose.”*
