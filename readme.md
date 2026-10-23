# SureshKrishna M — Senior SDET & Quality Engineering Portfolio

**Project/repository name:** `digital-portfolio`

A responsive, dark-first portfolio highlighting Senior SDET and Quality Engineering experience, automation architecture, AI testing, and release quality. The site uses semantic HTML, CSS, and lightweight JavaScript. It has no build step or runtime dependencies and is hosted as a static GitHub Pages site.

## Portfolio sections

- Hero with role, Abu Dhabi location, availability, tap-to-call UAE mobile number, and selected career outcomes.
- Selected professional case studies for Playwright automation, GenAI chatbot quality, AI-assisted engineering, and KYC quality engineering.
- Independently built public repositories, kept distinct from employer work.
- Grouped technical skills and a risk-focused QA approach.
- Professional experience timeline, about information, education, certification, languages, and UAE visa/degree-attestation details.
- Contact links for phone, email, LinkedIn, GitHub, and the resume PDF.

The responsive layout includes a mobile navigation menu, dark/light theme toggle, accessible project-detail disclosures, keyboard focus styles, reduced-motion support, and a dynamically updated footer year.

## Preview locally

Open `index.html` in a browser, or run a local static file server from the project root:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Resume PDF

The **Download Resume** links point to [`assets/resume.pdf`](./assets/resume.pdf) and use the browser's native download behavior.

## Public repositories

Public repositories are linked as independent personal work. They are not presented as the employer-built frameworks or internal AI agents described in the professional case studies.

## Deployment

After renaming the GitHub repository to `digital-portfolio`, the GitHub Pages URL will be <https://sureshkrishna-m.github.io/digital-portfolio/>. The site is served from the repository root. Keep CSS, JavaScript, favicon, and PDF references relative so they resolve under the `/digital-portfolio/` project path. No build or deployment artifact generation is required.

### Rename the GitHub repository

1. Open the repository on GitHub and go to **Settings → General**.
2. Under **Repository name**, change `digital-resume` to `digital-portfolio` and confirm the rename.
3. Update the local `origin` URL:

   ```sh
   git remote set-url origin https://github.com/sureshkrishna-m/digital-portfolio.git
   git remote -v
   ```

4. Push the reviewed changes to the branch configured for GitHub Pages. The local preview server does not deploy changes.
