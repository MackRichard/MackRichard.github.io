/* Englische Texte. Die deutschen Texte stehen direkt in der index.html. */
const EN = {
  nav_about: "About me", nav_projects: "Projects", nav_tech: "Tech", nav_path: "My path",
  nav_lang: "Languages", nav_friends: "Friends", nav_contact: "Contact",
  hero: "Student in Berlin. I write programs that solve mathematical problems.",
  hero_note: "The background is Conway's Game of Life, one of my projects.",
  h_about: "About me",
  about_1: "I'm interested in mathematical problems, and I want to write programs for them that actually work.",
  about_2: "Beyond that, I'm interested in the natural sciences as a whole.",
  h_projects: "Projects",
  p_life: "Cellular automaton by John Conway: cells live, die or are born by a few simple rules.",
  p_perlin: "Random but coherent maps generated from Perlin noise.",
  p_roulette: "The game of roulette as a program.",
  p_lang_title: "Own programming language",
  p_lang: "Planned: a programming language that I design and build myself.",
  planned: "Planned",
  all_code: "The code is on GitHub",
  h_tech: "Programming languages and tools",
  langs_h: "Programming languages", tools_h: "Tools",
  h_path: "My path",
  t1_when: "Grades 1 to 4", t1: "Kreativitäts-Grundschule Berlin Friedrichshain, a primary school focused on creativity.",
  t2_when: "From grade 5", t2: "Andreas-Gymnasium Berlin Friedrichshain, STEM profile.",
  t3_when: "Grades 7 to 11", t3: "Latin classes.",
  t4_when: "Now: Q1, grade 11", t4: "Advanced courses: special advanced course in mathematics, and computer science.",
  t5: "Abitur (final exams).",
  h_lang: "Languages",
  l_de: "German", l_de_v: "Native language",
  l_en: "English", l_en_v: "Very good, preparing for the Cambridge certificate",
  l_nl: "Dutch", l_nl_v: "Everyday conversation",
  l_la: "Latin", l_la_v: "Translation only, classes from grade 7 to 11",
  h_friends: "Friends",
  friends_intro: "These people have their own websites too:",
  h_contact: "Contact",
  contact: "You can find ways to reach me on a separate page.",
  contact_btn: "Go to contact page",
  c_home: "Richard Mack", c_title: "Contact", c_intro: "Write to me or have a look at my profiles.", c_mail: "Email",
  theme_dark: "Dark", theme_light: "Light"
};
const DE_THEME = { theme_dark: "Dunkel", theme_light: "Hell" };

const root = document.documentElement;
const nodes = document.querySelectorAll("[data-i18n]");
nodes.forEach(n => { n.dataset.de = n.textContent; });

const store = {
  get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} }
};

let lang = store.get("lang") || ((navigator.language || "de").startsWith("de") ? "de" : "en");
let theme = store.get("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

function render() {
  root.lang = lang;
  root.dataset.theme = theme;
  nodes.forEach(n => {
    const k = n.dataset.i18n;
    if (k === "theme_dark") {
      const key = theme === "dark" ? "theme_light" : "theme_dark";
      n.textContent = lang === "de" ? DE_THEME[key] : EN[key];
    } else {
      n.textContent = lang === "de" ? n.dataset.de : EN[k];
    }
  });
  document.getElementById("lang-btn").textContent = lang === "de" ? "EN" : "DE";
  document.getElementById("lang-btn").setAttribute("aria-label", lang === "de" ? "Switch to English" : "Auf Deutsch wechseln");
  document.title = "Richard Mack";
}

document.getElementById("lang-btn").addEventListener("click", () => {
  lang = lang === "de" ? "en" : "de"; store.set("lang", lang); render();
});
document.getElementById("theme-btn").addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark"; store.set("theme", theme); render(); draw();
});
render();

/* Game of Life im Hintergrund */
const canvas = document.getElementById("life");
const ctx = canvas ? canvas.getContext("2d") : null;
const SIZE = 14;
let cols, rows, grid;

function seed() {
  const w = canvas.clientWidth, h = canvas.clientHeight;
  canvas.width = w; canvas.height = h;
  cols = Math.ceil(w / SIZE); rows = Math.ceil(h / SIZE);
  grid = Array.from({ length: rows }, () => Array.from({ length: cols }, () => Math.random() < 0.22 ? 1 : 0));
}

function draw() {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = 0.2;
  ctx.fillStyle = getComputedStyle(root).getPropertyValue("--accent");
  for (let y = 0; y < rows; y++)
    for (let x = 0; x < cols; x++)
      if (grid[y][x]) ctx.fillRect(x * SIZE + 1, y * SIZE + 1, SIZE - 2, SIZE - 2);
}

function step() {
  const next = grid.map(r => r.slice());
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let n = 0;
      for (let dy = -1; dy <= 1; dy++)
        for (let dx = -1; dx <= 1; dx++)
          if (dx || dy) n += grid[(y + dy + rows) % rows][(x + dx + cols) % cols];
      next[y][x] = grid[y][x] ? (n === 2 || n === 3 ? 1 : 0) : (n === 3 ? 1 : 0);
    }
  }
  grid = next;
}

if (ctx) { seed(); draw(); }
if (ctx && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setInterval(() => { step(); draw(); }, 160);
}
let resizeTimer;
if (ctx) addEventListener("resize", () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(() => { seed(); draw(); }, 200); });
