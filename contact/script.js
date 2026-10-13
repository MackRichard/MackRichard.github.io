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
    "projects.intro": "Meine Projekte schreibe ich in Python. Ein Klick auf ein Projekt öffnet das Repository auf GitHub.",
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
    "lang2.level": "C1, Cambridge-Zertifikat in Vorbereitung",
    "lang3.name": "Niederländisch",
    "lang3.level": "A2 bis B1",
    "lang4.name": "Latein",
    "lang4.level": "Nur Übersetzen (Unterricht Klasse 7 bis 11)",

    "hob.title": "Hobbys & Errungenschaften",
    "hob.min": "Minuten gestreamt",
    "hob.k1": "Duolingo Streak",
    "hob.k1.num": "1100+",
    "hob.k1.unit": "Tage",
    "hob.k1.link": "Duolingo-Profil",
    "hob.k2": "Lieblingskünstler",
    "hob.k2.num": "45.000+",
    "hob.k3": "Lieblingsalbum",
    "hob.k3.num": "7500+",
    "hob.k4": "Lieblingshobby",
    "hob.k4.v": "Spazieren gehen, Freizeitparks besuchen",
    "hob.k5": "Nächstes großes Ziel",
    "hob.k5.v": "Von Berlin nach Potsdam wandern",
    "hob.k6": "Aktuell am Lernen",
    "hob.k6.v": "Niederländisch und Portugiesisch",

    "cert.title": "Zertifikate",
    "c.dk": "Dänemark",
    "c.se": "Schweden",
    "c.fr": "Frankreich",
    "c.nl": "Niederlande",
    "c.de": "Deutschland",
    "c.at": "Österreich",
    "c.cz": "Tschechien",
    "c.pl": "Polen",
    "c.pt": "Portugal",
    "c.es": "Spanien",
    "c.it": "Italien",
    "visit.title": "Besuchte Länder",
    "visit.count": "Länder in Europa",
    "visit.world": "Welt",
    "visit.europe": "Europa",
    "visit.view": "Kartenausschnitt wählen",
    "visit.map": "Karte: besuchte Länder und Wunschziele sind farbig markiert. Die Listen darunter nennen sie alle.",
    "reg1": "Nordeuropa",
    "reg2": "Mittel- und Westeuropa",
    "reg3": "Südeuropa",
    "hob.toggle": "Hobbys & Errungenschaften ein- oder ausklappen",
    "cp.email.ariaShow": "E-Mail-Adresse anzeigen",
    "cp.email.ariaOpen": "E-Mail schreiben, vorher folgt eine Bestätigung",
    "cp.note.hidden": "Die E-Mail-Adresse ist unscharf, um sie vor Spam zu schützen. Ein Klick darauf zeigt sie an.",
    "cp.note.open": "Ein weiterer Klick auf die Adresse öffnet nach einer Bestätigung dein E-Mail-Programm.",
    "cp.confirm": "E-Mail-Programm öffnen und eine Nachricht schreiben an:",
    "cp.open": "E-Mail-Programm öffnen",
    "cp.copy": "Adresse kopieren",
    "cp.copied": "Kopiert",
    "cp.cancel": "Abbrechen",
    "ce.mo": "Teilnahme an der Matheolympiade",
    "ce.biber": "3. Platz beim Informatik-Biber",
    "ce.bjs25": "Bundesjugendspiele: 1081 Punkte",
    "ce.farb": "Teilnahme an Chemkids „Rundis Farblabor“",
    "ce.farb.d": "24. Juni 2024",
    "ce.kang": "Känguru-Wettbewerb: 67 Punkte",
    "ce.kang.d": "Mai 2024",
    "ce.zucker": "Erfolgreiche Teilnahme an Chemkids „Rundis Zuckerlabor“",
    "ce.zucker.d": "23. Januar 2024",
    "ce.big": "Erfolgreiche Teilnahme an The BIG Challenge",
    "ce.bjs24": "Bundesjugendspiele: 1080 Punkte",
    "ce.math": "Erfolgreiche Teilnahme am Matheathlon",
    "ce.math.d": "09. September 2021",
    "ui.top": "Nach oben",
    "title.404": "404 – Seite nicht gefunden – Richard Mack",
    "e404.lead": "Diese Seite gibt es nicht.",
    "e404.text": "Wie bei Conways Game of Life: Hier ist keine Zelle mehr am Leben. Vielleicht hat sich ein Link geändert oder ein Tippfehler eingeschlichen.",
    "e404.home": "Zur Startseite",
    "e404.contact": "Zur Kontaktseite",
    "cp.other": "Weitere Wege",
    "msg.title": "Anonyme Nachricht",
    "msg.sub": "Etwas, das du mir schon immer sagen wolltest? Schreib es einfach auf.",
    "msg.f1.t": "Anonym",
    "msg.f1.d": "Kein Name, keine E-Mail-Adresse, keine Anmeldung.",
    "msg.f2.t": "Direkt",
    "msg.f2.d": "Deine Nachricht landet sofort in meinem Postfach.",
    "msg.f3.t": "Einfach",
    "msg.f3.d": "Text schreiben, absenden, fertig. Das dauert eine halbe Minute.",
    "msg.label": "Deine Nachricht",
    "msg.ph": "Schreib hier, was du mir sagen möchtest …",
    "msg.send": "Anonym absenden",
    "msg.sending": "Wird gesendet …",
    "msg.ok": "Danke! Deine Nachricht ist bei mir angekommen.",
    "msg.empty": "Bitte schreib zuerst eine Nachricht.",
    "msg.err": "Das hat leider nicht geklappt. Versuch es später noch einmal oder schreib mir per E-Mail.",
    "msg.setup": "Das Formular ist noch nicht eingerichtet.",
    "msg.reply": "Ich kann dir nicht antworten, weil ich nicht weiß, wer du bist. Wenn du eine Antwort möchtest, schreib in die Nachricht, wie ich dich erreiche.",
    "msg.privacy": "Technisch wird die Nachricht über den Dienst Web3Forms an mich weitergeleitet.",
    "map.seen": "Besucht",
    "map.wish": "Wunschziele",
    "reg4": "Wunschländer",
    "c.id": "Indonesien",
    "c.pe": "Peru",
    "c.us": "USA",
    "c.be": "Belgien",
    "friends.title": "Freunde",
    "friends.intro": "Persönliche Websites meiner Freunde. Schau gern vorbei.",

    "contact.title": "Kontakt",
    "contact.text": "Du erreichst mich per E-Mail und findest mich auf GitHub, LinkedIn und Instagram.",
    "contact.anon": "Auf der Kontaktseite kannst du mir außerdem anonym eine Nachricht schicken: ohne Name, ohne E-Mail-Adresse, direkt in mein Postfach.",
    "contact.cta": "Zur Kontaktseite",

    "cp.title": "Kontakt",
    "cp.lead": "Schreib mir anonym eine Nachricht oder erreiche mich über einen der Wege weiter unten.",
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
    "projects.intro": "I write my projects in Python. Click a project to open its repository on GitHub.",
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
    "lang2.level": "C1, Cambridge certificate in preparation",
    "lang3.name": "Dutch",
    "lang3.level": "A2 to B1",
    "lang4.name": "Latin",
    "lang4.level": "Translation only (classes in grades 7 to 11)",

    "hob.title": "Hobbies & Achievements",
    "hob.min": "minutes streamed",
    "hob.k1": "Duolingo streak",
    "hob.k1.num": "1,100+",
    "hob.k1.unit": "days",
    "hob.k1.link": "Duolingo profile",
    "hob.k2": "Favorite artist",
    "hob.k2.num": "45,000+",
    "hob.k3": "Favorite album",
    "hob.k3.num": "7,500+",
    "hob.k4": "Favorite hobbies",
    "hob.k4.v": "Going for walks, visiting amusement parks",
    "hob.k5": "Next big goal",
    "hob.k5.v": "Hiking from Berlin to Potsdam",
    "hob.k6": "Currently learning",
    "hob.k6.v": "Dutch and Portuguese",

    "cert.title": "Certificates",
    "c.dk": "Denmark",
    "c.se": "Sweden",
    "c.fr": "France",
    "c.nl": "Netherlands",
    "c.de": "Germany",
    "c.at": "Austria",
    "c.cz": "Czechia",
    "c.pl": "Poland",
    "c.pt": "Portugal",
    "c.es": "Spain",
    "c.it": "Italy",
    "visit.title": "Countries visited",
    "visit.count": "countries in Europe",
    "visit.world": "World",
    "visit.europe": "Europe",
    "visit.view": "Choose map section",
    "visit.map": "Map: visited countries and wish-list countries are highlighted in color. The lists below name them all.",
    "reg1": "Northern Europe",
    "reg2": "Central and Western Europe",
    "reg3": "Southern Europe",
    "hob.toggle": "Expand or collapse Hobbies & Achievements",
    "cp.email.ariaShow": "Show email address",
    "cp.email.ariaOpen": "Write an email, a confirmation comes first",
    "cp.note.hidden": "The email address is blurred to protect it from spam. Click it to reveal it.",
    "cp.note.open": "Another click on the address opens your email app after a confirmation.",
    "cp.confirm": "Open your email app and write a message to:",
    "cp.open": "Open email app",
    "cp.copy": "Copy address",
    "cp.copied": "Copied",
    "cp.cancel": "Cancel",
    "ce.mo": "Participation in the Mathematics Olympiad",
    "ce.biber": "3rd place at the Informatik-Biber",
    "ce.bjs25": "Bundesjugendspiele: 1081 points",
    "ce.farb": "Participation in Chemkids “Rundis Farblabor”",
    "ce.farb.d": "June 24, 2024",
    "ce.kang": "Känguru competition: 67 points",
    "ce.kang.d": "May 2024",
    "ce.zucker": "Successful participation in Chemkids “Rundis Zuckerlabor”",
    "ce.zucker.d": "January 23, 2024",
    "ce.big": "Successful participation in The BIG Challenge",
    "ce.bjs24": "Bundesjugendspiele: 1080 points",
    "ce.math": "Successful participation in the Matheathlon",
    "ce.math.d": "September 9, 2021",
    "ui.top": "Back to top",
    "title.404": "404 – Page not found – Richard Mack",
    "e404.lead": "This page does not exist.",
    "e404.text": "Just like in Conway's Game of Life: no cell is alive here anymore. Maybe a link has changed or a typo slipped in.",
    "e404.home": "Go to home page",
    "e404.contact": "Go to contact page",
    "cp.other": "Other ways",
    "msg.title": "Anonymous message",
    "msg.sub": "Something you always wanted to tell me? Just write it down.",
    "msg.f1.t": "Anonymous",
    "msg.f1.d": "No name, no email address, no sign-up.",
    "msg.f2.t": "Direct",
    "msg.f2.d": "Your message lands straight in my inbox.",
    "msg.f3.t": "Easy",
    "msg.f3.d": "Write, send, done. It takes half a minute.",
    "msg.label": "Your message",
    "msg.ph": "Write what you want to tell me here …",
    "msg.send": "Send anonymously",
    "msg.sending": "Sending …",
    "msg.ok": "Thank you! Your message has reached me.",
    "msg.empty": "Please write a message first.",
    "msg.err": "That did not work, unfortunately. Please try again later or write to me by email.",
    "msg.setup": "The form is not set up yet.",
    "msg.reply": "I cannot reply, because I do not know who you are. If you would like an answer, include in your message how I can reach you.",
    "msg.privacy": "Technically, the message is forwarded to me through the service Web3Forms.",
    "map.seen": "Visited",
    "map.wish": "Wish list",
    "reg4": "Wish list",
    "c.id": "Indonesia",
    "c.pe": "Peru",
    "c.us": "USA",
    "c.be": "Belgium",
    "friends.title": "Friends",
    "friends.intro": "Personal websites of my friends. Feel free to take a look.",

    "contact.title": "Contact",
    "contact.text": "You can reach me by email and find me on GitHub, LinkedIn and Instagram.",
    "contact.anon": "On the contact page you can also send me an anonymous message: no name, no email address, straight to my inbox.",
    "contact.cta": "Go to contact page",

    "cp.title": "Contact",
    "cp.lead": "Send me an anonymous message or reach me in one of the ways further down.",
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
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    const value = dict[el.dataset.i18nPlaceholder];
    if (value !== undefined) el.setAttribute("placeholder", value);
  });
  document.querySelectorAll(".lang-ctl [data-l]").forEach(function (el) {
    el.classList.toggle("on", el.dataset.l === lang);
  });

  writeStorage("lang", lang);
  (window.langHooks || []).forEach(function (fn) { fn(); });
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

