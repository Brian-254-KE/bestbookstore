// --- GLOBAL CONSTANT ---
const PHONE = "254115477579";

// --- 1. DATA VAULT (The Library) ---
const bookData = {
  "Atomic Habits": {
    title: "Atomic Habits",
    description: `<h3>By James Clear</h3>
    
    <p>Atomic Habits is a guide to building long-term success through tiny improvements.</p>`,
  },

  "I Love You to the Moon and Back": {
    title: "I Love You to the Moon and Back",
    description: `<h3>..</h3>

    <p>Atomic Habits is a guide to building long-term success through tiny improvements.</p>`,
  },

  "Rich Dad Poor Dad": {
    title: "Rich Dad Poor Dad",
    description: `<h3>By Robert Kiyosaki</h3>
    
    <p>Rich Dad Poor Dad is a foundational personal finance book that contrasts the financial philosophies of two men: the author's biological father (the "Poor Dad") and his best friend's father (the "Rich Dad"). It argues that the key to wealth is not a high salary, but understanding how to make money work for you.</p><br>
    
    <p>The book teaches a mindset of calculated risk and passive income. By focusing on building a portfolio of assets rather than just seeking a higher "paycheck," you gain the freedom to stop trading your time for money. It is about manipulating your cash flow so that your assets eventually cover your lifestyle, leaving you in total control of your time and destiny.</p>`,
  },
  "Surrounded by Idiots": {
    title: "Surrounded by Idiots",
    description: `<h3>By Thomas Erikson</h3><p>Understanding human behavior patterns using color types.</p>`,
  },
  "The Psychology of Money": {
    title: "The Psychology of Money",
    description: `<h3>By Morgan Housel</h3><p>Money is more about behavior than intelligence.</p>`,
  },
};

// --- ANALYSIS DATA ---
const analysisData = {
  "Atomic Habits": {
    title: "Atomic Habits",
    description: `<p>Focus: Behavioral Engineering. Small changes → massive results.</p>`,
  },
  "Surrounded by Idiots": {
    title: "Surrounded by Idiots",
    description: `<p>Focus: Profiling people using personality systems.</p>`,
  },
};

// --- 2. THE MODAL EXECUTION ---
function showAbout(bookKey) {
  const modal = document.getElementById("book-modal");
  const title = document.getElementById("modal-title");
  const desc = document.getElementById("modal-desc");

  if (!modal || !title || !desc) return;

  const book = bookData[bookKey];

  if (book) {
    title.innerText = book.title;
    desc.innerHTML = book.description;
  } else {
    title.innerText = bookKey;
    desc.innerHTML = "<p>Knowledge is locked. Request access to continue.</p>";
  }

  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("glass-open"), 10);
}

// --- 3. CLOSE MODAL ---
const closeBtn = document.querySelector(".close-btn");
if (closeBtn) {
  closeBtn.onclick = () => {
    const modal = document.getElementById("book-modal");
    if (!modal) return;
    modal.classList.remove("glass-open");
    setTimeout(() => (modal.style.display = "none"), 300);
  };
}

// --- CLICK OUTSIDE CLOSE ---
window.addEventListener("click", (e) => {
  const modal = document.getElementById("book-modal");
  if (!modal) return;

  if (e.target === modal) {
    modal.classList.remove("glass-open");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }
});

// --- 4. SOCIAL PROOF ---
const messages = [
  "3 people in Nairobi are viewing 'The Secret'",
  "Someone just acquired 'Atomic Habits'",
  "5 scholars are browsing the Psychology section",
  "A new member joined the Inner Circle",
];

function triggerSocialProof() {
  const box = document.getElementById("social-proof");
  const text = document.getElementById("proof-text");
  if (!box || !text) return;

  box.classList.remove("show");
  setTimeout(() => {
    text.innerText = messages[Math.floor(Math.random() * messages.length)];
    box.classList.add("show");
  }, 1000);

  setTimeout(() => box.classList.remove("show"), 6000);
}

setTimeout(() => {
  triggerSocialProof();
  setInterval(triggerSocialProof, 15000);
}, 3000);

// --- 5. MOUSE GLOW ---
const glow = document.getElementById("mouse-glow");
window.addEventListener("mousemove", (e) => {
  if (glow) {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }
});

