// Case studies shown on /projects and /projects/:slug.
//
// - Any field left empty ("" or []) is simply not shown.
// - Text starting with "TODO" is highlighted in the local preview so you can spot what to fill in.
// - Set `published: true` when it's ready. Unpublished case studies only appear in `npm start`,
//   never in the deployed site.

const caseStudies = [
    {
        slug: "oifem",
        published: true,
        title: "OIFem Website",
        tagline: "The public website of the Spanish Informatics Olympiad for Girls.",
        period: "2025 – Present",
        role: "Designer & developer",
        team: "Designed and built alone, with content from the OIFem organising team",
        stack: ["React", "React Router", "JavaScript", "CSS", "Google Forms", "Apache"],
        links: {
            live: "https://oifem.es",
            code: "", // TODO: GitHub link, if the repo is public
        },

        // 1–2 short paragraphs: what was the situation and why did it matter?
        problem: [
            "OIFem (Olimpíada Informàtica Femenina) is a programming olympiad that encourages young women in Spain to get into computer science. I took part in its first edition in 2021 as a finalist, and have volunteered since 2022.",
            "The website is the main source of information for anyone who wants to take part, and the only way to register, so it has to be clear and reliable for students who may never have entered a programming competition before.",
            "The previous site was hard to maintain. It was built without a framework, so the same code was copied across pages and every change had to be made in several places. The new site needed to be easy to keep up to date edition after edition, without that duplication.",
        ],

        // What you personally owned.
        responsibilities: [
            "Designed the site's look and layout from scratch.",
            "Built the site and its architecture, replacing the old duplicated pages.",
            "Delivered it for the V edition of the olympiad.",
            "Still the developer the organising team reaches out to for changes, while they also make their own edits on top of my code.",
        ],

        // How it's put together. Keep it to the parts that matter.
        architecture: "A React single-page app with React Router, split into 11 pages that share one navbar, footer and image slider, so common elements are written once. The history of past editions is driven by data: each edition is one entry in a list, rendered by the same set of components for medals, contests, problems and participant comments, so adding a new edition means adding one entry rather than copying a page. Registration is an embedded Google Form, so there's no backend or database to run. The site is built into static files and served from an Apache server, with a rewrite rule that sends every route to the app.",

        // The decisions a senior reader looks for: what you chose, and what you gave up.
        decisions: [
            {
                title: "Rebuilding in React instead of plain HTML/JS",
                why: "Reusable components remove the duplicated code that made the old site hard to maintain: the navbar, footer and edition layout exist once, so a change is made in one place.",
                tradeoff: "The site now needs a build step, and the server needs a rewrite rule so links to individual pages work.",
            },
            {
                title: "Editions as data, not pages",
                why: "Every edition has the same shape (medals, contests, problems, comments), so one list rendered by shared components keeps them consistent and makes each new edition a small, low-risk change.",
                tradeoff: "The content still lives in the code, so updates need someone comfortable editing it and a rebuild.",
            },
            {
                title: "An embedded Google Form for registration",
                why: "No server, database or personal data store to build, secure and maintain for a volunteer-run project.",
                tradeoff: "Less control over the form's look and behaviour, and it depends on a third-party script.",
            },
        ],

        // 1–3 real problems you hit and how you solved them.
        challenges: [
            {
                title: "Fitting five editions of history into one structure",
                text: "Each edition has results, medallists, the EGOI team, contest problems and solutions, photos and participant comments, around 150 names in total. I defined one shape for an edition and moved every edition into it, so the history page renders them all with the same components. A sticky header and an edition picker keep the long page easy to navigate.",
            },
            {
                title: "Page links breaking on the live server",
                text: "With client-side routing, opening or refreshing a page like /historico directly made Apache look for a file that doesn't exist and return a 404. I added a rewrite rule that sends every route to the app, so shared links and refreshes work.",
            },
        ],

        // Only real numbers. Delete anything you can't back up.
        results: [
            { value: "3", label: "editions run on the site (V, VI, VII)" },
            { value: "Still in use", label: "the organising team keeps building on my design and code" },
            // { value: "TODO", label: "e.g. participants registered through the site" },
        ],

        // What you'd do differently / what you learned.
        learnings: "Maintainability is a design decision. Treating editions as data rather than pages is what lets the organisers keep updating the site years later. Next time I'd move the content out of the code entirely, into a JSON file or a simple CMS, so non-developers could edit it without a rebuild.",
    },
    {
        slug: "menumentor",
        published: true,
        title: "MenuMentor",
        tagline: "A desktop app that plans a week of meals around your calorie targets and how often you want each dish.",
        period: "High school (11th–12th grade), refined in 2024",
        role: "Sole developer",
        team: "Solo project",
        stack: ["Java", "Swing", "SQLite", "JDBC"],
        links: {
            live: "",
            code: "https://github.com/miiree12lb/MenuMentor",
        },

        problem: [
            "I built MenuMentor as a school project during my last two years of high school.",
            "Planning a varied week of lunches and dinners by hand means remembering what you ate recently, not repeating dishes too often, staying within a calorie range, and then working out the shopping list. MenuMentor turns those preferences into rules and does the planning for you.",
        ],

        responsibilities: [
            "Designed the data model: ingredients, dishes, meals, daily and weekly menus, and a history of when each dish was eaten (8 SQLite tables, created automatically on first start).",
            "Built the menu generator that turns each dish's preferences into rules.",
            "Built the full desktop UI in Swing: managing ingredients and dishes, the weekly menu view, swapping days, calorie data and a printable shopping list.",
        ],

        architecture: "A Java Swing desktop app backed by an embedded SQLite database, so it runs offline on any operating system with nothing to install but Java. Domain classes (dishes, ingredients, meals, daily and weekly menus) hold the logic and read and write the database through JDBC. Every time a dish is placed in a menu, the date is stored, and that history is what the generator's rules are checked against.",

        decisions: [
            {
                title: "Filter by rules, then pick at random",
                why: "For each slot (first or second course, lunch or dinner), the generator first keeps only the dishes that meet the frequency rule (times eaten in the last 28 days) and the waiting-time rule, then picks one at random while staying under the daily calorie maximum. Randomness keeps the weeks varied.",
                tradeoff: "It's a greedy, one-slot-at-a-time choice, so it can miss a valid week that exists. The calorie minimum is checked afterwards and reported rather than enforced.",
            },
            {
                title: "Always produce a full week, and flag what broke",
                why: "If no dish meets every rule, MenuMentor still fills the slot with a dish of the right type, marks it in red, and lists the unmet requirements. The user always gets a usable menu and can see exactly what to adjust.",
                tradeoff: "The menu can knowingly break the user's own rules, so the warning has to be clear.",
            },
            {
                title: "Store every date a dish was eaten, not a counter",
                why: "A history of dates makes rolling rules possible, like 'at most 3 times in the last 28 days' or 'wait at least 5 days', without resetting counters each week.",
                tradeoff: "The history table keeps growing, and every generation has to read it back.",
            },
        ],

        challenges: [
            {
                title: "Rules that can't all be met at once",
                text: "Every dish has its own frequency and waiting time, every day has a calorie range, and every slot needs the right kind of course for lunch or dinner. With a realistic number of dishes these rules often conflict, so a generator that insisted on all of them would simply fail to produce a week. I made it filter by the rules first, re-pick when a dish would push the day over its calorie limit, and fall back to the closest option when nothing fits, then report exactly which requirement wasn't met so the user knows what to change.",
            },
        ],

        results: [],

        learnings: "Looking back as a CS student, I'd separate the database code from the UI and logic, use prepared statements instead of building SQL from strings (a dish name with an apostrophe breaks the insert today), and make the generator a pure function so its rules could be unit-tested.",
    },
];

export const isDev = process.env.NODE_ENV !== "production";
export const visibleCaseStudies = caseStudies.filter((c) => c.published || isDev);
export const getCaseStudy = (slug) => visibleCaseStudies.find((c) => c.slug === slug);
export default caseStudies;