/* ---------- 6. Uhrzeit in Berlin (Fußzeile) ---------- */

(function berlinClock() {
  const el = document.getElementById("clock");
  if (!el) return;
  const fmt = new Intl.DateTimeFormat("de-DE", {
    timeZone: "Europe/Berlin",
    hour: "2-digit", minute: "2-digit", second: "2-digit",
    hourCycle: "h23"
  });
  function tick() { el.textContent = fmt.format(new Date()); }
  tick();
  setInterval(tick, 1000);
})();

/* ---------- 7. Karte der besuchten Länder ---------- */

(function visitedMap() {
  const box = document.getElementById("map-box");
  if (!box) return;
  const svg = document.getElementById("map");
  const landPath = document.getElementById("map-land");
  const wishPath = document.getElementById("map-wish");
  const seenPath = document.getElementById("map-seen");
  const tabs = Array.from(box.querySelectorAll(".map-tab"));

  // Besuchte Länder (ISO-3-Buchstaben-Codes). Hier einfach ergänzen.
  const VISITED = new Set(["DEU", "AUT", "POL", "DNK", "SWE", "NLD", "FRA", "ITA", "ESP", "PRT", "CZE"]);
  // Wunschländer (werden in der Akzentfarbe markiert)
  const WISH = new Set(["IDN", "PER", "USA", "BEL"]);
  const BY_NAME = { "Germany": "DEU", "Austria": "AUT", "Poland": "POL", "Denmark": "DNK", "Sweden": "SWE",
                    "Netherlands": "NLD", "France": "FRA", "Italy": "ITA", "Spain": "ESP", "Portugal": "PRT",
                    "Czech Republic": "CZE", "Czechia": "CZE",
                    "Indonesia": "IDN", "Peru": "PER", "United States of America": "USA",
                    "United States": "USA", "Belgium": "BEL" };
  const DATA_URL = "https://cdn.jsdelivr.net/gh/johan/world.geo.json@master/countries.geo.json";

  // Ausschnitte: sx staucht die Breite (Europa), box ist der sichtbare Bereich
  const VIEWS = {
    world:  { sx: 1,    box: [0, 6, 360, 142] },
    europe: { sx: 0.64, box: [(180 - 11) * 0.64, 20, 43 * 0.64, 36] }
  };

  let features = [];

  function codeOf(f) {
    const p = f.properties || {};
    const c = f.id || p.iso_a3 || p.ISO_A3 || p["ISO3166-1-Alpha-3"] || p.ADM0_A3;
    if (typeof c === "string" && c.length === 3) return c.toUpperCase();
    return BY_NAME[p.name || p.NAME || p.ADMIN] || "";
  }

  function ringPath(ring, sx) {
    let d = "", prev = 0;
    ring.forEach(function (pt, i) {
      const x = ((pt[0] + 180) * sx).toFixed(2);
      const y = (90 - pt[1]).toFixed(2);
      if (i === 0 || Math.abs(pt[0] - prev) > 180) {
        if (i > 0) d += "Z";
        d += "M" + x + " " + y;
      } else {
        d += "L" + x + " " + y;
      }
      prev = pt[0];
    });
    return d + "Z";
  }

  function inEurope(poly) {
    const p = poly[0] && poly[0][0];
    return !!p && p[0] > -25 && p[0] < 45 && p[1] > 30 && p[1] < 72;
  }

  function geomPath(g, sx, europeOnly) {
    if (!g) return "";
    const polys = g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : [];
    let d = "";
    polys.forEach(function (poly) {
      if (europeOnly && !inEurope(poly)) return;   // z. B. Überseegebiete ausblenden
      poly.forEach(function (ring) { d += ringPath(ring, sx); });
    });
    return d;
  }

  function render(view) {
    const v = VIEWS[view];
    let land = "", wish = "", seen = "";
    features.forEach(function (f) {
      if (f.kind === "seen") seen += geomPath(f.geom, v.sx, true);
      else if (f.kind === "wish") wish += geomPath(f.geom, v.sx, false);
      else land += geomPath(f.geom, v.sx, false);
    });
    landPath.setAttribute("d", land);
    wishPath.setAttribute("d", wish);
    seenPath.setAttribute("d", seen);
    svg.setAttribute("viewBox", v.box.join(" "));
    tabs.forEach(function (t) { t.setAttribute("aria-pressed", String(t.dataset.view === view)); });
  }

  tabs.forEach(function (t) {
    t.addEventListener("click", function () { render(t.dataset.view); });
  });

  fetch(DATA_URL)
    .then(function (r) { if (!r.ok) throw new Error("map"); return r.json(); })
    .then(function (data) {
      features = data.features
        .filter(function (f) { return codeOf(f) !== "ATA"; })
        .map(function (f) {
          const c = codeOf(f);
          return { kind: VISITED.has(c) ? "seen" : WISH.has(c) ? "wish" : "land", geom: f.geometry };
        });
      if (!features.some(function (f) { return f.kind === "seen"; })) return;
      render("world");
      box.hidden = false;
    })
    .catch(function () { /* Karte bleibt ausgeblendet, die Liste darunter reicht dann */ });
})();

