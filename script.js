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
    description: `<h3>.Amelia Hepworth.</h3>

    <p>I Love You to the Moon and Back is a gentle children's book that illustrates the deep, unconditional bond between a bear and its cub. It is often used as a bedtime story to provide comfort and emotional security for young children.</p><br>`,
  },

  "Rich Dad Poor Dad": {
    title: "Rich Dad Poor Dad",
    description: `<h3>By Robert Kiyosaki</h3>
    
    <p>Rich Dad Poor Dad is a foundational personal finance book that contrasts the financial philosophies of two men: the author's biological father (the "Poor Dad") and his best friend's father (the "Rich Dad"). It argues that the key to wealth is not a high salary, but understanding how to make money work for you.</p><br>`,
  },

  "Surrounded by Idiots": {
    title: "Surrounded by Idiots",
    description: `<h3>By Thomas Erikson</h3>
    
    <p>Surrounded by Idiots offers a framework for understanding human behavior and improving communication by categorizing people into four personality types based on the DISA (Dominance, Inducement, Submission, and Analytical) model. It suggests that the "idiocy" we perceive in others is often just a fundamental difference in how they process information and interact with the world.</p><br>`,
  },

  "The Psychology of Money": {
    title: "The Psychology of Money",
    description: `<h3>By Morgan Housel</h3>
    
    <p>The Psychology of Money explores the premise that doing well with money is less about what you know and more about how you behave. It argues that financial success is a soft skill where your ego, emotions, and personal biases are far more influential than technical knowledge or mathematical formulas.</p><br>`,
  },

  "The Smart Money Woman": {
    title: "The Smart Money Woman",
    description: `<h3>By Arese Ugwu.</h3>
    
    <p>The Smart Money Woman uses a narrative style to provide a practical toolkit for financial liberation. It follows the story of Zuri, a woman who appears to have a glamorous life but is actually struggling with debt, as she navigates the path toward wealth and independence.</p><br>`,
  },

  "The Secret": {
    title: "The Secret",
    description: `<h3>By Rhonda Byrne</h3>
    
    <p>The Secret is centered on the Law of Attraction, the belief that your thoughts have the power to directly shape your reality. It suggests that by focusing on positive or negative thoughts, you bring corresponding experiences into your life.</p><br>`,
  },

  "The Art of Being Alone": {
    title: "The Art of Being Alone",
    description: `<h3>By Renuka Gavrani</h3>
    
    <p>The Art of Being Alone is a guide to transforming your perspective on solitude, moving it from a state of "loneliness" into a powerful tool for self-discovery and mental clarity. It focuses on finding peace within yourself without the need for constant external validation or social noise.</p><br>`,
  },

  "Think and Grow Rich": {
    title: "Think and Grow Rich",
    description: `<h3>By Napoleon Hill</h3>
    
    <p>Think and Grow Rich is the result of over twenty years of research into the success habits of 500 of the most affluent individuals of its time, such as Andrew Carnegie and Henry Ford. It posits that wealth begins with a specific state of mind and a definite purpose.</p><br>`,
  },

  "The Diary of a CEO": {
    title: "The Diary of a CEO",
    description: `<h3>By Steven Bartlett</h3>
    
    <p>The Diary of a CEO: The 33 Laws of Business and Life is a collection of insights distilled from hundreds of interviews with world-class performers. It moves away from traditional business advice and focuses on the fundamental, psychological pillars of excellence and human behavior.</p><br>`,
  },

  "Think Like an Entrepreneur, Act Like a CEO": {
    title: "Think Like an Entrepreneur, Act Like a CEO",
    description: `<h3>By Beverly Jones</h3>
    
    <p>Think Like an Entrepreneur, Act Like a CEO is a career development guide designed for the modern, shifting workplace. It argues that even if you work for someone else, you must treat your career as your own business. It combines the innovative, risk-taking mindset of an entrepreneur with the polished, strategic execution of a CEO.</p><br>`,
  },

  "The Sex Lives of African Women": {
    title: "The Sex Lives of African Women",
    description: `<h3>By Nana Darkoa Sekyiamah</h3>
    
    <p>The Sex Lives of African Women is a non-fiction collection of personal stories from women across the African continent and the diaspora. It explores the diverse experiences of sexuality, desire, and freedom, challenging the stereotypes and silence that often surround these topics in African societies.</p><br>`,
  },

  "The 80/20 Principle": {
    title: "The 80/20 Principle",
    description: `<h3>By Richard Koch</h3>
    
    <p>The 80/20 Principle (also known as Pareto's Law) asserts that a minority of causes, inputs, or effort usually lead to a majority of the results, outputs, or rewards. In a business context, for example, 80% of profits often come from 20% of customers.</p><br>`,
  },

  "The 48 Laws of Power": {
    title: "The 48 Laws of Power",
    description: `<h3>By Robert Greene</h3>
    
    <p>The 48 Laws of Power is a definitive guide to the amoral, cunning, and ruthless mechanics of power. Distilled from 3,000 years of history, it examines the tactics used by figures such as Machiavelli, Sun Tzu, and Casanova to gain, observe, and defend against ultimate control.</p><br>`,
  },

  "The Laws of Human Nature": {
    title: "The Laws of Human Nature",
    description: `<h3>By Robert Greene.</h3>
    
    <p>The Laws of Human Nature is a profound examination of the hidden forces that drive human behavior. Robert Greene argues that by understanding these deep-seated psychological patterns, you can shed your irrationality and gain the ability to master your own impulses while accurately reading others.</p><br>`,
  },

  Mastery: {
    title: "Mastery",
    description: `<h3>By Robert Greene</h3>
    
    <p>Mastery examines the lives of historical and contemporary "Masters"—such as Charles Darwin, Leonardo da Vinci, and Paul Graham—to reveal that ultimate success is not the result of innate talent or luck. Instead, it is a predictable outcome of following a specific, rigorous path toward the peak of human potential.</p><br>`,
  },

  "King of Wrath": {
    title: "King of Wrath",
    description: `<h3>By Ana Huang</h3>
    
    <p>King of Wrath is the first installment in the Kings of Sin series. It centers on the trope of an arranged marriage fueled by blackmail, pitting a ruthless billionaire against a refined socialite. It is a study of power, pride, and the slow erosion of emotional defenses.</p><br>`,
  },

  "King of Pride": {
    title: "King of Pride",
    description: `<h3>By Ana Huang</h3>
    
    <p>King of Pride is the second book in the Kings of Sin series. While the first book focused on the pride of a ruthless mogul, this story explores the pride of a man bound by legacy, tradition, and an intense sense of duty. It follows Kai Young, a billionaire heir, and Isabella Valencia, a spirited bartender with ambitions of her own.</p><br>`,
  },

  "King of Sloth": {
    title: "King of Sloth",
    description: `<h3>By Ana Huang</h3>
    
    <p>King of Sloth is the third installment in the Kings of Sin series. It centers on Xavier Castillo, a man who has perfected the art of doing nothing despite his immense privilege, and Sloane Kensington, the high-achieving publicist tasked with fixing his image.</p><br>`,
  },

  "King of Greed": {
    title: "King of Greed",
    description: `<h3>By Ana Huang</h3>
    
    <p>King of Greed is the third book in the Kings of Sin series. It shifts from the "new romance" dynamic to a "marriage in crisis" story, focusing on billionaire Dominic Davenport and his wife, Alessandra. It is a study of how the relentless pursuit of more can lead to losing everything that actually matters.</p><br>`,
  },

  "King of Envy": {
    title: "King of Envy",
    description: `<h3>By Ana Huang</h3>
    
    <p>King of Envy is the fourth installment in the Kings of Sin series. This story focuses on Julian Hayworth, a man who seems to have it all but is haunted by a deep-seated sense of lack, and Courtney, the woman who becomes the focal point of his intense, often possessive focus.</p><br>`,
  },

  "Twisted Love": {
    title: "Twisted Love",
    description: `<h3>By Ana Huang</h3>
    
    <p>Twisted Love is the first book in the Twisted series, focusing on Alex Volkov and Ava Chen. This series is famous for its "darker" billionaire tropes, featuring men who are morally grey, possessive, and highly calculated.</p><br>`,
  },

  "Twisted Games": {
    title: "Twisted Games",
    description: `<h3>By Ana Huang</h3>
    
    <p>Twisted Games is the second book in the Twisted series. It shifts the focus from the corporate world to the high-stakes environment of royal security and international politics, featuring Rhys Larsen and Princess Bridget von Ascheberg.</p><br>`,
  },

  "Twisted Hate": {
    title: "Twisted Hate",
    description: `<h3>By Ana Huang</h3>
    
    <p>Twisted Hate is the third book in the Twisted series. It follows the "enemies-with-benefits" dynamic between Josh Chen, a charming doctor with a hidden temper, and Jules Ambrose, a former party girl turned law student with a mysterious past.</p><br>`,
  },

  "Twisted Lies": {
    title: "Twisted Lies",
    description: `<h3>By Ana Huang</h3>
    
    <p>Twisted Lies is the fourth and final book in the Twisted series. It features Christian Harper, a lethal and tech-savvy security mogul, and Stella Alonso, a shy social media influencer and model. This installment is the darkest and most manipulative of the four.</p><br>`,
  },

  "If We Ever Meet Again": {
    title: "If We Ever Meet Again",
    description: `<h3>By Ana Huang</h3>
    
    <p>If We Ever Meet Again is the first book in the If series (also known as the If Love series). Unlike the darker themes of her later work, this series is a contemporary "new adult" romance that focuses on the emotional complexities of study-abroad students in Shanghai. It centers on Blake Williams and Farrah Lin.</p><br>`,
  },

  "If the Sun Never Sets": {
    title: "If the Sun Never Sets",
    description: `<h3>By Ana Huang</h3>
    
    <p>If the Sun Never Sets is the second book in the If Love series. It serves as a direct sequel to the first book, picking up five years later. It explores the themes of second chances, long-term consequences of betrayal, and the psychological weight of "the one who got away."</p><br>`,
  },

  "If Love Had a Price": {
    title: "If Love Had a Price",
    description: `<h3>By Ana Huang</h3>
    
    <p>If Love Had a Price is the third book in the If Love series. It shifts the focus to a new couple, Kris and Nate. This story leans into the "forbidden" and "hidden" aspects of romance, exploring the psychological toll of pursuing a connection that society—or family—might deem unacceptable.</p><br>`,
  },

  "If We Were Perfect": {
    title: "If We Were Perfect",
    description: `<h3>By Ana Huang</h3>
    
    <p>If We Were Perfect is the fourth and final book in the If Love series. It follows the story of Christian and Olivia, two individuals who have spent years perfecting their public images while hiding the deep, messy history they share from their past in Shanghai.</p><br>`,
  },

  "It Ends with Us": {
    title: "It Ends with Us",
    description: `<h3>By Colleen Hoover</h3>
    
    <p>It Ends with Us is arguably Colleen Hoover’s most significant work, blending elements of contemporary romance with a brutal, realistic exploration of domestic violence. It follows Lily Bloom, a woman who moves to Boston to start her own business and finds herself torn between a charming neurosurgeon, Ryle Kincaid, and her first love, Atlas Corrigan.</p><br>`,
  },

  "It Starts with Us": {
    title: "It Starts with Us",
    description: `<h3>By Colleen Hoover</h3>
    
    <p>It Starts with Us is the direct sequel to It Ends with Us. While the first book focused on the painful decision to leave a toxic environment, this installment follows Lily Bloom as she navigates the complexities of co-parenting with her abusive ex-husband, Ryle, while finally pursuing a second chance at love with her first love, Atlas Corrigan."</p><br>
    
    <p>This book is the Transition from Defense to Offense. While the first book was about surviving an attack, this one is about the Psychology of Maintenance.</p>`,
  },

  "Ugly Love": {
    title: "Ugly Love",
    description: `<h3>By Colleen Hoover </h3>
    
    <p>Ugly Love is a raw, emotional exploration of how unhealed trauma can turn intimacy into a "transactional" arrangement. It follows Tate Collins, a nurse, and Miles Archer, an airline pilot with a haunted past, as they attempt a "no-strings-attached" relationship that quickly collapses under the weight of suppressed emotions."</p><br>
    
    <p>Ugly Love is to expose the "False Economy of Casual Intimacy." It demonstrates that you cannot logically compartmentalize sex and emotion when a deep psychological void is present.</p>`,
  },

  "Reminders of Him": {
    title: "Reminders of Him",
    description: `<h3>By Colleen Hoover</h3>
    
    <p>Reminders of Him is a poignant exploration of redemption and the "social pariah" effect. It follows Kenna Rowan, who returns to her hometown after five years in prison for a tragic mistake, hoping to reunite with her young daughter. She finds an unexpected ally in Ledger Ward, a local bar owner and the only person who hasn't completely closed the door on her.</p><br>
    
    <p>This book is to test the "Law of Forgiveness." It forces the reader to confront their own biases by presenting a protagonist who is "guilty" but deeply human.</p>`,
  },

  "All Your Perfects": {
    title: "All Your Perfects",
    description: `<h3>By Colleen Hoover</h3>
    
    <p>All Your Perfects is a profound look at the "Erosion of a Marriage." It centers on Quinn and Graham, a couple whose once-perfect relationship is being dismantled by the psychological and emotional strain of infertility. The story moves between their "Then" (how they fell in love) and their "Now" (how they are falling apart).</p><br>
    
    <p>This book is to expose the "Fragility of Perfection." It teaches that a relationship built only on "perfect" moments is a house of cards.</p>`,
  },

  "November 9": {
    title: "November 9",
    description: `<h3>By Colleen Hoover</h3>
    
    <p>November 9 follows Fallon, a girl with physical and emotional scars from a fire, and Ben, an aspiring novelist. They meet on Fallon's last day in L.A. and decide to meet on the same date—November 9—every year for five years, with no contact in between. Ben uses their meetings as inspiration for his book, but as the years pass, the line between reality and his narrative begins to blur dangerously.</p><br>`,
  },

  "Before I Let Go": {
    title: "Before I Let Go",
    description: `<h3>By Kennedy Ryan</h3>
    
    <p>Before I Let Go is a sophisticated study of "Second Chance" dynamics, focused on Yasmen and Josiah. Once a "perfect" couple with a thriving business and family, they were dismantled by a sequence of catastrophic personal losses. The story picks up after their divorce as they attempt to co-parent and co-run their restaurant while the "ghosts" of their past remain unresolved.</p><br>
    
    <p>This book is based on "Emotional De-escalation." It moves from a state of total structural collapse (divorce) back toward a new, more resilient foundation.</p>`,
  },

  "This Could Be Us": {
    title: "This Could Be Us",
    description: `<h3>By Kennedy Ryan</h3>
    
    <p>This Could Be Us is the second standalone installment in the Skyland series. While Before I Let Go focused on a divorced couple finding their way back, this book follows Soledad Barnes, a woman whose "perfect" life is nuked when her husband’s massive secret—including a secret family and financial fraud—comes to light.</p><br>
    
    <p>This book is based on "The Law of Reconstruction." It posits that sometimes a life must be completely razed to the ground (the "controlled burn") before a structure of actual integrity can be built.</p>`,
  },

  "Can’t Get Enough": {
    title: "Can’t Get Enough",
    description: `<h3>By Kennedy Ryan</h3>
    
    <p>Can’t Get Enough concludes the Skyland trilogy by focusing on Hendrix Barry, the ultra-competent "fixer" of the family. While her sisters dealt with the wreckage of the past, Hendrix is focused on the future—until tech mogul Maverick Bell forces her to re-evaluate her "solo" strategy.</p><br>
    
    <p>This book is to move from "Survival" (Book 1) and "Independence" (Book 2) into Force Multiplication.
    It teaches that the most advanced strategic move isn't doing everything yourself—it’s finding the one person whose "frequency" matches yours so you can build a legacy together.</p>`,
  },

  "The Ritual": {
    title: "The Ritual",
    description: `<h3>By Shantel Tessier</h3>
    
    <p>The Ritual is the first standalone in the Lords series. It shifts away from the realism of Kennedy Ryan and into the world of Dark Romance and Extreme Power Dynamics. The story centers on Ryat Barrington, a "Lord" at an elite university, and Blakely, the woman he "chooses" through a dark initiation ritual</p><br>
    
    <p> It is a dark exploration of what happens when love is built on a foundation of absolute, enforced loyalty.</p>`,
  },

  "The Sinner": {
    title: "The Sinner",
    description: `<h3>By Shantel Tessier</h3>
    
    <p>The Sinner is the second book in the Lords series. While the first book focused on the "initiation" of a Lord, this story focuses on Sin (Sinister) and Eden. It takes the dark themes of the secret society and adds a layer of Forbidden Betrayal, as Sin is tasked with a mission that involves the one woman he was never supposed to touch.</p><br>`,
  },

  "The Sacrifice": {
    title: "The Sacrifice",
    description: `<h3>By Shantel Tessier</h3>
    
    <p>The Sacrifice is the third installment in the Lords series. This book centers on Tyson and Laikyn. It continues the exploration of the dark, ritualistic world of the Lords but adds a layer of intense Vengeance and Bargaining.</p><br>`,
  },

  "The Carnage": {
    title: "The Carnage",
    description: `<h3>By Shantel Tessier</h3>
    
    <p>The Carnage is the fourth book in the Lords series. This installment focuses on Saint and Saint-Clair. It takes the established brutality of the secret society and moves it into the realm of Absolute Chaos and Reclamation, dealing with the consequences of breaking the very laws the Lords created to protect themselves.</p><br>`,
  },

  "The Joker": {
    title: "The Joker",
    description: `<h3>By Shantel Tessier</h3>
    
    <p>The Joker is the fifth installment in the Lords series. This story focuses on Easton (the Joker) and Sutton. It takes the dark, rigid structure of the secret society and introduces a character who thrives on Anarchy and Psychological Displacement.</p><br>`,
  },

  "The Black Knight": {
    title: "The Black Knight",
    description: `<h3>By Shantel Tessier</h3>
    
    <p>The Black Knight is the sixth book in the Lords series. It centers on Colt (the Black Knight) and Mila. While previous books explored the "Joker" or "Sinner," this installment focuses on the Strategy of the Protector who has gone rogue, using his deep knowledge of the society's internal mechanics to shield a woman who is essentially "hunted" by the system.</p><br>`,
  },

  "The Saboteur": {
    title: "The Saboteur",
    description: `<h3>By Shantel Tessier</h3>
    
    <p>The Saboteur is the seventh book in the Lords series. This installment focuses on Rhea and Icarus. This story moves into the realm of Internal Sabotage, where the goal is no longer just to survive the society, but to systematically dismantle it from within by hitting its most vulnerable points.</p><br>`,
  },

  "Haunting Adeline": {
    title: "Haunting Adeline",
    description: `<h3>By H.D. Carlton</h3>
    
    <p> It is a study in Extremist Obsession, Stalking, and Vigilante Justice.</p><br>
    
    <p>Haunting Adeline is based on "The Architecture of Obsession." It demonstrates how a person can be "colonized" by another’s presence until they lose their sense of independent self. It teaches that the ultimate form of control is not just physical, but the ability to occupy someone's thoughts so completely that they can no longer imagine a world without the "ghost" haunting them.</p>`,
  },

  "Hunting Adeline BK 2": {
    title: "Hunting Adeline BK 2",
    description: `<h3>By H.D. Carlton</h3>
    
    <p>Hunting Adeline is the conclusion to the Cat and Mouse Duet. While the first book was about the "Haunting" (the obsession and psychological stalking), this book shifts into a high-stakes Rescue and Recovery mission. It is significantly darker, focusing on the brutal reality of human trafficking and the psychological aftermath of extreme trauma.</p><br>`,
  },

  "The Housemaid": {
    title: "The Housemaid",
    description: `<h3>By Freida McFadden</h3>
    
    <p>The Housemaid is a masterclass in Deception, Social Hierarchy, and the "Hidden Predator" Dynamic. It is less about obsession and more about the Power Plays within a domestic setting.</p><br>`,
  },

  "The Housemaids Secret": {
    title: "The Housemaid's Secret",
    description: `<h3>By Freida McFadden</h3>
    
    <p>The Housemaid's Secret follows Millie as she takes a new position with the Garrick family in their high-rise penthouse. Having survived her previous employment, she is looking for stability, but she immediately senses a troubling atmosphere behind the "perfect" exterior of her new employers.</p><br>`,
  },

  "The Housemaid Is Watching": {
    title: "The Housemaid Is Watching",
    description: `<h3>By Freida McFadden</h3>
    
    <p>Millie treats her new environment like a puzzle where she must identify which neighbors are "Safe" and which are "Threats." The narrative uses Environmental Cues to build tension, focusing on the small, unsettling details that suggest someone in the neighborhood knows more than they should. It is a study in how a survivor maintains a "Low Profile" while being forced to confront the secrets hidden behind the manicured lawns of her own street.</p>`,
  },

  "The Seven Husbands of Evelyn Hugo": {
    title: "The Seven Husbands of Evelyn Hugo",
    description: `<h3>By Taylor Jenkins Reid</h3>
    
    <p>The Seven Husbands of Evelyn Hugo is a historical fiction novel that functions as a deep dive into the Psychology of Fame, Identity, and Strategic Image-Crafting. It follows an aging Hollywood icon, Evelyn Hugo, as she finally decides to tell the "truth" about her glamorous and scandalous life to an unknown magazine reporter, Monique Grant.</p><br>`,
  },

  "A Thousand Boy Kisses": {
    title: "A Thousand Boy Kisses",
    description: `<h3>Tillie Cole</h3>
    
    <p>A Thousand Boy Kisses is a contemporary romance that focuses on Poppy Litchfield and Rune Kristiansen. While it starts in childhood, it quickly moves into a study of Grief, First Love, and the "Bucket List" Psychology. It is known for being an "emotional wreckage" read, focusing on the intensity of time-limited connections.</p><br>`,
  },

  "The Smart Money Tribe": {
    title: "The Smart Money Tribe",
    description: `<h3>By Arese Ugwu</h3>
    
    <p>The Smart Money Tribe is the sequel to The Smart Money Woman. It is a piece of Financial Fiction that uses a narrative structure to teach Investment Strategy, Financial Independence, and Social Capital. It follows Zuri and her circle of friends as they navigate the complexities of building wealth within a modern African context.</p><br>`,
  },

  "The Millionaire Next Door": {
    title: "The Millionaire Next Door",
    description: `<h3>By Thomas J. Stanley & William D. Danko</h3>
    
    <p>The Millionaire Next Door is a foundational work in Wealth Psychology and Behavioral Economics. Based on years of research, it dismantles the public "Persona" of wealth and reveals the actual Strategic Habits of the truly affluent. It highlights the massive gap between "Looking Rich" and "Being Wealthy."</p><br>`,
  },

  "Sell Like Crazy": {
    title: "Sell Like Crazy",
    description: `<h3>By Sabri Suby</h3>
    
    <p>Sell Like Crazy is a high-intensity guide to Direct-Response Marketing, Sales Psychology, and Advertising Automation. Sabri Suby breaks down the specific "system" he used to build one of Australia's fastest-growing digital marketing agencies, focusing on how to move away from "hope-based" marketing toward a predictable, data-driven revenue machine.</p><br>`,
  },

  "The Light We Carry": {
    title: "The Light We Carry",
    description: `<h3>By Michelle Obama</h3>
    
    <p>The Light We Carry is about Overcoming in Uncertain Times, is a guide to Emotional Resilience and Social Navigation. Written as a follow-up to her memoir, it focuses on the "tools" one uses to stay balanced and confident in a world that often feels chaotic or unpredictable.</p><br>`,
  },

  "Think Like a Monk": {
    title: "Think Like a Monk",
    description: `<h3>By Jay Shetty</h3>
    
    <p>Think Like a Monk draws on the author's experience living in a monastery to provide a blueprint for Mental Clarity, Purpose, and Emotional Regulation. It focuses on stripping away the "Monkey Mind" (distractions and ego) to cultivate the "Monk Mind" (focus and peace).</p><br>`,
  },

  Will: {
    title: "Will",
    description: `<h3>By Will Smith (with Mark Manson)</h3>
    
    <p>Will is a memoir that functions as a deep psychological exploration of Perfectionism, Performance, and the "Protector" Persona. It chronicles Will Smith's journey from a fearful child in Philadelphia to one of the biggest movie stars in history, revealing that his massive public success was often a defense mechanism designed to mask internal insecurities.</p><br>`,
  },

  Becoming: {
    title: "Becoming",
    description: `<h3>By Michelle Obama</h3>
    
    <p>Becoming is a deeply personal memoir that explores the Psychology of Self-Actualization and Identity. It is divided into three sections—Becoming Me, Becoming Us, and Becoming More—to track the evolution of her personality, her partnership, and her role on the world stage.</p><br>`,
  },

  "A Spell of Good Things": {
    title: "A Spell of Good Things",
    description: `<h3>By Ayòbámi Adébáyò</h3>
    
    <p>A Spell of Good Things is a powerful social drama set in modern Nigeria. It explores the Psychology of Class Disparity, Political Influence, and the "Thin Line" between stability and chaos. The story follows two families from opposite ends of the economic spectrum—one wealthy and influential, the other struggling and desperate—and shows how their lives inevitably collide.</p><br>`,
  },

  "The Daily Laws": {
    title: "The Daily Laws",
    description: `<h3>By Robert Greene</h3>
    
    <p>The Daily Laws is a compilation of 366 daily meditations curated from Robert Greene’s previous works (including The 48 Laws of Power, The Laws of Human Nature, and Mastery). It functions as a Psychological Field Manual for navigating power, seduction, strategy, and self-mastery.</p><br>`,
  },

  Principles: {
    title: "Principles",
    description: `<h3>By Robert Greene</h3>
    
    <p>Principles: Life and Work is a guide to Systematic Decision Making and Radical Transparency. Ray Dalio, the founder of the world's largest hedge fund (Bridgewater Associates), argues that life, management, and investing can all be boiled down to "algorithms" or principles that can be tested and refined over time.</p><br>`,
  },

  "The Daily Stoic": {
    title: "The Daily Stoic",
    description: `<h3>By Ryan Holiday & Stephen Hanselman</h3>
    
    <p>The Daily Stoic offers 366 days of Stoic insights and exercises, featuring all-new translations from Emperor Marcus Aurelius, the playwright Seneca, and slave-turned-philosopher Epictetus. It is designed as a Practical Philosophy Field Guide for developing mental toughness and clarity.</p><br>`,
  },

  "Good to Great": {
    title: "Good to Great",
    description: `<h3>By Jim Collins</h3>
    
    <p>Good to Great is a definitive study on Management Psychology and Organizational Longevity. Based on five years of research, Jim Collins and his team identified a set of companies that made the leap from "good" results to "great" results (and stayed there for at least 15 years), comparing them against a control group that failed to make the leap.</p><br>`,
  },

  "Dare to Lead": {
    title: "Dare to Lead",
    description: `<h3>By Brené Brown</h3>
    
    <p>Dare to Lead is a research-based exploration of Vulnerability, Courage, and Emotional Intelligence. Brené Brown spent years studying leaders across various industries—from tech startups to the military—to understand why some cultures thrive while others remain stuck in "armored" leadership.</p><br>`,
  },

  "No Excuses": {
    title: "No Excuses",
    description: `<h3>By Brian Tracy</h3>
    
    <p>No Excuses!: The Power of Self-Discipline is a manual for Personal Accountability and Behavioral Modification. Brian Tracy argues that self-discipline is the "master key" that unlocks all other doors to success, whether in your personal life, your finances, or your career.</p><br>`,
  },

  "Solving Single": {
    title: "Solving Single",
    description: `<h3>By G.L. Lambert</h3>
    
    <p>Solving Single is an aggressive, no-nonsense dive into the Psychology of Modern Dating and Self-Worth. It is written from a perspective of extreme realism, stripping away the romanticized "fairytale" narratives to look at how social value, leverage, and human behavior dictate relationship outcomes.</p><br>`,
  },

  Range: {
    title: "Range",
    description: `<h3>By David Epstein</h3>
    
    <p>Range: Why Generalists Triumph in a Specialized World is a deep dive into Learning Theory and Cognitive Flexibility. It challenges the popular "10,000-hour rule" by arguing that while early specialization might work for "kind" learning environments (like chess or golf), "wicked" environments (like business, science, or art) favor those who start broad and embrace a variety of experiences.</p><br>`,
  },

  "Blue Ocean Strategy": {
    title: "Blue Ocean Strategy",
    description: `<h3>By W. Chan Kim & Renée Mauborgn</h3>
    
    <p>Blue Ocean Strategy is a landmark work in Strategic Management and Innovation Psychology. It argues that lasting success comes not from battling competitors in crowded "Red Oceans"—where profit margins are slashed by cutthroat rivalry—but from creating "Blue Oceans" of uncontested market space.</p><br>`,
  },

  "Market Wizards": {
    title: "Market Wizards",
    description: `<h3>By Jack D. Schwager</h3>
    
    <p>Market Wizards is a collection of interviews with some of the most successful traders of our time. Rather than providing a single "magic formula," it functions as a Comparative Study in High-Performance Psychology. It reveals that while their technical strategies (trend following, arbitrage, macro) vary wildly, their psychological profiles are nearly identical.</p><br>`,
  },

  "The Kite Runner": {
    title: "The Kite Runner",
    description: `<h3>By Khaled Hosseini</h3>
    
    <p>The Kite Runner is a hauntingly beautiful story set against the backdrop of a changing Afghanistan. While it is a work of fiction, it serves as a profound Psychological Study on Guilt, Redemption, and the Father-Son Dynamic. It follows Amir, a young boy from Kabul, as he navigates a life-altering act of cowardice and his lifelong quest for atonement.</p><br>`,
  },

  "Psycho-Cybernetics": {
    title: "Psycho-Cybernetics",
    description: `<h3>By Maxwell Maltz</h3>
    
    <p>Psycho-Cybernetics is widely considered the foundation of the modern self-help movement. Written by a plastic surgeon, it explores the Psychology of the Self-Image and how our internal "blueprint" dictates our external results more than our actual talent or circumstances.</p><br>`,
  },

  "The Magic of Thinking Big": {
    title: "The Magic of Thinking Big",
    description: `<h3>By David J. Schwartz</h3>
    
    <p>The Magic of Thinking Big is a classic text on Applied Psychology and Aspirational Goal Setting. It argues that the size of your success is determined by the size of your belief. It focuses on shifting from a "survival" mindset to an "abundance" mindset by changing the language and mental pictures you use daily.</p><br>`,
  },

  "Start With Why": {
    title: "Start With Why",
    description: `<h3>By Simon Sinek</h3>
    
    <p>Start With Why is a foundational text on Inspirational Leadership and Organizational Purpose. It explores the "Golden Circle" framework, arguing that while most people and companies know what they do and how they do it, only the truly successful ones start with why they do it.</p><br>`,
  },

  "Everything Is F*cked": {
    title: "Everything Is F*cked",
    description: `<h3>By Mark Manson</h3>
    
    <p>Everything Is F*cked: A Book About Hope is a deep dive into the Psychology of Hope and the Irrationality of the Human Mind. While Manson's first book focused on what to "give a f*ck" about, this one explores why we feel so hopeless in a world that is technically better than ever.</p><br>`,
  },

  "Think Big": {
    title: "Think Big",
    description: `<h3>By Dr. Ben Carson</h3>
    
    <p>Think Big: Unleashing Your Potential for Excellence by Dr. Ben Carson is a study in Applied Perseverance and Intellectual Discipline. It is a memoir-style guide that details how a "troubled" student from Detroit transformed into a world-renowned neurosurgeon.</p><br>`,
  },

  "Ego Is the Enemy": {
    title: "Ego Is the Enemy",
    description: `<h3>By Ryan Holiday</h3>
    
    <p>Ego Is the Enemy is a philosophical and psychological study on the Destructive Nature of the Ego. Drawing from Stoicism and historical examples, Ryan Holiday argues that ego is an internal obstacle that prevents us from learning, succeeding, and recovering from failure</p><br>`,
  },

  "The Compound Effect": {
    title: "The Compound Effect",
    description: `<h3>By Darren Hardy</h3>
    
    <p>The Compound Effect is a practical guide to the Mathematics of Success. It moves away from "get-rich-quick" schemes and focuses on the quiet power of consistency. It argues that your life is the total sum of the small, seemingly insignificant choices you make every single day.</p><br>`,
  },

  Outliers: {
    title: "Outliers",
    description: `<h3>By Malcolm Gladwell</h3>
    
    <p>Outliers: The Story of Success is a deep dive into Sociology and Achievement Psychology. Gladwell challenges the "Self-Made Man" myth, arguing that we pay too much attention to what successful people are like, and too little attention to where they are from: their culture, their family, their generation, and the idiosyncratic experiences of their upbringing.</p><br>`,
  },

  "Take the Risk": {
    title: "Take the Risk",
    description: `<h3>By Dr. Ben Carson</h3>
    
    <p>Take the Risk: Learning to Identify, Choose, and Live with Acceptable Risk, Dr. Ben Carson moves from the "Think Big" philosophy to the Calculated Execution of big ideas. As a neurosurgeon who specialized in separating conjoined twins, Carson views risk through a lens of extreme consequence, teaching readers how to move past paralyzing fear into informed action.</p><br>`,
  },

  "Nice Girls Dont Get Rich": {
    title: "Nice Girls Dont Get Rich",
    description: `<h3>By Lois P. Frankel, Ph.D.</h3>
    
    <p>Nice Girls Don't Get Rich: 75 Avoidable Mistakes Women Make with Money is a study in Financial Socialization. Dr. Frankel, a corporate coach, argues that many women are conditioned from childhood to be "nice"—which often translates to being passive, accommodating, and risk-averse. This "niceness" becomes a psychological barrier to building significant wealth.</p><br>`,
  },

  "The Art of Letting Go": {
    title: "The Art of Letting Go",
    description: `<h3>By Nick Trenton</h3>
    
    <p>The Art of Letting Go is a practical guide focused on Emotional Regulation and Cognitive Reframing. It addresses the mental "clutter" that keeps individuals trapped in the past or anxious about the future. The book functions as a roadmap for moving from a state of overthinking and attachment to one of mental peace and presence.</p><br>`,
  },

  "Waiting and Dating": {
    title: "Waiting and Dating",
    description: `<h3>By Dr. Myles Munroe</h3>
    
    <p>Waiting and Dating: A Sensible Guide to a Fulfilling Relationship is a study in Relational Foundation and Self-Actualization. Dr. Munroe challenges the modern "recreational dating" culture, arguing that successful relationships are built on individual wholeness rather than a search for someone to "complete" you.</p><br>`,
  },

  "The 15 Commitments of Conscious Leadership": {
    title: "The 15 Commitments of Conscious Leadership",
    description: `<h3>By Jim Dethmer, Diana Chapman, and Kaley Klemp</h3>
    
    <p>The 15 Commitments of Conscious Leadership is a transformative guide focused on Self-Awareness and Emotional Intelligence. It introduces a radical shift from "unconscious" leading (driven by fear and reactivity) to "conscious" leading (driven by curiosity and responsibility). It is built around a central, binary question: "Are you above or below the line?"</p><br>`,
  },

  "Gifted Hands": {
    title: "Gifted Hands",
    description: `<h3>By Dr. Ben Carson (with Cecil Murphey)</h3>
    
    <p>Gifted Hands is the autobiography of Dr. Ben Carson, detailing his journey from a "class dummy" in inner-city Detroit to the Director of Pediatric Neurosurgery at Johns Hopkins Hospital. It is a fundamental study in Developmental Transformation and the power of Intellectual Discipline.</p><br>`,
  },

  "How to Lead When You are Not in Charge": {
    title: "How to Lead When You are Not in Charge",
    description: `<h3>By Clay Scroggins</h3>
    
    <p>ow to Lead When You're Not in Charge is a masterclass in Personal Agency and Organizational Influence. It directly challenges the "Authority Fallacy"—the belief that you need a title or a corner office to make a difference. Scroggins argues that leadership is not about control; it is about influence, and influence is earned through character and posture.</p><br>`,
  },

  "The Mountain Is You": {
    title: "The Mountain Is You",
    description: `<h3>By Brianna Wiest</h3>
    
    <p>The Mountain Is You: Transforming Self-Sabotage Into Self-Mastery is a profound study in Internal Resistance. Wiest argues that the "mountain" standing in your way is not an external obstacle, but the internal collection of traumas, fears, and habits that cause you to get in your own way. To "climb the mountain" is to do the deep inner work of excavating the self.</p><br>`,
  },

  "Leaders Eat Last": {
    title: "Leaders Eat Last",
    description: `<h3>By Simon Sinek</h3>
    
    <p>Leaders Eat Last: Why Some Teams Pull Together and Others Don’t is a study in Evolutionary Biology and Group Dynamics. Sinek argues that the best organizations aren't those with the smartest people, but those with the highest level of Psychological Safety. The title comes from a Marine Corps tradition where senior officers eat only after the junior enlisted have been fed—symbolizing that a leader’s primary duty is to protect the tribe.</p><br>`,
  },

  Mindset: {
    title: "Mindset",
    description: `<h3>By Dr. Carol S. Dweck</h>
    
    <p>Mindset: The New Psychology of Success is one of the most influential works in modern behavioral science. Dr. Dweck, a Stanford psychologist, spent decades researching how our beliefs about our own abilities—our "mindset"—determine our entire life path. It is the definitive study on Cognitive Orientation</p><br>`,
  },

  "Win Your Inner Battles": {
    title: "Win Your Inner Battles",
    description: `<h3>By Darius Foroux</h3>
    
    <p>Win Your Inner Battles: Defeat Fear and Become the Master of Your Life is a pragmatic guide to Cognitive Mastery. Foroux argues that most people are held back not by external circumstances, but by an internal state of fear and overthinking. The book provides a three-step framework—Perception, Strategy, and Action—to dismantle these mental barriers.</p><br>`,
  },

  "Hi God, It is Me Again": {
    title: "Hi God, It is Me Again",
    description: `<h3>By Dr. Ben Carson</h3>
    
    <p>While many of Ben Carson's other works focus on the "how-to" of neurosurgery or academic success, Hi God, It's Me Again (also released under titles like Spend Your Life Like It’s Your Only One) is a study in Existential Meaning and Spiritual Resilience. It explores how a personal connection with a higher power provides the psychological stability needed to perform under extreme pressure.</p><br>`,
  },

  "The Let Them Theory": {
    title: "The Let Them Theory",
    description: `<h3>By Mel Robbins</h3>
    
    <p>The "Let Them" Theory is a psychological framework designed to reduce emotional distress by relinquishing the need to control others. It operates on the principle of Radical Acceptance, allowing you to move from a reactive state to an observant one. By "letting them" act freely, you stop wasting mental energy on things outside your control and gain clear data on who people truly are.</p><br>`,
  },

  "The Lean Startup": {
    title: "The Lean Startup",
    description: `<h3>By Eric Ries</h3>
    
    <p>The Lean Startup is more than a business book; it is a Mindset framework for handling uncertainty. It applies the scientific method to human creativity, ensuring that you don't waste years building something that nobody wants. It shifts the focus from "efficiency" to "Validated Learning."</p><br>`,
  },

  Verity: {
    title: "Verity",
    description: `<h3>By Colleen Hoover</h3>
    
    <p>Verity is a departure from traditional romance, leaning heavily into Psychological Manipulation and the blurring of truth and fiction. It explores the darker side of the human psyche, specifically how trauma and obsession can distort a person's reality.</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
  },

  "...": {
    title: "...",
    description: `<h3>By </h3>
    
    <p>...</p><br>`,
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

function filterVault(category) {
  const cards = document.querySelectorAll(".book-card");

  cards.forEach((card) => {
    card.style.opacity = "0"; // Start fade out
    card.style.transform = "scale(0.9)";

    setTimeout(() => {
      if (category === "ALL" || card.dataset.category === category) {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, 50);
      } else {
        card.style.display = "none";
      }
    }, 300);
  });
}

function renderBookCards() {
  const container = document.getElementById("vault-grid"); // Replace with your actual container ID
  container.innerHTML = "";

  Object.keys(bookData).forEach((key) => {
    const book = bookData[key];
    const isLocked = book.status === "pending";

    const cardHtml = `
            <div class="book-card ${isLocked ? "locked-status" : ""}">
                <h3>${book.title}</h3>
                <img src="${book.image}" alt="${book.title}">
                <p style="color: ${isLocked ? "#d4af37" : "#fff"}; font-size: 0.8rem; margin: 10px 0;">
                    ${isLocked ? "ACCESS AUTHORIZATION PENDING" : "ONLY 4 COPIES REMAINING"}
                </p>
                <button onclick="showAbout('${key}')">
                    ${isLocked ? "ARCHIVE LOCKED" : "Request Access Key (" + book.price + ")"}
                </button>
            </div>
        `;
    container.innerHTML += cardHtml;
  });
}

let lastScrollY = window.scrollY;
const navbar = document.querySelector("header");
const threshold = 5; // Minimum scroll amount before navbar reacts

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // Prevent the navbar from flickering at the very top of the page
  if (currentScrollY <= 0) {
    navbar.classList.remove("nav-hidden");
    return;
  }

  // Only trigger if the user scrolls more than the threshold
  if (Math.abs(currentScrollY - lastScrollY) > threshold) {
    if (currentScrollY > lastScrollY) {
      // Scrolling Down
      navbar.classList.add("nav-hidden");
    } else {
      // Scrolling Up
      navbar.classList.remove("nav-hidden");
    }
  }
  lastScrollY = currentScrollY;
});