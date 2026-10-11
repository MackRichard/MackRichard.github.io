/* ==========================================================
   Richard Mack – Persönliche Website
   1. Texte (Deutsch / Englisch)
   2. Sprachumschalter
   3. Hell/Dunkel-Umschalter
   4. Navigation: aktiver Abschnitt
   5. Conways Game of Life im Startbereich
   ========================================================== */

"use strict";

/* ---------- 1. Texte ---------- */

const TEXTS = {
  de: {
    "title.home": "Richard Mack – Persönliche Website",
    "title.contact": "Kontakt – Richard Mack",

    "ui.skip": "Zum Inhalt springen",
    "ui.nav": "Hauptnavigation",
    "ui.lang": "Sprache wechseln: Deutsch oder Englisch",
    "ui.theme": "Zwischen hellem und dunklem Design wechseln",

    "nav.about": "Über mich",
    "nav.projects": "Projekte",
    "nav.skills": "Fähigkeiten",
    "nav.path": "Mein Weg",
    "nav.languages": "Sprachen",
    "nav.friends": "Freunde",
    "nav.contact": "Kontakt",

    "hero.role": "Schüler am Andreas-Gymnasium Berlin, Abitur 2028",
    "hero.lead": "Ich löse mathematische Probleme mit selbst geschriebenen Programmen.",
    "hero.cta1": "Projekte ansehen",
    "hero.cta2": "Kontakt aufnehmen",
    "hero.hint": "Im Hintergrund läuft Conways Game of Life. Ein Klick setzt neue Zellen.",

    "about.title": "Über mich",
    "about.p1": "Ich interessiere mich für mathematische Probleme und möchte dafür Programme schreiben, die wirklich funktionieren. Insgesamt begeistern mich naturwissenschaftliche Themen.",
    "about.p2": "Seit der 5. Klasse besuche ich ein Gymnasium mit MINT-Profil. In der Oberstufe habe ich Mathematik (Spezialleistungskurs) und Informatik als Leistungskurse.",
    "about.f1.k": "Schule",
    "about.f1.v": "Andreas-Gymnasium Berlin Friedrichshain",
    "about.f2.k": "Aktuell",
    "about.f2.v": "Q1 (Klasse 11)",
    "about.f3.k": "Abitur",
    "about.f4.k": "Leistungskurse",
    "about.f4.v": "Mathematik (Spezial), Informatik",

    "projects.title": "Projekte",
    "projects.intro": "Meine Projekte schreibe ich in Python mit Pygame. Ein Klick auf ein Projekt öffnet das Repository auf GitHub.",
    "p1.name": "Conways Game of Life",
    "p1.desc": "Simulation des bekannten zellulären Automaten: Zellen leben, sterben und entstehen nach einfachen Regeln.",
    "p2.name": "Perlin Noise Map",
    "p2.desc": "Eine Karte, die mit Perlin Noise erzeugt wird und natürlich wirkende Landschaften zeigt.",
    "p3.name": "Roulette",
    "p3.desc": "Eine Umsetzung des Casinospiels Roulette als Programm.",
    "p4.name": "Eigene Programmiersprache",
    "p4.desc": "Ein Zukunftsprojekt: eine eigene Programmiersprache entwerfen und umsetzen.",
    "p4.status": "Geplant",
    "projects.github": "Mehr auf meinem GitHub-Profil",

    "skills.title": "Fähigkeiten",
    "skills.langs": "Programmiersprachen",
    "skills.tools": "Tools",

    "path.title": "Mein Weg",
    "t1.when": "Klasse 1 bis 4",
    "t1.title": "Kreativitäts-Grundschule Berlin Friedrichshain",
    "t1.text": "Grundschule mit dem Schwerpunkt Kreativität.",
    "t2.when": "Klasse 5",
    "t2.title": "Andreas-Gymnasium Berlin Friedrichshain",
    "t2.text": "Wechsel ans Gymnasium. Von Anfang an im MINT-Profil.",
    "t3.when": "Klasse 7 bis 11",
    "t3.title": "Latein",
    "t3.text": "Lateinunterricht mit Schwerpunkt auf dem Übersetzen.",
    "t4.when": "Jetzt: Q1 (Klasse 11)",
    "t4.title": "Oberstufe",
    "t4.text": "Leistungskurse Mathematik (Spezialleistungskurs) und Informatik.",
    "t5.title": "Abitur",
    "t5.text": "Geplanter Abschluss am Andreas-Gymnasium.",

    "lang.title": "Sprachen",
    "lang1.name": "Deutsch",
    "lang1.level": "Muttersprache",
    "lang2.name": "Englisch",
    "lang2.level": "Sehr gut, Cambridge-Zertifikat in Vorbereitung",
    "lang3.name": "Niederländisch",
    "lang3.level": "Alltagsverständigung",
    "lang4.name": "Latein",
    "lang4.level": "Nur Übersetzen (Unterricht Klasse 7 bis 11)",

    "friends.title": "Freunde",
    "friends.intro": "Persönliche Websites meiner Freunde. Schau gern vorbei.",

    "contact.title": "Kontakt",
    "contact.text": "Du erreichst mich per E-Mail und findest mich auf GitHub, LinkedIn und Instagram.",
    "contact.cta": "Zur Kontaktseite",

    "cp.title": "Kontakt",
    "cp.lead": "Hier findest du mich. Am besten erreichst du mich per E-Mail.",
    "cp.email": "E-Mail",
    "cp.back": "Zurück zur Startseite"
  },

  en: {
    "title.home": "Richard Mack – Personal Website",
    "title.contact": "Contact – Richard Mack",

    "ui.skip": "Skip to content",
    "ui.nav": "Main navigation",
    "ui.lang": "Switch language: German or English",
    "ui.theme": "Switch between light and dark theme",

    "nav.about": "About me",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.path": "My path",
    "nav.languages": "Languages",
    "nav.friends": "Friends",
    "nav.contact": "Contact",

    "hero.role": "Student at Andreas-Gymnasium Berlin, graduating 2028",
    "hero.lead": "I solve mathematical problems with programs I write myself.",
    "hero.cta1": "View projects",
    "hero.cta2": "Get in touch",
    "hero.hint": "Conway's Game of Life is running in the background. Click to add new cells.",

    "about.title": "About me",
    "about.p1": "I am interested in mathematical problems and want to write programs that actually work for them. More broadly, I am fascinated by the natural sciences.",
    "about.p2": "I have attended a secondary school with a STEM profile since 5th grade. In upper school my advanced courses are mathematics (special advanced course) and computer science.",
    "about.f1.k": "School",
    "about.f1.v": "Andreas-Gymnasium Berlin Friedrichshain",
    "about.f2.k": "Currently",
    "about.f2.v": "Q1 (grade 11)",
    "about.f3.k": "Abitur",
    "about.f4.k": "Advanced courses",
    "about.f4.v": "Mathematics (special), computer science",

    "projects.title": "Projects",
    "projects.intro": "I write my projects in Python with Pygame. Click a project to open its repository on GitHub.",
    "p1.name": "Conway's Game of Life",
    "p1.desc": "A simulation of the well-known cellular automaton: cells live, die and are born according to simple rules.",
    "p2.name": "Perlin Noise Map",
    "p2.desc": "A map generated with Perlin noise that shows natural-looking landscapes.",
    "p3.name": "Roulette",
    "p3.desc": "An implementation of the casino game roulette as a program.",
    "p4.name": "My own programming language",
    "p4.desc": "A project for the future: designing and building a programming language of my own.",
    "p4.status": "Planned",
    "projects.github": "More on my GitHub profile",

    "skills.title": "Skills",
    "skills.langs": "Programming languages",
    "skills.tools": "Tools",

    "path.title": "My path",
    "t1.when": "Grades 1 to 4",
    "t1.title": "Kreativitäts-Grundschule Berlin Friedrichshain",
    "t1.text": "A primary school with a focus on creativity.",
    "t2.when": "Grade 5",
    "t2.title": "Andreas-Gymnasium Berlin Friedrichshain",
    "t2.text": "Moved to secondary school, in the STEM profile from the start.",
    "t3.when": "Grades 7 to 11",
    "t3.title": "Latin",
    "t3.text": "Latin classes with a focus on translation.",
    "t4.when": "Now: Q1 (grade 11)",
    "t4.title": "Upper school",
    "t4.text": "Advanced courses in mathematics (special advanced course) and computer science.",
    "t5.title": "Abitur",
    "t5.text": "Planned graduation at Andreas-Gymnasium.",

    "lang.title": "Languages",
    "lang1.name": "German",
    "lang1.level": "Native language",
    "lang2.name": "English",
    "lang2.level": "Very good, Cambridge certificate in preparation",
    "lang3.name": "Dutch",
    "lang3.level": "Everyday conversation",
    "lang4.name": "Latin",
    "lang4.level": "Translation only (classes in grades 7 to 11)",

    "friends.title": "Friends",
    "friends.intro": "Personal websites of my friends. Feel free to take a look.",

    "contact.title": "Contact",
    "contact.text": "You can reach me by email and find me on GitHub, LinkedIn and Instagram.",
    "contact.cta": "Go to contact page",

    "cp.title": "Contact",
    "cp.lead": "Here is where you can find me. Email is the best way to reach me.",
    "cp.email": "Email",
    "cp.back": "Back to home page"
  }
};

