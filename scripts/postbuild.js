// Runs after `npm run build`.
//
// The site is a single-page app, but link-preview crawlers (LinkedIn, WhatsApp, Slack…) don't run
// JavaScript and GitHub Pages only knows about real files. So this writes one HTML file per page,
// each with its own title, description and preview tags, plus a sitemap.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SITE = "https://miiree12lb.site";
const BUILD = path.join(__dirname, "..", "build");
const pages = require("../src/seo.json");

// caseStudies.js is an ES module for the app; load it here without a bundler.
function loadCaseStudies() {
    let src = fs.readFileSync(path.join(__dirname, "..", "src", "caseStudies.js"), "utf8");
    src = src.replace(/^export default .*$/m, "").replace(/^export\s+(const|let|function)/gm, "$1");
    const context = { process: { env: { NODE_ENV: "production" } } };
    vm.createContext(context);
    vm.runInContext(`${src}\n;this.__caseStudies = caseStudies;`, context);
    return context.__caseStudies.filter((cs) => cs.published);
}

const escape = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function setMeta(html, attr, key, value) {
    const tag = `<meta ${attr}="${key}" content="${escape(value)}">`;
    const re = new RegExp(`<meta[^>]*${attr}="${key}"[^>]*>`);
    return re.test(html) ? html.replace(re, tag) : html.replace("</head>", `${tag}</head>`);
}

function render(template, route, { title, description }) {
    const url = SITE + (route === "/" ? "/" : route);
    let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`);
    html = html.replace(/<link[^>]*rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}">`);
    html = setMeta(html, "name", "description", description);
    html = setMeta(html, "property", "og:title", title);
    html = setMeta(html, "property", "og:description", description);
    html = setMeta(html, "property", "og:url", url);
    return html;
}

const routes = { ...pages };
for (const cs of loadCaseStudies()) {
    routes[`/projects/${cs.slug}`] = { title: `${cs.title} | Mireia Lopez Bruch`, description: cs.tagline };
}

const template = fs.readFileSync(path.join(BUILD, "index.html"), "utf8");

for (const [route, meta] of Object.entries(routes)) {
    const html = render(template, route, meta);
    if (route === "/") {
        fs.writeFileSync(path.join(BUILD, "index.html"), html);
        continue;
    }
    // Both /projects.html and /projects/index.html, so the URL works with or without a trailing slash.
    const file = path.join(BUILD, route.slice(1));
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(`${file}.html`, html);
    fs.mkdirSync(file, { recursive: true });
    fs.writeFileSync(path.join(file, "index.html"), html);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    Object.keys(routes)
        .filter((route) => route !== "/privacy")
        .map((route) => `  <url><loc>${SITE}${route === "/" ? "/" : route}</loc><lastmod>${today}</lastmod></url>`)
        .join("\n") +
    `\n</urlset>\n`;
fs.writeFileSync(path.join(BUILD, "sitemap.xml"), sitemap);

console.log(`postbuild: wrote ${Object.keys(routes).length} pages and sitemap.xml`);
