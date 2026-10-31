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

// ============================================
// PRIVATE PORTFOLIO ACCESS
// ============================================

(() => {

    const ITERATIONS = 600000;


    // Base64 in Bytes umwandeln
    function fromBase64(value) {

        const binary = atob(value);

        return Uint8Array.from(
            binary,
            character => character.charCodeAt(0)
        );

    }


    // AES-Schlüssel ableiten
    async function deriveKey(secret, salt, iterations) {

        const material = await crypto.subtle.importKey(
            "raw",
            new TextEncoder().encode(secret),
            "PBKDF2",
            false,
            ["deriveKey"]
        );

        return crypto.subtle.deriveKey(

            {
                name: "PBKDF2",
                salt: salt,
                iterations: iterations,
                hash: "SHA-256"
            },

            material,

            {
                name: "AES-GCM",
                length: 256
            },

            false,

            ["decrypt"]

        );

    }


    // Verschlüsselte Daten entschlüsseln
    async function decryptBundle(record, secret) {

        const salt = fromBase64(record.salt);
        const iv = fromBase64(record.iv);

        const ciphertext = fromBase64(
            record.ciphertext
        );

        const key = await deriveKey(
            secret,
            salt,
            record.iterations || ITERATIONS
        );

        const decrypted = await crypto.subtle.decrypt(

            {
                name: "AES-GCM",
                iv: iv
            },

            key,

            ciphertext

        );

        return JSON.parse(
            new TextDecoder().decode(decrypted)
        );

    }


    // Alle drei Abschnitte freischalten
    function revealSections(privateData) {

        const sections = [
            "about",
            "journey",
            "currently"
        ];

        for (const section of sections) {

            const element = document.querySelector(
                `[data-private-target="${section}"]`
            );

            if (
                !element ||
                typeof privateData[section] !== "string"
            ) {

                throw new Error(
                    "Private Inhalte unvollständig."
                );

            }

            // Private Inhalte einsetzen
            element.innerHTML =
                privateData[section];

            // Blur entfernen
            element.classList.remove(
                "private-placeholder"
            );

            element.removeAttribute("aria-hidden");

            // Den jeweiligen Abschnitt freischalten
            element.closest(".private-container")
                .dataset.unlocked = "true";

        }


        // Sprachwechsel erneut anwenden
        const language =
            document.documentElement.lang || "de";

        if (typeof setLanguage === "function") {
            setLanguage(language);
        }

        if (typeof updateStreak === "function") {
            updateStreak();
        }

    }


    // Alle Buttons zum Öffnen der Formulare
    document.querySelectorAll(".private-open-button")
        .forEach(button => {

            button.addEventListener("click", () => {

                const overlay =
                    button.closest(".private-overlay");

                const prompt =
                    overlay.querySelector(".private-prompt");

                const form =
                    overlay.querySelector(".private-unlock-form");

                prompt.hidden = true;

                form.hidden = false;

                form.querySelector(".private-code").focus();

            });

        });


    // Alle drei Formulare unterstützen
    document.querySelectorAll(".private-unlock-form")
        .forEach(form => {

            form.addEventListener("submit", async event => {

                event.preventDefault();

                const codeInput =
                    form.querySelector(".private-code");

                const status =
                    form.querySelector(".private-status");

                const code = codeInput.value.trim();

                status.textContent =
                    "Überprüfe Zugangscode...";


                // Zugangscode zerlegen
                const separator = code.indexOf(".");

                if (separator === -1) {

                    status.textContent =
                        "Ungültiger Zugangscode.";

                    return;

                }

                const id = code.slice(0, separator);
                const secret = code.slice(separator + 1);


                // Format überprüfen
                if (
                    !/^[a-f0-9]{12}$/i.test(id) ||
                    !/^[A-Za-z0-9_-]{22}$/.test(secret)
                ) {

                    status.textContent =
                        "Ungültiger Zugangscode.";

                    return;

                }


                // Passenden Datensatz suchen
                const bundles =
                    window.PRIVATE_BUNDLES || [];

                const record = bundles.find(
                    item => item.id === id
                );

                if (!record) {

                    status.textContent =
                        "Zugangscode nicht gefunden.";

                    return;

                }


                try {

                    // Daten entschlüsseln
                    const privateData = await decryptBundle(
                        record,
                        secret
                    );

                    // Alle drei Bereiche freischalten
                    revealSections(privateData);

                } catch (error) {

                    status.textContent =
                        "Falscher Zugangscode oder ungültige Daten.";

                    codeInput.value = "";

                    codeInput.focus();

                    console.error(error);

                }

            });

        });

})();
})();