/* ---------- 2. Sprachumschalter ---------- */

function readStorage(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
function writeStorage(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* Speichern nicht möglich, kein Problem */ }
}

function applyLanguage(lang) {
  const dict = TEXTS[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-label]").forEach(function (el) {
    const value = dict[el.dataset.i18nLabel];
    if (value !== undefined) el.setAttribute("aria-label", value);
  });
  document.querySelectorAll(".lang-ctl [data-l]").forEach(function (el) {
    el.classList.toggle("on", el.dataset.l === lang);
  });

  writeStorage("lang", lang);
}

function initialLanguage() {
  const saved = readStorage("lang");
  if (saved === "de" || saved === "en") return saved;
  return (navigator.language || "de").toLowerCase().startsWith("de") ? "de" : "en";
}

let currentLang = initialLanguage();
applyLanguage(currentLang);

document.getElementById("lang-toggle").addEventListener("click", function () {
  currentLang = currentLang === "de" ? "en" : "de";
  applyLanguage(currentLang);
});

/* ---------- 3. Hell/Dunkel-Umschalter ---------- */

function initialTheme() {
  const saved = readStorage("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

let currentTheme = initialTheme();
document.documentElement.setAttribute("data-theme", currentTheme);

document.getElementById("theme-toggle").addEventListener("click", function () {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  writeStorage("theme", currentTheme);
  if (window.redrawLife) window.redrawLife();
});

/* ---------- 4. Navigation: aktiver Abschnitt ---------- */

(function highlightActiveSection() {
  if (!("IntersectionObserver" in window)) return;

  const links = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
  const map = new Map();
  links.forEach(function (link) {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) map.set(target, link);
  });
  if (map.size === 0) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (l) { l.classList.remove("active"); });
      map.get(entry.target).classList.add("active");
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  map.forEach(function (_, section) { observer.observe(section); });
})();

