// --- 1. DATA VAULT (The Library) ---
const bookData = {
  "Atomic Habits": {
    title: "Atomic Habits",
    description: `<h3>By James Clear</h3><p>Atomic Habits is a guide to building long-term success through tiny, 1% improvements. It focuses on identity-based habits and manipulating the habit loop.</p><ul><li>1% better every day.</li><li>Forget goals, focus on systems.</li></ul>`,
  },
  "The Body Keeps the Score": {
    title: "The Body Keeps the Score",
    description: `<h3>By Bessel van der Kolk</h3><p>This book explores how trauma physically reshapes both the brain and the body, staying trapped in the nervous system. Recovery involves helping the brain feel safe in the body again.</p>`,
  },
  "Rich Dad Poor Dad": {
    title: "Rich Dad Poor Dad",
    description: `<h3>By Robert T. Kiyosaki</h3><p>Contrasts the financial philosophies of a poor educated father and a rich self-made millionaire. Focuses on assets, financial intelligence, and making money work for you.</p>`,
  },
  "Surrounded by Idiots": {
    title: "Surrounded by Idiots",
    description: `<h3>By Thomas Erikson</h3><p>Explains personality types using the DISA (Dominance, Inducement, Submission, Analytical) system. Categorize people by colors to communicate and manipulate more effectively.</p>`,
  },
  "The Psychology of Money": {
    title: "The Psychology of Money",
    description: `<h3>By Morgan Housel</h3><p>Success with money is about behavior, not math. It argues that being "reasonable" is better than being "rational" in financial planning.</p>`,
  },
  "The Smart Money Woman": {
    title: "The Smart Money Woman",
    description: `<h3>By Arese Ugwu</h3><p>Uses a fictional narrative to provide a toolkit for financial liberation. Focuses on the shift from being a consumer to being an owner.</p>`,
  },
  "The Secret": {
    title: "The Secret",
    description: `<h3>By Rhonda Byrne</h3><p>Centers on the Law of Attraction—the belief that thoughts shape reality. It encourages a creator mindset to manifest wealth and health.</p>`,
  },
  "The Art of Being Alone": {
    title: "The Art of Being Alone",
    description: `<h3>By Renuka Gavrani</h3><p>A guide to shifting from loneliness to powerful solitude. Becoming comfortable in your own presence makes you more effective and less desperate.</p>`,
  },
  "Think and Grow Rich": {
    title: "Think and Grow Rich",
    description: `<h3>By Napoleon Hill</h3><p>Based on research of 500 affluent individuals. Wealth begins with a specific state of mind and programming the subconscious for opportunity.</p>`,
  },
  "The Diary of a CEO": {
    title: "The Diary of a CEO",
    description: `<h3>By Steven Bartlett</h3><p>33 laws of business and life focusing on emotional intelligence and engineering success through high-leverage habits.</p>`,
  },
  "Think Like an Entrepreneur, Act Like a CEO": {
    title: "Think Like an Entrepreneur, Act Like a CEO",
    description: `<h3>By Beverly Jones</h3><p>Career development for the modern workplace. Treat your career as your own business to ensure you are the architect of your own value.</p>`,
  },
  "The Sex Lives of African Women": {
    title: "The Sex Lives of African Women",
    description: `<h3>By Nana Darkoa Sekyiamah</h3><p>A collection of stories exploring sexuality and desire. It acts as a tool for social engineering by normalizing discussions of female autonomy.</p>`,
  },
};

// --- 2. THE MODAL EXECUTION ---
function showAbout(bookKey) {
  const modal = document.getElementById("book-modal");
  const title = document.getElementById("modal-title");
  const desc = document.getElementById("modal-desc");

  const book = bookData[bookKey];

  if (book) {
    title.innerText = book.title;
    desc.innerHTML = book.description;
  } else {
    title.innerText = bookKey;
    desc.innerHTML =
      "<p>Knowledge is the ultimate acquisition. Secure this manuscript to begin.</p>";
  }

  modal.style.display = "block";
  setTimeout(() => {
    modal.classList.add("glass-open");
  }, 10);
}

// --- 3. CLOSING THE LOOP ---
const closeBtn = document.querySelector(".close-btn");
if (closeBtn) {
  closeBtn.onclick = () => {
    const modal = document.getElementById("book-modal");
    modal.classList.remove("glass-open");
    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  };
}

