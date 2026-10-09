const themeToggle = document.getElementById('themeToggle');
const languageToggle = document.getElementById('languageToggle');

const translations = {
  de: {
    'meta.title': 'Richard Mack | Portfolio',
    'meta.description': 'Richard Mack – Schüler, Programmierer und MINT-Enthusiast aus Berlin.',
    'nav.about': 'Über mich', 'nav.projects': 'Projekte', 'nav.skills': 'Skills', 'nav.path': 'Mein Weg', 'nav.contact': 'Kontakt',
    'hero.eyebrow': 'PROGRAMMIERER · MINT · BERLIN',
    'hero.description': 'Ich bin ein ambitionierter Schüler mit einer Leidenschaft für Informatik, Mathematik und das Entwickeln eigener Ideen – von Simulationen bis hin zu meiner eigenen Programmiersprache.',
    'hero.projectsButton': 'Projekte ansehen',
    'about.heading': 'Über mich',
    'about.lead': 'Ich interessiere mich dafür, aus mathematischen Ideen funktionierende Programme zu machen und dabei ständig Neues auszuprobieren.',
    'about.body': 'Besonders spannend finde ich Projekte, bei denen man nicht einfach nur vorhandene Werkzeuge benutzt, sondern selbst etwas entwickelt und versteht, was dahinter steckt. Deshalb beschäftige ich mich neben Schulprojekten auch mit eigenen Simulationen, Algorithmen und langfristig mit dem Bau einer eigenen Programmiersprache.',
    'facts.grade': 'Klasse · Q1', 'facts.abitur': 'Abitur', 'facts.mint': 'Profil seit Klasse 5', 'facts.jufo': 'Interesse an Jugend forscht',
    'projects.heading': 'Projekte',
    'projects.gameDescription': 'Eine programmierte Simulation des bekannten zellulären Automaten. Ein Projekt zwischen Informatik, Mathematik und emergentem Verhalten.',
    'projects.languageTitle': 'Eigene Programmiersprache',
    'projects.languageDescription': 'Ein zukünftiges Langzeitprojekt: eine eigene Programmiersprache mit Python als technischer Grundlage – von der Syntax bis zur Ausführung.',
    'projects.perlinDescription': 'Generierung von organisch wirkenden Karten mithilfe von Perlin Noise. Ein Experiment mit Algorithmen, Zufall und prozeduraler Generierung.',
    'projects.rouletteDescription': 'Eine selbst programmierte Roulette-Anwendung als praktisches Projekt zum Arbeiten mit Logik, Zufall und Benutzerinteraktion.',
    'projects.researchDescription': 'Ich interessiere mich für Jugend forscht und möchte zukünftig eigene wissenschaftlich-technische Fragestellungen als Projekte verfolgen.',
    'projects.github': 'GitHub ↗', 'tags.simulation': 'Simulation', 'tags.compiler': 'Compiler', 'tags.planned': 'Geplant', 'tags.algorithms': 'Algorithmen',
    'skills.heading': 'Skills & Tools', 'skills.languages': 'Programmiersprachen', 'skills.tools': 'Tools',
    'timeline.heading': 'Mein Weg', 'timeline.grade1': 'Kl. 1–4', 'timeline.mintYear': 'seit Kl. 5',
    'timeline.schoolTitle': 'KreativitätsGrundschule Berlin Friedrichshain', 'timeline.schoolDescription': 'Grundschulzeit mit besonderem Fokus auf Kreativität.',
    'timeline.mintTitle': 'MINT-Profil', 'timeline.mintDescription': 'Durchgehender Schwerpunkt auf Mathematik, Informatik, Naturwissenschaften und Technik seit der 5. Klasse.',
    'timeline.internshipTitle': 'Praktikum am dEIn-Labor · TU Berlin', 'timeline.internshipDescription': 'Praktikum am Elektrotechnik- und Informatik-Labor der TU Berlin mit Einblicken in technische und informatische Arbeitsbereiche.',
    'timeline.gymTitle': 'Andreas Gymnasium · Q1', 'timeline.gymDescription': '11. Klasse mit MINT-Profil. Leistungskurse: Spezialleistungskurs Mathematik und Informatik.',
    'timeline.latinumTitle': 'Latinum', 'timeline.latinumDescription': 'Geplantes Latinum im Sommer 2027 nach Lateinunterricht von Klasse 7 bis einschließlich Klasse 11.',
    'timeline.abiturTitle': 'Abitur', 'timeline.abiturDescription': 'Geplanter Abschluss am Andreas Gymnasium Berlin Friedrichshain.',
    'languages.heading': 'Sprachen', 'languages.german': 'Deutsch', 'languages.germanLevel': 'Muttersprache',
    'languages.english': 'Englisch', 'languages.englishLevel': 'Sehr gute Kenntnisse · Cambridge-Zertifikat in Vorbereitung',
    'languages.dutch': 'Niederländisch', 'languages.dutchLevel': 'Alltagsverständigung', 'languages.latin': 'Latein',
    'languages.latinLevel': 'Übersetzung · Unterricht Klasse 7–11 · Latinum 2027',
    'interests.heading': 'Interessen & Errungenschaften', 'interests.streakLabel': 'Duolingo-Streak', 'interests.streakValue': '1100+ Tage',
    'interests.streakDescription': 'Eine lange Lernserie – klicke, um mein Duolingo-Profil zu besuchen.',
    'interests.hobbyLabel': 'Lieblingshobby', 'interests.hobbyValue': 'Spazieren gehen', 'interests.artistLabel': 'Lieblingskünstler',
    'interests.streamed': '45.000+ Minuten gestreamt', 'interests.albumLabel': 'Lieblingsalbum', 'interests.goalLabel': 'Nächstes großes Ziel',
    'interests.goalValue': 'Von Berlin nach Potsdam wandern', 'currently.heading': 'Aktuell',
    'currently.language': 'Ich lerne gerade Niederländisch und Portugiesisch.',
    'currently.projects': 'Ich arbeite gerade an meiner Website und größeren Projekten.',
    'currently.school': 'Ich denke gerade über Schule und die nächsten Schritte nach.',
    'network.heading': 'Netzwerk', 'network.intro': 'Websites von Freunden und Leuten, mit denen ich mich über Technik und eigene Projekte austausche.', 'network.website': 'Persönliche Website',
    'contact.eyebrow': 'KONTAKT', 'contact.heading': 'Lass uns in Kontakt bleiben.', 'contact.description': 'Du findest mich auf GitHub und kannst dort meine Projekte verfolgen.',
    'footer.top': 'Nach oben ↑'
  },
  en: {
    'meta.title': 'Richard Mack | Portfolio',
    'meta.description': 'Richard Mack – student, programmer and STEM enthusiast from Berlin.',
    'nav.about': 'About', 'nav.projects': 'Projects', 'nav.skills': 'Skills', 'nav.path': 'My journey', 'nav.contact': 'Contact',
    'hero.eyebrow': 'PROGRAMMING · STEM · BERLIN',
    'hero.description': 'I’m a motivated student interested in computer science, mathematics and turning my own ideas into working projects – from simulations to a programming language of my own.',
    'hero.projectsButton': 'Explore projects',
    'about.heading': 'About me',
    'about.lead': 'I enjoy turning mathematical ideas into working programs and constantly experimenting with new concepts.',
    'about.body': 'I’m especially interested in projects where I can go beyond using existing tools and build something myself while understanding how it works. Alongside school projects, I explore simulations and algorithms, and in the longer term I want to create a programming language of my own.',
    'facts.grade': 'Grade 11 · Q1', 'facts.abitur': 'Abitur 2028', 'facts.mint': 'STEM focus since Grade 5', 'facts.jufo': 'Interested in Jugend forscht',
    'projects.heading': 'Projects',
    'projects.gameDescription': 'A programmed simulation of the well-known cellular automaton: a project at the intersection of computer science, mathematics and emergent behaviour.',
    'projects.languageTitle': 'My own programming language',
    'projects.languageDescription': 'A future long-term project: creating a programming language using Python as its technical foundation, from syntax to execution.',
    'projects.perlinDescription': 'Generating organic-looking maps with Perlin noise. An experiment with algorithms, randomness and procedural generation.',
    'projects.rouletteDescription': 'A roulette application I programmed as a practical project involving logic, randomness and user interaction.',
    'projects.researchDescription': 'I’m interested in Jugend forscht and would like to explore my own scientific and technical questions through future projects.',
    'projects.github': 'GitHub ↗', 'tags.simulation': 'Simulation', 'tags.compiler': 'Compiler', 'tags.planned': 'Planned', 'tags.algorithms': 'Algorithms',
    'skills.heading': 'Skills & Tools', 'skills.languages': 'Programming languages', 'skills.tools': 'Tools',
    'timeline.heading': 'My journey', 'timeline.grade1': 'Grades 1–4', 'timeline.mintYear': 'Since Grade 5',
    'timeline.schoolTitle': 'KreativitätsGrundschule Berlin Friedrichshain', 'timeline.schoolDescription': 'Primary school with a special focus on creativity.',
    'timeline.mintTitle': 'STEM focus', 'timeline.mintDescription': 'A continued focus on mathematics, computer science, science and technology since Grade 5.',
    'timeline.internshipTitle': 'Internship at dEIn-Labor · TU Berlin', 'timeline.internshipDescription': 'An internship at TU Berlin’s electrical engineering and computer science lab, with an introduction to technical and computing fields.',
    'timeline.gymTitle': 'Andreas Gymnasium · Q1', 'timeline.gymDescription': 'Grade 11 with a STEM focus. Advanced courses: Mathematics and Computer Science.',
    'timeline.latinumTitle': 'Latinum', 'timeline.latinumDescription': 'Expected in summer 2027 after studying Latin from Grade 7 through Grade 11.',
    'timeline.abiturTitle': 'Abitur', 'timeline.abiturDescription': 'Expected graduation from Andreas Gymnasium Berlin Friedrichshain.',
    'languages.heading': 'Languages', 'languages.german': 'German', 'languages.germanLevel': 'Native',
    'languages.english': 'English', 'languages.englishLevel': 'Very good · Cambridge certificate in progress',
    'languages.dutch': 'Dutch', 'languages.dutchLevel': 'Able to communicate in everyday situations', 'languages.latin': 'Latin',
    'languages.latinLevel': 'Translation · studied in Grades 7–11 · Latinum expected in 2027',
    'interests.heading': 'Interests & Highlights', 'interests.streakLabel': 'Duolingo streak', 'interests.streakValue': '1,100+ days',
    'interests.streakDescription': 'A long-running learning streak — click to visit my Duolingo profile.',
    'interests.hobbyLabel': 'Favourite hobby', 'interests.hobbyValue': 'Going for walks', 'interests.artistLabel': 'Favourite artist',
    'interests.streamed': '45,000+ minutes streamed', 'interests.albumLabel': 'Favourite album', 'interests.goalLabel': 'Next big goal',
    'interests.goalValue': 'Hike from Berlin to Potsdam', 'currently.heading': 'Currently',
    'currently.language': 'I’m currently learning Dutch and Portuguese.',
    'currently.projects': 'I’m currently working on my website and larger projects.',
    'currently.school': 'I’m currently thinking about school and what comes next.',
    'network.heading': 'Network', 'network.intro': 'Websites of friends and people I exchange ideas with about technology and personal projects.', 'network.website': 'Personal website',
    'contact.eyebrow': 'CONTACT', 'contact.heading': 'Let’s stay in touch.', 'contact.description': 'You can find me on GitHub and follow my projects there.',
    'footer.top': 'Back to top ↑'
  }
};