/* ---------- 5. Conways Game of Life ---------- */

(function gameOfLife() {
  const canvas = document.getElementById("life");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const hero = canvas.parentElement;
  const CELL = 16;          // Zellgröße in CSS-Pixeln
  const STEP_MS = 160;      // Zeit pro Generation
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let cols = 0, rows = 0, grid = null, next = null;
  let stale = 0, lastPop = [-1, -1];

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const w = hero.clientWidth;
    const h = hero.clientHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(w / CELL);
    rows = Math.ceil(h / CELL);
    grid = new Uint8Array(cols * rows);
    next = new Uint8Array(cols * rows);
    seed();
  }

  function seed() {
    for (let i = 0; i < grid.length; i++) grid[i] = Math.random() < 0.22 ? 1 : 0;
    stale = 0;
    lastPop = [-1, -1];
    draw();
  }

  function step() {
    let pop = 0;
    for (let y = 0; y < rows; y++) {
      const up = ((y - 1 + rows) % rows) * cols;
      const mid = y * cols;
      const down = ((y + 1) % rows) * cols;
      for (let x = 0; x < cols; x++) {
        const l = (x - 1 + cols) % cols;
        const r = (x + 1) % cols;
        const n = grid[up + l] + grid[up + x] + grid[up + r] +
                  grid[mid + l] + grid[mid + r] +
                  grid[down + l] + grid[down + x] + grid[down + r];
        const alive = grid[mid + x] === 1;
        const lives = alive ? (n === 2 || n === 3) : n === 3;
        next[mid + x] = lives ? 1 : 0;
        if (lives) pop++;
      }
    }
    const tmp = grid; grid = next; next = tmp;

    // Wenn nichts Neues mehr passiert, wird neu gesät
    if (pop === lastPop[0] || pop === lastPop[1]) stale++; else stale = 0;
    lastPop = [pop, lastPop[0]];
    if (pop < 6 || stale > 40) seed();
  }

  function draw() {
    const color = getComputedStyle(document.documentElement).getPropertyValue("--life").trim();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    const size = CELL - 2;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        if (grid[y * cols + x]) ctx.fillRect(x * CELL + 1, y * CELL + 1, size, size);
      }
    }
  }

  window.redrawLife = draw;

  // Klick fügt eine kleine Gruppe lebender Zellen hinzu
  hero.addEventListener("pointerdown", function (e) {
    const rect = hero.getBoundingClientRect();
    const cx = Math.floor((e.clientX - rect.left) / CELL);
    const cy = Math.floor((e.clientY - rect.top) / CELL);
    for (let dy = -2; dy <= 2; dy++) {
      for (let dx = -2; dx <= 2; dx++) {
        const x = (cx + dx + cols) % cols;
        const y = (cy + dy + rows) % rows;
        if (Math.random() < 0.55) grid[y * cols + x] = 1;
      }
    }
    stale = 0;
    draw();
  });

  let timer = null;
  function loop() {
    if (!document.hidden) { step(); draw(); }
    timer = setTimeout(loop, STEP_MS);
  }

  let resizeTimer = null;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 200);
  });

  resize();
  if (!reduceMotion) loop();
})();
