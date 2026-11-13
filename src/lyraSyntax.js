/* A small highlighter for Lyra, following the keywords and literals of the Lyra grammar.
   Turns source code into lines of [kind, text] tokens; the kind picks the colour
   (same colours as the code panel on Home). */
const TYPES = new Set(["int", "float", "char", "bool", "string", "list", "map", "void"]);
const KEYWORDS = new Set(["if", "else", "while", "for", "return", "or", "and", "not"]);
const LITERALS = new Set(["true", "false"]);

const RULES = [
    ["com", /^\/\/.*/],
    ["sp", /^\s+/],
    ["str", /^"(?:\\.|[^"\\])*"/],
    ["str", /^'(?:\\.|[^'\\])*'/],
    ["num", /^\d+(?:\.\d+)?/],
    ["word", /^[A-Za-z][A-Za-z0-9_]*/],
    ["pun", /^[^\sA-Za-z0-9"']+/],
];

function tokenizeLine(line) {
    const tokens = [];
    let rest = line;
    while (rest.length) {
        for (const [kind, re] of RULES) {
            const m = rest.match(re);
            if (!m) continue;
            let k = kind;
            const text = m[0];
            if (kind === "word") {
                const after = rest.slice(text.length);
                if (TYPES.has(text)) k = "ty";
                else if (KEYWORDS.has(text)) k = "kw";
                else if (LITERALS.has(text)) k = "num";
                else if (/^\s*\(/.test(after)) k = "fn"; // a name followed by ( is a call or a definition
                else k = "id";
            }
            tokens.push([k, text]);
            rest = rest.slice(text.length);
            break;
        }
    }
    return tokens;
}

export function highlightLyra(code) {
    return code.replace(/\s+$/, "").split("\n").map(tokenizeLine);
}
