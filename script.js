const languageToggle = document.getElementById("languageToggle");

let currentLanguage = "de";

// Gespeicherte Sprache laden
try {
    currentLanguage =
        localStorage.getItem("richardPortfolioLanguage") === "en"
            ? "en"
            : "de";
} catch (error) {
    currentLanguage = "de";
}


// ======================================
// DUOLINGO STREAK
// ======================================

// Dein bestätigter Wert am 30. Oktober 2026
const STREAK_BASE = 1131;

// Datum des Basiswertes
const STREAK_BASE_DATE = Date.UTC(2026, 9, 30);


// Berechnet die aktuelle Streak anhand des Datums
function getCurrentStreak() {

    const now = new Date();

    // Lokales Datum des Besuchers
    const today = Date.UTC(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );

    // Vergangene Kalendertage berechnen
    const daysPassed = Math.floor(
        (today - STREAK_BASE_DATE) / 86400000
    );

    return Math.max(0, STREAK_BASE + daysPassed);
}


// Zahl auf der Website aktualisieren
function updateStreak() {

    const streakElement =
        document.getElementById("duolingoStreak");

    if (!streakElement) return;

    const streak = getCurrentStreak();

    if (currentLanguage === "en") {

        streakElement.textContent =
            streak.toLocaleString("en-US") + " days";

    } else {

        streakElement.textContent =
            streak.toLocaleString("de-DE") + " Tage";

    }
}


// ======================================
// SPRACHWECHSEL DE / EN
// ======================================

function setLanguage(language) {

    currentLanguage = language;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-de][data-en]")
        .forEach(element => {

            const translation =
                language === "en"
                    ? element.dataset.en
                    : element.dataset.de;

            element.textContent = translation;
        });


    languageToggle.textContent =
        language === "de" ? "EN" : "DE";

    languageToggle.setAttribute(
        "aria-label",
        language === "de"
            ? "Switch language to English"
            : "Sprache auf Deutsch wechseln"
    );

    try {
        localStorage.setItem(
            "richardPortfolioLanguage",
            language
        );
    } catch (error) {
        // Die Seite funktioniert auch ohne localStorage.
    }

    updateStreak();
}


// Button für den Sprachwechsel
languageToggle.addEventListener("click", () => {

    setLanguage(
        currentLanguage === "de" ? "en" : "de"
    );

});


// Sprache beim ersten Laden einstellen
setLanguage(currentLanguage);


// ======================================
// AUTOMATISCHE AKTUALISIERUNG UM MITTERNACHT
// ======================================

function scheduleStreakUpdate() {

    const now = new Date();

    const nextMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0,
        0,
        2
    );

    const timeUntilMidnight =
        nextMidnight.getTime() - now.getTime();

    window.setTimeout(() => {

        updateStreak();

        scheduleStreakUpdate();

    }, timeUntilMidnight);

}

scheduleStreakUpdate();
