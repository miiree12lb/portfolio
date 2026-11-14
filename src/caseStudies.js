// Case studies shown on /projects and /projects/:slug.
//
// - Any field left empty ("" or []) is simply not shown.
// - Text starting with "TODO" is highlighted in the local preview so you can spot what to fill in.
// - Set `published: true` when it's ready. Unpublished case studies only appear in `npm start`,
//   never in the deployed site.

const caseStudies = [
    {
        slug: "cleaning-scheduler",
        published: true,
        title: "Cleaning Scheduler",
        tagline: "A web app for shared houses that rotates cleaning tasks fairly every week, with house rules and a history of who did what.",
        period: "Nov 2026 – Present",
        role: "Designer & full-stack developer",
        team: "Solo project",
        stack: ["TypeScript", "React", "Vite", "Hono", "Cloudflare Workers", "Cloudflare D1", "Vitest"],
        links: {
            live: "https://cleaning-scheduler.miiree12lb.workers.dev",
            code: "https://github.com/miiree12lb/cleaning-scheduler",
        },

        problem: [
            "In most shared houses, cleaning runs on goodwill: a paper rota on the fridge or an agreement in the group chat. These break down fast. Nobody keeps them up to date, there's no record of who actually did what, and when someone feels they're doing more than their share, there's nothing to point to.",
            "A fixed rota also can't cope with real life. There can be more tasks than people or more people than tasks, housemates move in and out mid-week, and tasks get added or dropped. The app had to make the rotation fair and automatic, adapt to those changes without surprising anyone, and keep a history of who did what that everyone can trust.",
        ],

        responsibilities: [
            "Designed the data model and wrote down every design decision, and why, in a decisions document kept up to date from day one.",
            "Built the API with Hono on Cloudflare Workers and the React frontend, sharing TypeScript types between them.",
            "Built sign-in with Google and with passwords, sessions, invites by link or code, and admin and member roles.",
            "Deployed it on Cloudflare, with versioned database migrations and unit tests for the scheduling logic.",
        ],

        architecture: "One repository and one deployment: a Cloudflare Worker serves the React single-page app as static files and handles every /api request first. Data lives in Cloudflare D1 (SQLite), changed only through numbered migrations. The server and the frontend import the same TypeScript types for API data, so a change to the shape of the data shows up as a type error on both sides. Every request about a house goes through one middleware that checks the user is a member of that house before anything else runs.",

        decisions: [
            {
                title: "A simple, testable rotation formula",
                why: "In week w, task i goes to the member at position (i + w) mod n. It handles more tasks than people and more people than tasks, gives everyone every task over n weeks, and is a pure function covered by unit tests.",
                tradeoff: "Every task counts as equal effort. Task weights are noted as a later improvement.",
            },
            {
                title: "Store the past, calculate the future",
                why: "Past and current weeks are stored as one row per task per week, so the calendar history stays correct when people or tasks change. Future weeks are calculated on the fly as previews, clearly labelled and without checkboxes.",
                tradeoff: "A preview can change before its week arrives, so the interface has to make that obvious.",
            },
            {
                title: "Mid-week changes touch as little as possible",
                why: "Nobody's task should change unexpectedly. A new task goes to whoever has the fewest this week, a leaving member's unfinished tasks are redistributed the same way, and a new member joins the rotation next Monday. The full rotation runs again each Monday.",
                tradeoff: "The week can be slightly uneven until Monday.",
            },
            {
                title: "Security built in from the start",
                why: "Membership is checked on every house request, session tokens are stored only as SHA-256 hashes, passwords use salted PBKDF2 with a constant-time comparison, and login and join endpoints are rate-limited per IP.",
                tradeoff: "Workers caps PBKDF2 at 100,000 iterations, below current recommendations, so the rate limiter has to cover the gap.",
            },
        ],

        challenges: [
            {
                title: "Keeping a house consistent as people come and go",
                text: "Members leave, get removed or change roles, and each case can break something: a house with no admin, tasks nobody owns, or history that disappears. The server refuses to remove, demote or let the last admin leave, reassigns a leaving member's unfinished tasks, archives tasks instead of deleting them, and makes the last member delete the house rather than leave it, so history is never lost by accident.",
            },
            {
                title: "Requests that arrive twice",
                text: "Opening an invite link can send the join request twice, for example on a double click or a retry. Joining is written so that a duplicate request does nothing instead of failing or creating a second membership.",
            },
        ],

        results: [
            { value: "In use", label: "by my house every week since November 2026" },
        ],

        learnings: "This was the first project where I applied what MenuMentor taught me: the scheduling logic is a pure function with tests, and every query uses bound parameters. Writing decisions down before coding made the edge cases visible early. The catch is that the document has to evolve with the code, and some entries, like sign-in, are already behind it.",
    },
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
            "OIFem (Olimpíada Informàtica Femenina) is a programming olympiad that encourages young women in Spain to get into computer science. I took part in its first edition in 2021 as a finalist.",
            "The website is the main source of information for anyone who wants to take part, and the only way to register, so it has to be clear and reliable for students who may never have entered a programming competition before.",
            "The previous site was hard to maintain. It was built without a framework, so the same code was copied across pages and every change had to be made in several places. The new site needed to be easy to keep up to date edition after edition, without that duplication.",
        ],

        // What you personally owned.
        responsibilities: [
            "Designed the site's look and layout from scratch.",
            "Built the site and its architecture, replacing the old duplicated pages.",
            "Launched it for the V edition of the olympiad. It has been used for every edition since.",
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
            { value: "Edition V", label: "onwards: every edition since has run on the site" },
            { value: "Still in use", label: "the organising team keeps building on my design and code" },
            // { value: "TODO", label: "e.g. participants registered through the site" },
        ],

        // What you'd do differently / what you learned.
        learnings: "Maintainability is a design decision. Treating editions as data rather than pages is what lets the organisers keep updating the site years later. Next time I'd move the content out of the code entirely, into a JSON file or a simple CMS, so non-developers could edit it without a rebuild.",
    },
    {
        slug: "lyra",
        published: true,
        title: "Lyra",
        tagline: "A statically typed programming language and its compiler, built from scratch with ANTLR and LLVM, designed to be easy to write and fast to run.",
        period: "Bachelor's thesis, completed January 2026",
        role: "Language designer & compiler developer",
        team: "Individual research project at the University of Twente",
        stack: ["C++", "ANTLR4", "LLVM", "CMake"],
        links: {
            live: "",
            code: "",
            paper: "https://purl.utwente.nl/essays/109398",
        },

        problem: [
            "Programming languages trade usability against performance. Modern dynamic languages like Python are quick to write but check types only at runtime, so they're slower and errors surface late. Statically typed, compiled languages catch errors early and run fast, but often ask the programmer to manage memory and learn a lot more.",
            "Lyra aims to close that gap: readable syntax in the style of C++ and Java, strong static types checked before the program runs, automatic memory management, and compilation to optimised native code.",
        ],

        // One of the test programs, with what it prints when compiled and run
        sample: {
            file: "bubbleSort.lyra",
            caption: "A bubble sort from the project's test programs. Lists know their own size, declarations need no semicolon, and print's second argument ends the line.",
            code: `void printList(list<int> l) {
    for (int i = 0; i < l.size(); i++) {
        print(l[i], false)
        print(' ', false)
    }
    print('', true)
}

void main () {
    list<int> ls = [10, -3, 7, 5, 2, 100, -30]
    printList(ls)
    for (int i = 0; i < ls.size() - 1; i++) {
        for (int j = 0; j < ls.size() - i - 1; j++) {
            if (ls[j] > ls[j+1]) {
                int temp = ls[j]
                ls[j] = ls[j+1]
                ls[j+1] = temp
            }
        }
    }
    printList(ls)
}`,
            output: "10 -3 7 5 2 100 -30\n-30 -3 2 5 7 10 100",
        },

        responsibilities: [
            "Designed the language and its full grammar, scoped with MoSCoW: primitive types, control flow, functions and input/output as the minimum viable product, then strings, lists and maps.",
            "Built a two-pass compiler in C++: a type and scope checker, then an LLVM IR generator, on top of an ANTLR-generated lexer and parser.",
            "Wrote the runtime in C++: strings, lists and maps with their built-in methods, and reference-counted memory management.",
            "Produced standalone native executables on Windows and other systems, and wrote the thesis paper.",
        ],

        architecture: "Source code goes through an ANTLR lexer and parser into a parse tree, which the compiler walks twice. The first pass checks types and scopes, using a symbol table plus records of every function and every built-in method. The second pass generates LLVM IR, calling into a C++ runtime for data structures and built-in functions. LLVM then optimises the IR at -O3, generates machine code for the host's architecture, and the result is linked into a native executable (with the Microsoft toolchain on Windows and clang++ elsewhere).",

        decisions: [
            {
                title: "Build on ANTLR and LLVM rather than from scratch",
                why: "ANTLR generates the lexer and parser from the grammar and handles left recursion, so operator precedence can be written naturally, as nine kinds of expressions from strongest to weakest. LLVM provides industrial-strength optimisation and code generation for many architectures, which let the project focus on the language itself.",
                tradeoff: "Two large toolchains to depend on, and ANTLR resolves ambiguity by rule order, so the order of grammar rules matters.",
            },
            {
                title: "Tree visitors instead of listeners",
                why: "A visitor can choose the traversal order and return a value from every node, such as the type of an expression, which both compiler passes need.",
                tradeoff: "In C++ every visit returns std::any, which gives up compile-time type safety inside the compiler itself, so it has to be used carefully.",
            },
            {
                title: "Automatic memory with reference counting",
                why: "Lyra is meant to be easy to use, so the compiler manages memory. Primitive types are copied on the stack, while data structures are shared by reference and freed when their last reference goes away. Each structure keeps its contents behind an inner pointer, so growing it with realloc never leaves other references pointing at freed memory.",
                tradeoff: "Every assignment, function return and scope exit has to update reference counts correctly, which spreads memory logic across the code generator and is where the remaining bugs are.",
            },
            {
                title: "A deliberately strict language",
                why: "Every variable must be initialised when declared, the set of built-in functions is kept small, and semicolons are required only where they remove a real ambiguity, such as after a return. That keeps the language predictable and easy for the compiler to translate.",
                tradeoff: "Less convenience than languages with more built-ins and looser rules.",
            },
        ],

        challenges: [
            {
                title: "Grammar ambiguity",
                text: "Without semicolons, a return statement followed by a print on the next line is ambiguous: the print could be read as the value being returned. Requiring a semicolon only after return removes the ambiguity without forcing semicolons everywhere.",
            },
            {
                title: "Memory bugs found through test programs",
                text: "Test programs (Fibonacci, bubble sort, a word histogram, and tests of the list and map methods) showed that the language works end to end, but also uncovered two memory-management bugs: a data structure returned from a function and never used leaks, and in one nested case a string isn't copied when it should be. The paper documents both, along with nested lists and maps, which are blocked in the type checker for now.",
            },
        ],

        results: [
            { value: "MVP+", label: "every must-have feature, plus strings, lists and maps" },
            { value: "-O3", label: "LLVM-optimised native executables" },
        ],

        learnings: "Memory management touched too many places in the code generator, which is exactly where the remaining bugs come from. Next time I'd centralise it from the start, and fix it before adding more features. The project also showed that a goal like \"easy to use\" needs a usability study to prove, which was out of scope for this thesis.",
    },
    {
        slug: "video-gallery",
        published: true,
        title: "Video Gallery",
        tagline: "A streaming-style home for the videos I edit: travel, animations and educational series about computer science.",
        period: "Nov 2024 – Present",
        role: "Designer & developer",
        team: "Solo project",
        stack: ["React", "React Router", "JavaScript", "CSS", "HTML5 video", "Apache"],
        links: {
            live: "https://miiree12lb-video-gallery.com/",
            code: "https://github.com/miiree12lb/video-gallery",
        },

        problem: [
            "I edit videos alongside programming, and wanted a video portfolio: one place for all my videos instead of having them spread around. It was also a chance to build another website from scratch.",
            "The gallery holds over 30 videos across several categories, in both vertical (phone) and horizontal formats, and most visitors watch on a phone. It had to make a mixed collection easy to browse and play smoothly on every device.",
        ],

        responsibilities: [
            "Designed and built the whole site, with rows of sliders per category like a streaming app.",
            "Built search, a category filter and a \"View all\" page for every category.",
            "Handled playback across browsers, including full-screen on Apple devices.",
            "Run it on my own domain, and keep adding new videos and series.",
        ],

        architecture: "A React single-page app with React Router. Every video is a small data object (file or Instagram link, title, subtitle, thumbnail, orientation), and a single list of categories drives both the home page rows and a generated \"View all\" route for each one, so a new category is one entry in that list. Each row splits vertical and horizontal videos into separate sliders that show 4 or 2 videos on desktop and 2 or 1 on phones. Videos only show a thumbnail until clicked, and only one plays at a time. The site is built into static files and served from Apache on a custom domain.",

        decisions: [
            {
                title: "Moving from Google Drive embeds to a native video player",
                why: "The first version streamed videos through Drive iframes. Switching to the browser's own video element gave control over playback: pausing the previous video, going full-screen on play, and consistent behaviour on phones.",
                tradeoff: "I now host and serve the video files myself, so bandwidth and file sizes are my problem.",
            },
            {
                title: "Thumbnails first, video on click",
                why: "With dozens of videos on one page, loading players up front would be slow and waste mobile data. Each card is just an image until someone presses play.",
                tradeoff: "Playback takes a moment to start after the click.",
            },
            {
                title: "Licensed-music videos stay on Instagram",
                why: "Some videos use commercial music that's only licensed on Instagram. Those cards link to the Instagram post instead of hosting the file, so the site stays legal.",
                tradeoff: "Visitors leave the site to watch them.",
            },
            {
                title: "Video files kept out of the repository",
                why: "The videos are large binary files, so they're ignored by git, which keeps the repository small and fast to clone.",
                tradeoff: "Someone cloning the repo can't run the full site without the video files.",
            },
        ],

        challenges: [
            {
                title: "Full-screen playback on Apple devices",
                text: "Full-screen worked on desktop but not on iPhones and iPads, which handle it differently from other browsers, including Chrome on iOS. I made playback request full-screen through whichever method the browser supports, with the iOS-specific one as a fallback.",
            },
            {
                title: "Fitting two vertical videos side by side on every phone",
                text: "Video sizes are calculated from the screen width to keep the 9:16 shape, and on narrow phones the second video kept wrapping to a new line. I tuned the sizes, margins and padding until two videos fit side by side on phones.",
            },
        ],

        results: [
            { value: "30+", label: "videos, in vertical and horizontal formats" },
            { value: "Since 2024", label: "live and regularly updated with new videos" },
        ],

        learnings: "Growing a project over two years showed me how structure erodes: every new category added another list and another piece of state to one large file. Next time I'd keep every video in a single data file with a category field, so adding a video never touches component code, and I'd serve the files through a video host or CDN with compressed versions for phones instead of from my own server.",
    },
    {
        slug: "menumentor",
        published: false,
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
