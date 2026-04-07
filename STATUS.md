# PORTFOLIO STATUS

_Last updated: 2 Apr 2025_

---

## PAGES

| Page | File exists | HTML complete | CSS styled | Mobile responsive | Notes |
|------|-------------|---------------|------------|-------------------|-------|
| Home | ✅ | ✅ | ✅ | ✅ | Ticker, hero, recent work, mobile circles |
| Experience | ✅ | ✅ | ✅ | ✅ | Timeline, edu, skills, certs |
| Projects | ✅ | ✅ | ✅ | ✅ | 2 project cards with placeholders |
| Contact | ✅ | ✅ | ✅ | ✅ | 3 contact cards + mobile circles |

---

## SHARED SYSTEMS

| System | Status | Notes |
|--------|--------|-------|
| style.css created | ✅ | 777 lines |
| main.js created | ✅ | 66 lines |
| Google Fonts linked (Courier Prime + DM Sans) | ✅ | All 4 pages |
| CSS variables defined (:root) | ✅ | --teal, --peach, --teal-light, --coral, --gray, --font-mono, --font-sans, --max-w, --transition |
| Background texture (SVG crosshatch) | ✅ | Data URI in body + mobile menu |
| Nav bar (bracket style) | ✅ | Home icon brand + bracket links |
| Nav active state per page | ✅ | Each page marks its own link `.active` |
| Mobile hamburger button | ✅ | Hidden on desktop, shown <768px |
| Mobile fullscreen menu overlay | ✅ | Fade-in overlay with close button |
| Language switcher (EN/FR/AR) | ✅ | Desktop nav + mobile menu |
| applyLang() function in main.js | ✅ | Swaps `data-*` attributes, toggles active btn |
| RTL toggle for Arabic (dir attribute) | ✅ | Sets `document.documentElement.dir` |
| localStorage language persistence | ✅ | Saves/restores on load |
| CV modal (HTML + CSS + JS) | ❌ | Removed — replaced with direct download anchor |
| Scrolling ticker (index.html only) | ⏳ | HTML present, CSS animation defined, **but not scrolling in browser** — needs debugging |
| Easter egg comment in head | ✅ | All 4 pages have the AI/developer comment |
| All external links have rel="noopener noreferrer" | ✅ | Verified on all pages |
| prefers-reduced-motion block in CSS | ✅ | Disables all animations/transitions |

---

## COMPONENTS

| Component | Status | Location | Notes |
|-----------|--------|----------|-------|
| Hero section (photo + name + bio + CTAs) | ✅ | index.html | #FFF8F6 background, blinking cursor |
| Recent Work sidebar | ✅ | index.html | #EEC9C2 background, 3 work items |
| Home two-column grid | ✅ | index.html | 300px sidebar + 1fr hero |
| Timeline (work experience) | ✅ | experience.html | 3 entries: NetSense, ONDA, Marsa Maroc |
| Education cards grid | ✅ | experience.html | 2 cards: EMSI + OFPPT |
| Skills grid with badge-rows | ✅ | experience.html | 4 groups: Languages, Web, DB, Tools |
| Certifications list with links | ✅ | experience.html | 5 certs with logos + clickable names |
| Projects grid (2 cards) | ✅ | projects.html | F1 Analysis + Dental System |
| Contact cards grid (3 cards) | ✅ | contact.html | Email, LinkedIn, GitHub |

---

## TRANSLATIONS