// --- 4. SOCIAL PROOF LOGIC ---
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
  setTimeout(() => {
    box.classList.remove("show");
  }, 6000);
}

setTimeout(() => {
  triggerSocialProof();
  setInterval(triggerSocialProof, 15000);
}, 3000);

// --- 5. MOUSE FOLLOW LOGIC ---
const glow = document.getElementById("mouse-glow");
window.addEventListener("mousemove", (e) => {
  if (glow) {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }
});

// --- 6. THE ACQUISITION BRIDGE ---
function setupButtons() {
  document.querySelectorAll(".book-card button").forEach((button) => {
    button.onclick = (e) => {
      e.stopPropagation();
      const bookCard = e.target.closest(".book-card");
      const bookTitle = bookCard.querySelector("h3").innerText;

      // Your Number: 254115477579
      const phoneNumber = "254115477579";
      const message = `[REQUEST] I wish to Acquire Mastery of: ${bookTitle}. Please provide the decryption key for the KU Node.`;
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
        "_blank",
      );
    };
  });
}
setupButtons();

// --- 7. THE GATEKEEPER'S FILTER ---
function filterBooks(category) {
  const books = document.querySelectorAll(".book-card");
  books.forEach((book) => {
    if (category === "all" || book.classList.contains(category)) {
      book.style.display = "block";
      setTimeout(() => {
        book.classList.remove("hidden");
      }, 10);
    } else {
      book.classList.add("hidden");
      setTimeout(() => {
        book.style.display = "none";
      }, 500);
    }
  });
}

// --- 8. THE MASTER SEARCH ---
function searchMastery() {
  let input = document.getElementById("bookSearch").value.toLowerCase();
  let cards = document.querySelectorAll(".book-card");
  cards.forEach((card) => {
    let title = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";
  });
}

// --- 9. THE REVEAL OBSERVER ---
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".book-card").forEach((book) => {
  revealObserver.observe(book);
});

// --- 10. SCROLL COMMAND ---
window.onscroll = function () {
  const btn = document.getElementById("scrollTop");
  if (btn) {
    if (document.documentElement.scrollTop > 500) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  }
};

// --- 11. RELEASE PROTOCOLS (Atomic & Elite) ---
function startReleaseProtocols() {
  // Atomic Release: Set for 7 days
  let atomicDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
  // Elite Release: Set for 14 days
  let eliteDate = new Date().getTime() + 14 * 24 * 60 * 60 * 1000;

  const releaseInterval = setInterval(function () {
    let now = new Date().getTime();

    // Handle Atomic Habits
    let atomicLeft = atomicDate - now;
    const atomicTimer = document.getElementById("atomic-timer");
    if (atomicTimer && atomicLeft > 0) {
      let d = Math.floor(atomicLeft / (1000 * 60 * 60 * 24));
      let h = Math.floor(
        (atomicLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let m = Math.floor((atomicLeft % (1000 * 60 * 60)) / (1000 * 60));
      atomicTimer.innerHTML = `AVAILABLE IN: ${d}d ${h}h ${m}m`;
    } else if (atomicTimer) {
      unlockBook("atomic-book", "atomic-button", "atomic-timer");
    }

    // Handle Elite Vault
    let eliteLeft = eliteDate - now;
    const eliteTimer = document.getElementById("elite-timer");
    if (eliteTimer && eliteLeft > 0) {
      let d = Math.floor(eliteLeft / (1000 * 60 * 60 * 24));
      eliteTimer.innerHTML = `DECRYPTING: ${d}d REMAINING`;
    } else if (eliteTimer) {
      unlockBook("elite-vault", "elite-button", "elite-timer");
    }
  }, 1000);
}

function unlockBook(cardId, btnId, timerId) {
  const card = document.getElementById(cardId);
  const btn = document.getElementById(btnId);
  const timer = document.getElementById(timerId);

  if (card) card.classList.remove("vault-closed", "locked-manuscript");
  if (card) card.style.pointerEvents = "auto";
  if (timer) {
    timer.innerHTML = "ACCESS GRANTED";
    timer.style.background = "#06f80a";
  }
  if (btn) {
    btn.innerText = "Unlock Mastery — 500";
    btn.disabled = false;
  }
}

// Initialize Protocols
startReleaseProtocols();