function readPreference(key) {
  try { return localStorage.getItem(key); } catch (_) { return null; }
}
function savePreference(key, value) {
  try { localStorage.setItem(key, value); } catch (_) { /* Preferences are optional. */ }
}

function setTheme(theme) {
  document.body.classList.toggle('light', theme === 'light');
  if (themeToggle) {
    themeToggle.textContent = theme === 'light' ? '☾' : '☀';
    themeToggle.setAttribute('aria-label', theme === 'light' ? 'Dark Mode aktivieren' : 'Light Mode aktivieren');
    themeToggle.setAttribute('title', theme === 'light' ? 'Dark Mode' : 'Light Mode');
  }
  savePreference('portfolio-theme', theme);
}

function setLanguage(language) {
  const chosen = translations[language] ? language : 'de';
  document.documentElement.lang = chosen;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (translations[chosen][key]) element.textContent = translations[chosen][key];
  });
  document.querySelectorAll('[data-meta-i18n]').forEach(element => {
    const key = element.dataset.metaI18n;
    if (translations[chosen][key]) element.setAttribute('content', translations[chosen][key]);
  });
  const title = document.querySelector('title[data-i18n]');
  if (title && translations[chosen]['meta.title']) title.textContent = translations[chosen]['meta.title'];
  if (languageToggle) {
    languageToggle.textContent = chosen === 'de' ? 'EN' : 'DE';
    languageToggle.setAttribute('aria-label', chosen === 'de' ? 'Switch to English' : 'Wechsle zu Deutsch');
    languageToggle.setAttribute('title', chosen === 'de' ? 'Switch to English' : 'Switch to German');
  }
  savePreference('portfolio-language', chosen);
}