| Element | EN | FR | AR | Notes |
|---------|----|----|----|-------|
| Nav links | ✅ | ✅ | ✅ | |
| Hero name/tagline/bio | ✅ | ✅ | ✅ | Name not translated (proper noun) |
| Hero CTAs | ✅ | ✅ | ✅ | |
| Recent Work titles/descs | ✅ | ✅ | ✅ | |
| Ticker items | ❌ | ❌ | ❌ | Hardcoded EN only — no `data-*` attrs |
| Experience section labels | ✅ | ✅ | ✅ | |
| Timeline bullets | ✅ | ✅ | ✅ | |
| Education section | ✅ | ✅ | ✅ | School names not translated |
| Skills section | ✅ | ✅ | ✅ | Category labels translated, badge text EN only |
| Certifications section | ✅ | ✅ | ✅ | |
| Projects section | ✅ | ✅ | ✅ | |
| Contact section | ✅ | ✅ | ✅ | Email label translated, LinkedIn/GitHub labels EN only |
| CV modal | N/A | N/A | N/A | Removed |
| Mobile menu links | ✅ | ✅ | ✅ | |

---

## ASSETS

| Asset | Status | Path | Notes |
|-------|--------|------|-------|
| Profile photo | ✅ | assets/elmehdi-bw.jpg | B&W filter applied via CSS |
| CV English PDF | ✅ | media/resume/resume_english.pdf | |
| CV French PDF | ✅ | media/resume/resume_french.pdf | |
| CV Arabic PDF | ✅ | media/resume/resume_arabic.pdf | |
| Meta logo | ✅ | assets/meta.png | Cert logo |
| Coursera logo | ✅ | assets/coursera.png | Cert logo |
| Google Cloud logo | ✅ | assets/google-cloud.png | Cert logo |
| IBM logo | ✅ | assets/ibm.png | Cert logo |
| U of Michigan SVG | ✅ | assets/university-of-michigan-3.svg | Unused (replaced by Coursera logo) |
| U of Michigan PNG | ✅ | assets/University_of_Michigan-Logo.wine.png | Unused (replaced by Coursera logo) |

---

## CSS FIXES APPLIED

| Fix | Status | Notes |
|-----|--------|-------|
| Box contrast (.hero background #FFF8F6) | ✅ | |
| Box contrast (.recent-work background #EEC9C2) | ✅ | |
| Box contrast (.edu-card background #FFF8F6) | ✅ | |
| Box contrast (.project-card background #FFF8F6) | ✅ | |
| Box contrast (.contact-card background #FFF8F6) | ✅ | |
| Cert links styled (.cert-name underline) | ✅ | Subtle teal underline, coral on hover |
| Cert links hover coral | ✅ | |
| Ticker HTML added to index.html | ✅ | |
| Ticker CSS added | ✅ | |
| Ticker pause on hover | ✅ | |
| "Let's Connect" blink animation | ✅ | pill-blink keyframe on .cta-text |

---

## KNOWN ISSUES / TODO

- **~~CV download links broken~~** — ✅ FIXED. JS and HTML now reference correct filenames (`resume_english.pdf`, etc.).
- **🔴 Ticker not scrolling** — HTML and CSS are in place but animation isn't visually working in the browser. Needs further debugging.
- **🟡 Ticker not translated** — Items are hardcoded English only, no `data-en`/`data-fr`/`data-ar` attributes.
- **🟡 Unused assets** — `university-of-michigan-3.svg` and `University_of_Michigan-Logo.wine.png` are no longer referenced.
- **🟡 Google Cloud cert link is placeholder** — Uses same Coursera share link as Meta cert; needs real link.
- **🟡 LinkedIn/GitHub contact labels not translated** — Only "Email" has `data-*` attributes in contact.html.
- **🟡 ticker.txt exists but unused** — Was intended for dynamic loading but fetch approach was abandoned.

---

## FILE TREE

```
./assets/coursera.png
./assets/elmehdi-bw.jpg
./assets/google-cloud.png
./assets/ibm.png
./assets/meta.png
./assets/university-of-michigan-3.svg
./assets/University_of_Michigan-Logo.wine.png
./contact.html
./css/style.css
./experience.html
./index.html
./js/main.js
./media/resume/resume_arabic.pdf
./media/resume/resume_english.pdf
./media/resume/resume_french.pdf
./projects.html
./ticker.txt
```