/* ---------- 8. E-Mail: unscharf, dann Bestätigung ---------- */

(function emailGuard() {
  const btn = document.getElementById("email-btn");
  if (!btn) return;
  const text = document.getElementById("email-text");
  const panel = document.getElementById("email-confirm");
  const question = document.getElementById("email-confirm-q");
  const note = document.getElementById("email-note");
  const openBtn = document.getElementById("email-open");
  const copyBtn = document.getElementById("email-copy");
  const cancelBtn = document.getElementById("email-cancel");

  // Die Adresse steht nicht als fertiger Text im HTML, sondern wird hier zusammengesetzt
  const address = btn.dataset.user + "@" + btn.dataset.domain;
  let revealed = false;

  function t(key) { return TEXTS[currentLang][key]; }

  function refresh() {
    btn.setAttribute("aria-label", t(revealed ? "cp.email.ariaOpen" : "cp.email.ariaShow"));
    note.textContent = t(revealed ? "cp.note.open" : "cp.note.hidden");
    if (!panel.hidden) question.textContent = t("cp.confirm") + " " + address;
  }

  function closePanel() {
    panel.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", function () {
    if (!revealed) {
      revealed = true;
      text.textContent = address;
      text.classList.remove("blur");
    } else {
      panel.hidden = false;
      question.textContent = t("cp.confirm") + " " + address;
      btn.setAttribute("aria-expanded", "true");
      openBtn.focus();
    }
    refresh();
  });

  openBtn.addEventListener("click", function () {
    window.location.href = "mailto:" + address;
    closePanel();
  });

  copyBtn.addEventListener("click", function () {
    function done() {
      copyBtn.textContent = t("cp.copied");
      setTimeout(function () { copyBtn.textContent = t("cp.copy"); }, 1800);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(address).then(done, done);
    } else {
      done();
    }
  });

  cancelBtn.addEventListener("click", function () { closePanel(); btn.focus(); });
  panel.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closePanel(); btn.focus(); }
  });

  (window.langHooks = window.langHooks || []).push(refresh);
  refresh();
})();

