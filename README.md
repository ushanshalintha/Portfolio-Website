# Ushan Shalintha — Portfolio

A personal portfolio site built with plain HTML, CSS, and JavaScript (no frameworks, no build step).

## Folder structure

```
portfolio/
├── index.html          # all page content and sections
├── css/
│   └── style.css       # design system + layout + responsive rules
├── js/
│   └── main.js         # nav highlighting, scroll-spy, reveal animations
├── images/
│   └── profile.jpg     # your photo
├── files/
│   └── cv.pdf          # your downloadable CV
└── README.md
```

## Run it locally

You don't need to install anything — just open the file:

1. Double-click `index.html`, or
2. Right-click `index.html` → **Open with** → your browser.

If your browser blocks local scripts/images, run a tiny local server instead (from inside the `portfolio` folder):

```bash
# Python 3
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Deploy it (for the assignment submission)

### Option A — GitHub Pages
1. Create a new GitHub repository (e.g. `portfolio`).
2. Upload the whole `portfolio` folder's contents to the repo (keep `index.html` at the repo root).
3. Go to the repo's **Settings → Pages**.
4. Under **Source**, pick the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub gives you a live URL like `https://ushanshalintha.github.io/portfolio/` after a minute.

### Option B — Vercel
1. Push the same repo to GitHub (step 1–2 above).
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Leave the framework preset as "Other" (it's a static site) and click **Deploy**.
4. Vercel gives you a live URL like `https://portfolio-yourname.vercel.app/`.

## Updating content later

- **Adding your CV**: the hero's **Download CV** button points to `files/cv.pdf`. Just drop your CV PDF into `files/` and name it `cv.pdf` (or update the `href` in `index.html` to match your filename).
- **New projects**: copy one `<article class="project-card">` block in the Projects section of `index.html` and edit its text.
- **Achievements**: once you have one, replace the `.empty-state` block in the Achievements section with the same row style used in Education/Projects.

## For the CA01 submission

Per the assignment brief: paste your live deployment link into a Word document, save that document as a PDF, and upload the PDF to the LMS. Only PDF submissions are accepted.