// --- 6. BUTTON HANDLER ---
function setupButtons() {
  document.querySelectorAll(".book-card button").forEach((button) => {
   button.onclick = (e) => {
     e.stopPropagation();

     const bookCard = e.target.closest(".book-card");
     if (!bookCard) return;

     const bookTitle = bookCard.querySelector("h3")?.innerText || "Unknown";

     alert("Redirecting to secure access channel...");

     const message = `
📚 ACCESS REQUEST

Book: ${bookTitle}

Status: Pending Access Approval
Platform: Mastery Vault System

I am requesting access to this manuscript. Please confirm payment steps and release the file.

User Node: Mobile Request
`;

     alert("Redirecting to secure access channel...");

     window.open(
       `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`,
       "_blank",
     );
   };
  });
}
setupButtons();

// --- 7. FILTER ---
function filterBooks(category) {
  const books = document.querySelectorAll(".book-card");
  books.forEach((book) => {
    if (category === "all" || book.classList.contains(category)) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
}

// --- 8. SEARCH ---
function searchMastery() {
  let input = document.getElementById("bookSearch")?.value.toLowerCase() || "";
  let cards = document.querySelectorAll(".book-card");

  cards.forEach((card) => {
    let title = card.querySelector("h3")?.innerText.toLowerCase() || "";
    card.style.display = title.includes(input) ? "block" : "none";
  });
}

// --- 9. SCROLL ---
window.onscroll = function () {
  const btn = document.getElementById("scrollTop");
  if (!btn) return;

  if (document.documentElement.scrollTop > 500) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};

// --- 10. RELEASE SYSTEM ---
function startReleaseProtocols() {
  let atomicDate = Date.now() + 7 * 24 * 60 * 60 * 1000;
  let eliteDate = Date.now() + 14 * 24 * 60 * 60 * 1000;

  const interval = setInterval(() => {
    let now = Date.now();

    const atomicTimer = document.getElementById("atomic-timer");
    const eliteTimer = document.getElementById("elite-timer");

    if (atomicTimer) {
      let left = atomicDate - now;
      if (left > 0) {
        atomicTimer.innerHTML = `AVAILABLE IN: ${Math.floor(left / 86400000)}d`;
      } else {
        unlockBook("atomic-book", "atomic-button", "atomic-timer");
      }
    }

    if (eliteTimer) {
      let left = eliteDate - now;
      if (left > 0) {
        eliteTimer.innerHTML = `DECRYPTING: ${Math.floor(left / 86400000)}d`;
      } else {
        unlockBook("elite-vault", "elite-button", "elite-timer");
      }
    }

    if (now > eliteDate) clearInterval(interval);
  }, 1000);
}

function unlockBook(cardId, btnId, timerId) {
  const card = document.getElementById(cardId);
  const btn = document.getElementById(btnId);
  const timer = document.getElementById(timerId);

  if (card) card.classList.remove("locked-manuscript");
  if (timer) {
    timer.innerHTML = "ACCESS GRANTED";
    timer.style.background = "#06f80a";
  }
  if (btn) {
    btn.innerText = "Unlock Mastery — 500";
    btn.disabled = false;
  }
}

startReleaseProtocols();

// --- TERMINAL ---
const terminal = document.getElementById("secret-terminal");
const termInput = document.getElementById("terminal-input");
const termOutput = document.getElementById("terminal-output");

document.addEventListener("keydown", (e) => {
  if (e.key === "`" && terminal) {
    terminal.classList.toggle("active");
    termInput?.focus();
  }
});

// --- ANALYSIS ---
function openAnalysis(bookTitle, customText) {
  const panel = document.getElementById("analysis-panel");
  const content = document.getElementById("analysis-content");

  if (!panel || !content) return;

  const data = analysisData[bookTitle];

  if (customText) {
    content.innerHTML = `<h3>${bookTitle}</h3><p>${customText}</p>`;
  } else if (data) {
    content.innerHTML = `<h3>${data.title}</h3>${data.description}`;
  } else {
    content.innerHTML = "<p>No analysis available.</p>";
  }

  panel.classList.add("open");
}

function closeAnalysis() {
  document.getElementById("analysis-panel")?.classList.remove("open");
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("book-modal");
  if (!modal) return;

  if (e.target === modal) {
    modal.classList.remove("glass-open");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }
});
