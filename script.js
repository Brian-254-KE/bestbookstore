
  // --- 2. DATA VAULT (The Library) ---
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

  // --- 2. THE MIGHTY EXECUTION ---
function showAbout(bookKey) {
    const modal = document.getElementById('book-modal');
    const title = document.getElementById('modal-title');
    const desc = document.getElementById('modal-desc');
    
    // Check if key exists, otherwise use the title as-is
    const book = bookData[bookKey];

    if (book) {
        title.innerText = book.title;
        desc.innerHTML = book.description;
    } else {
        title.innerText = bookKey;
        desc.innerHTML = "<p>Knowledge is the ultimate acquisition. Secure this manuscript to begin.</p>";
    }

    modal.style.display = 'block';
    // Small timeout ensures the animation triggers after the display change
    setTimeout(() => {
        modal.classList.add('glass-open');
    }, 10);
}

// --- 3. CLOSING THE LOOP ---
document.querySelector('.close-btn').onclick = () => {
    const modal = document.getElementById('book-modal');
    modal.classList.remove('glass-open');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500); // Matches the CSS transition time
};