const savedTheme = readPreference('portfolio-theme');
const preferredTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
setTheme(savedTheme || preferredTheme);
setLanguage(readPreference('portfolio-language') || 'de');

themeToggle?.addEventListener('click', () => {
  setTheme(document.body.classList.contains('light') ? 'dark' : 'light');
});
languageToggle?.addEventListener('click', () => {
  setLanguage(document.documentElement.lang === 'de' ? 'en' : 'de');
});

(function(){
 const greeting=document.getElementById('timeGreeting');
 if(greeting){
  const h=new Date().getHours();
  const en=(document.documentElement.lang||'').toLowerCase().startsWith('en');
  const choices=h<5
   ? {de:['Noch wach? Schön, dass du vorbeischaust.','Ein später Gruß – schön, dass du hier bist.'],en:['Still up? Glad you stopped by.','A late-night hello — glad you’re here.']}
   : h<11
   ? {de:['Guten Morgen – schön, dass du da bist!','Ich wünsche dir einen guten Start in den Tag.'],en:['Good morning — great to see you here!','Hope your day is off to a great start.']}
   : h<18
   ? {de:['Schön, dass du vorbeischaust!','Ich freue mich, dass du hier bist.'],en:['Glad you stopped by!','Great to have you here.']}
   : {de:['Guten Abend – schön, dass du hier bist!','Schön, dass du vorbeischaust.'],en:['Good evening — glad you’re here!','Nice to have you here this evening.']};
  greeting.textContent=choices[en?'en':'de'][Math.floor(Math.random()*2)];
  greeting.dataset.de=choices.de[Math.floor(Math.random()*2)];
  greeting.dataset.en=choices.en[Math.floor(Math.random()*2)];
 }
 const items=document.querySelectorAll('section,.project-card,.timeline-item,.language,.friend-card,.interest-card,.stat-card');
 items.forEach((el,i)=>{el.classList.add('reveal-on-scroll');el.style.transitionDelay=(Math.min(i%5,4)*65)+'ms';});
 if('IntersectionObserver' in window){
  const ob=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');ob.unobserve(e.target);}}),{threshold:.08,rootMargin:'0px 0px -25px 0px'});
  items.forEach(el=>ob.observe(el));
 } else items.forEach(el=>el.classList.add('is-visible'));
})();

// Delegated confetti handler for all three celebration buttons.
document.addEventListener('click', function(event) {
  const btn = event.target.closest('.confetti-button');
  if (!btn) return;
  const card = btn.closest('.streak-wrap, .interest-card') || btn.parentElement;
  const colors = ['#78A9FF', '#ffbd59', '#ff6b9d', '#8be9a8', '#c7a4ff'];
  for (let i = 0; i < 42; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = `${46 + Math.random() * 8}%`;
    piece.style.top = '28px';
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty('--dx', `${(Math.random() - 0.5) * 260}px`);
    piece.style.setProperty('--dy', `${70 + Math.random() * 170}px`);
    piece.style.setProperty('--rot', `${Math.random() * 720 - 360}deg`);
    card.appendChild(piece);
    window.setTimeout(() => piece.remove(), 1150);
  }
});