/* ---------- 9. Duolingo-Streak zählt automatisch weiter ---------- */

(function duolingoStreak() {
  const el = document.getElementById("streak");
  if (!el) return;
  // data-start = Tag 1 der Serie (JJJJ-MM-TT). Tage werden nach Berliner Zeit gezählt.
  const p = el.dataset.start.split("-").map(Number);
  const startUTC = Date.UTC(p[0], p[1] - 1, p[2]);
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Berlin", year: "numeric", month: "2-digit", day: "2-digit"
  }).formatToParts(new Date());
  function part(type) { return Number(parts.find(function (x) { return x.type === type; }).value); }
  const todayUTC = Date.UTC(part("year"), part("month") - 1, part("day"));
  const days = Math.round((todayUTC - startUTC) / 86400000) + 1;
  if (days > 0) el.textContent = String(days);
})();

/* ---------- 10. Knopf: nach oben ---------- */

(function backToTop() {
  const btn = document.getElementById("to-top");
  if (!btn) return;
  function update() { btn.classList.toggle("show", window.scrollY > 600); }
  window.addEventListener("scroll", update, { passive: true });
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  update();
})();

/* ---------- 11. Anonyme Nachricht (Web3Forms) ---------- */

(function anonymousMessage() {
  const form = document.getElementById("anon-form");
  if (!form) return;
  const area = document.getElementById("msg-text");
  const count = document.getElementById("msg-count");
  const send = document.getElementById("msg-send");
  const status = document.getElementById("msg-status");
  let state = null;

  function t(key) { return TEXTS[currentLang][key]; }

  function renderStatus() {
    status.textContent = state ? t(state.key) : "";
    status.className = "msg-status" + (state ? " " + state.kind : "");
  }
  function setState(key, kind) {
    state = key ? { key: key, kind: kind } : null;
    renderStatus();
  }
  function updateCount() { count.textContent = area.value.length + " / " + area.maxLength; }

  area.addEventListener("input", function () {
    updateCount();
    if (state) setState(null);
  });

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const text = area.value.trim();
    if (text.length < 3) { setState("msg.empty", "error"); area.focus(); return; }

    const data = {};
    new FormData(form).forEach(function (value, key) { data[key] = value; });
    data.message = text;

    // Honeypot: Ein Bot füllt das versteckte Feld aus. Dann so tun, als wäre alles gut.
    if (data.botcheck) { area.value = ""; updateCount(); setState("msg.ok", "ok"); return; }

    // Solange der Platzhalter noch drin steht, wird nichts gesendet
    if (!data.access_key || data.access_key.indexOf("DEIN_") === 0) {
      setState("msg.setup", "error");
      return;
    }

    send.disabled = true;
    send.textContent = t("msg.sending");
    setState(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (res.ok && json.success) {
        area.value = "";
        updateCount();
        setState("msg.ok", "ok");
      } else {
        setState("msg.err", "error");
      }
    } catch (err) {
      setState("msg.err", "error");
    }
    send.disabled = false;
    send.textContent = t("msg.send");
  });

  (window.langHooks = window.langHooks || []).push(function () {
    renderStatus();
    if (!send.disabled) send.textContent = t("msg.send");
  });
})();

