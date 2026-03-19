# AI Builder Arena

**The platform where developers train, compete, and get hired with AI.**

AI Builder Arena is a challenge-based platform designed for the AI era. Developers tackle hackathon-style sprints using real AI tools, earn verifiable skill rankings, and get discovered by recruiters who value AI collaboration — not just algorithmic trivia.

> Currently in early access. [Join the waitlist →](https://aibuilderarena.tech)

---

## What It Is

| Feature | Description |
|---|---|
| **AI-Native Challenges** | Timed sprints where you build real projects using AI tools — judged on output quality, not memorised syntax |
| **Verifiable Rankings** | Earn a transparent, skill-based score visible to recruiters |
| **Recruiter Discovery** | Get found by companies that care about how you work with AI |
| **Community** | Connect with builders at the frontier of AI-assisted development |

---

## Project Structure

```
ai-builder-arena/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages deployment
├── assets/
│   ├── css/
│   │   └── styles.css        # All styles
│   └── js/
│       └── script.js         # Nav, animations, waitlist form
├── index.html                # Landing page
└── README.md
```

---

## Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, grid, flexbox, no framework
- **Vanilla JS** — no build step, no dependencies
- **Loops.so** — waitlist / email capture
- **GitHub Pages** — hosting and deployment

---

## Local Development

No build tools required. Just open the file directly:

```bash
git clone https://github.com/Smuthusivam/ai-builder-arena.git
cd ai-builder-arena
open index.html   # macOS
# or
xdg-open index.html   # Linux
```

Or use a local server for accurate path resolution:

```bash
npx serve .
# → http://localhost:3000
```

---

## Deployment

The site auto-deploys to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`. No manual steps needed.

---

## Contributing

This is an early-stage project. If you spot a bug or have a suggestion, open an issue or reach out directly.

---

## License

MIT
