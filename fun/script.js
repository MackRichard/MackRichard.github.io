document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================
     1. Theme Switcher (Dark / Light Mode)
     ========================================================== */
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  themeToggle?.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
  });

  /* ==========================================================
     2. To-Top Button & Scroll-Reveal
     ========================================================== */
  const toTopBtn = document.getElementById("to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      toTopBtn?.classList.add("show");
    } else {
      toTopBtn?.classList.remove("show");
    }
  });

  toTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  /* ==========================================================
     3. Schere Stein Papier Minispiel (Fun-Unterseite)
     ========================================================== */
  const choices = ["schere", "stein", "papier"];
  const icons = { schere: "✂️", stein: "🪨", papier: "📄" };
  
  let playerScore = 0;
  let aiScore = 0;
  const winningScore = 5;

  const playerScoreEl = document.getElementById("player-score");
  const aiScoreEl = document.getElementById("ai-score");
  const playerChoiceEl = document.getElementById("player-choice");
  const aiChoiceEl = document.getElementById("ai-choice");
  const gameStatusEl = document.getElementById("game-status");
  const resetBtn = document.getElementById("reset-game");
  const choiceButtons = document.querySelectorAll(".btn-choice");

  function getAIChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function playRound(playerChoice) {
    if (playerScore >= winningScore || aiScore >= winningScore) return;

    const aiChoice = getAIChoice();

    playerChoiceEl.textContent = icons[playerChoice];
    aiChoiceEl.textContent = icons[aiChoice];

    if (playerChoice === aiChoice) {
      gameStatusEl.textContent = "Unentschieden!";
      gameStatusEl.className = "msg-status";
    } else if (
      (playerChoice === "schere" && aiChoice === "papier") ||
      (playerChoice === "stein" && aiChoice === "schere") ||
      (playerChoice === "papier" && aiChoice === "stein")
    ) {
      playerScore++;
      playerScoreEl.textContent = playerScore;
      gameStatusEl.textContent = "Gewonnen! Du hast diese Runde geholt.";
      gameStatusEl.className = "msg-status ok";
    } else {
      aiScore++;
      aiScoreEl.textContent = aiScore;
      gameStatusEl.textContent = "Verloren! Die KI holt den Punkt.";
      gameStatusEl.className = "msg-status error";
    }

    checkGameOver();
  }

  function checkGameOver() {
    if (playerScore >= winningScore || aiScore >= winningScore) {
      if (playerScore > aiScore) {
        gameStatusEl.textContent = "Glückwunsch! Du hast das Match gewonnen!";
      } else {
        gameStatusEl.textContent = "Schade! Die KI hat das Match gewonnen.";
      }
      
      choiceButtons.forEach(btn => btn.disabled = true);
      if (resetBtn) resetBtn.style.display = "inline-block";
    }
  }

  choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
      const choice = button.getAttribute("data-choice");
      playRound(choice);
    });
  });

  resetBtn?.addEventListener("click", () => {
    playerScore = 0;
    aiScore = 0;
    playerScoreEl.textContent = "0";
    aiScoreEl.textContent = "0";
    playerChoiceEl.textContent = "❓";
    aiChoiceEl.textContent = "❓";
    gameStatusEl.textContent = "Triff deine Wahl!";
    gameStatusEl.className = "msg-status";
    resetBtn.style.display = "none";
    choiceButtons.forEach(btn => btn.disabled = false);
  });

  /* ==========================================================
     4. Live-Uhr im Footer
     ========================================================== */
  const clockEl = document.getElementById("clock");
  function updateClock() {
    if (clockEl) {
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString("de-DE");
    }
  }
  setInterval(updateClock, 1000);
  updateClock();
});