/* ---------- 12. Scroll-Effekt: unscharf, dann scharf (nur Startseite) ---------- */

(function scrollReveal() {
  if (!document.getElementById("about")) return;   // Kontakt- und Fehlerseite: kein Effekt
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const selectors = [
    ".hero-inner > *", ".section > h2", ".content > p",
    ".facts > div", ".projects > li", ".skills > div", ".timeline > li",
    ".certs > li", ".rows > li",
    // Hobbys & Errungenschaften: Pfeil-Knopf und alles, was darin steckt
    ".fold > summary", ".visited > h3", ".visit-count", ".map-box", ".regions > div"
  ];

  const items = [];
  selectors.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      if (items.indexOf(el) === -1) items.push(el);
    });
  });

  // Geschwister werden leicht versetzt scharf, das wirkt ruhiger
  const seen = new Map();
  items.forEach(function (el) {
    const i = seen.get(el.parentElement) || 0;
    seen.set(el.parentElement, i + 1);
    el.style.setProperty("--d", Math.min(i, 5) * 70 + "ms");
    el.classList.add("reveal");
  });

  // Beim Betreten wird scharf, beim Verlassen (nach oben oder unten) wieder unscharf
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      entry.target.classList.toggle("in", entry.isIntersecting);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  items.forEach(function (el) { observer.observe(el); });

  // Klappbereich: Beim Öffnen und Schließen wird der Effekt für den Inhalt neu gestartet,
  // damit er auch beim erneuten Aufklappen wieder von unscharf zu scharf läuft.
  const fold = document.querySelector(".fold");
  if (fold) {
    fold.addEventListener("toggle", function () {
      items.forEach(function (el) {
        if (!fold.contains(el) || el.tagName === "SUMMARY") return;
        el.classList.remove("in");
        observer.unobserve(el);
        observer.observe(el);
      });
    });
  }
})();
