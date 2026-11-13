# Portfolio

My personal website: who I am, case studies of projects I've built, my experience, and a few things I enjoy outside of code.

**Live:** https://miiree12lb.site

## Pages

| Page | What's there |
|---|---|
| Home | Short introduction and selected work |
| Projects | In-depth case studies: the problem, the architecture, the decisions and their trade-offs |
| Experience | Building software, teaching, and volunteering |
| Education | TU Delft, University of Twente, and the International Baccalaureate |
| Achievements | Research programmes, olympiads and a physics experiment |
| Interests | Visited countries on a 3D globe, quotes, and resources |

## Tech stack

React 18 with React Router, built with Vite and deployed to GitHub Pages on a custom domain. Icons come from Lucide, maths is rendered with KaTeX, and the globe uses react-globe.gl (loaded only when the Interests page is opened). Light and dark mode follow a toggle that's remembered in the browser.

## How it's organised

```
src/                 Pages and components (one file per page)
src/caseStudies.js   Content of every case study
src/seo.json         Title and description of every page
src/css/             Styles, one file per page
public/              Static files: CNAME, preview image, robots.txt, 404 page
scripts/postbuild.js Writes one HTML file per page after each build
```

### Case studies

Each case study is an entry in `src/caseStudies.js`, rendered by `CaseStudy.jsx` at `/projects/<slug>`. Empty fields are hidden. While an entry has `published: false` it only shows locally (`npm start`), and any text starting with `TODO` is highlighted there so unfinished parts are easy to spot.

### Clean URLs and link previews

The site uses normal URLs like `/projects/oifem`. GitHub Pages only serves real files and link-preview crawlers don't run JavaScript, so after every build `scripts/postbuild.js` writes a separate HTML file for each page and published case study, each with its own title, description and Open Graph tags, plus a `sitemap.xml`. Old links of the form `/#/page` are redirected to the clean URL.

## Running it locally

Requires Node.js 24 or later.

```sh
npm install
npm start          # http://localhost:3000
```

## Deploying

```sh
npm run deploy
```

This builds the site, runs the post-build step, and publishes `build/` to the `gh-pages` branch. The custom domain is kept by `public/CNAME`.

## Privacy

No analytics, cookies or tracking. The only thing stored is the light/dark choice, in the visitor's own browser. See the [privacy page](https://miiree12lb.site/privacy).
