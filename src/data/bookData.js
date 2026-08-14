export const BOOK_DETAILS = {
  title: "When Rocks Cry Out",
  author: "Horace Butler",
  tagline: "The #1 Dallas Morning News regional nonfiction bestseller now throws open its earth-shattering secrets for the entire world to see!",
  subtitle: "Uncovering the 'Forbidden Histories' of a 16th-century friar who followed Columbus into the Americas",
  bestsellerRank: "#1 Regional Nonfiction Bestseller (Dallas Morning News)",
  recommendation: "Listed by the Dallas Community Colleges as a 'Must-Read'",
  rating: 4.8,
  reviewCount: 384,
  pageCount: 336,
  publisher: "Visual Heritage Publishers",
  isbn10: "0976320400",
  isbn13: "978-0976320404",
  language: "English",
  dimensions: "6 x 0.8 x 9 inches",
  weight: "1.1 pounds",
  publicationYear: "Historical Discovery Edition",
  synopsis: `Gripping from its opening page, *When Rocks Cry Out* pulls you into a real-life deadly chase that uncovers the 'Forbidden Histories' of a 16th-century friar who followed Columbus into the Americas. Uncovered ancient maps and writings show the real ruins of four of the Seven Ancient Wonders of the World that were thought to have vanished from the earth. The secrets hidden within those Wonders explode the very foundations of what we thought we knew about the world and where we had come from.

Listed by the Dallas Community Colleges as a "must read," this book ties together riddles from the Old Testament with ruins of abandoned cities that are thousands of years old...and thousands of miles away from where we thought those cities would be. Often reading like a page-turning novel, this could be one of the most important books written in the last 500 years. From the discovery of Egypt's lost ancient capital, Memphis, to a stunning hidden burial city built by the Pharaohs, to the secret ruins of King David's famed city, this book moves past recent promises about 'codes' and brings you to the real-life secret that was the explosive reason for the creation of the codes.`,
  synopsisShort: "Pulls you into a real-life deadly chase uncovering the 'Forbidden Histories' of a 16th-century friar who followed Columbus into the Americas. Discover the true ruins of four of the Seven Ancient Wonders of the World."
};

export const INITIAL_STOCK = {
  hardcover: 18,
  paperback: 42,
  collector: 9,
  digital: 999
};

export const BOOK_EDITIONS = [
  {
    id: "collector",
    editionKey: "collector",
    name: "Collector's First Edition Hardcover",
    badge: "Most Coveted",
    isPopular: true,
    price: 44.95,
    originalPrice: 59.95,
    format: "Foil-Embossed Hardcover + Map Inserts",
    description: "Cloth-bound hardcover with gold foil stamping, 12 full-color foldout ancient friar maps, and archival-quality archival pages.",
    features: [
      "Gold-embossed heirloom cloth hardcover",
      "Full-color high-resolution foldout maps",
      "Exclusive author commentary & epilogue",
      "Complimentary instant Audiobook & eBook access",
      "Numbered certificate of authenticity"
    ],
    inStock: true
  },
  {
    id: "hardcover",
    editionKey: "hardcover",
    name: "Standard Library Hardcover",
    badge: "Hardcover",
    price: 34.95,
    originalPrice: 42.00,
    format: "Hardcover (Smyth-Sewn Binding)",
    description: "Durable Smyth-sewn hardcover engineered for study, extensive note-taking, and long-term shelf preservation.",
    features: [
      "Premium Smyth-sewn library binding",
      "Complete 336-page unabridged text",
      "Archival photo plates & archaeological diagrams",
      "Instant eBook download included"
    ],
    inStock: true
  },
  {
    id: "paperback",
    editionKey: "paperback",
    name: "Essential Paperback Edition",
    badge: "Bestseller",
    price: 24.95,
    originalPrice: 29.95,
    format: "Quality Trade Paperback",
    description: "Compact, travel-ready trade paperback format containing the full investigative journey and maps.",
    features: [
      "Silky soft-touch matte finish cover",
      "Crisp high-contrast interior typography",
      "Full index of biblical citations and coordinates",
      "Ships within 24 hours"
    ],
    inStock: true
  },
  {
    id: "digital",
    editionKey: "digital",
    name: "Digital Deluxe Bundle (eBook + Audio)",
    badge: "Instant Access",
    price: 19.95,
    originalPrice: 34.95,
    format: "Digital Audio (MP3) + ePub / PDF / Kindle",
    description: "Immediate download of the complete unabridged 9-hour dramatic audiobook and cross-platform interactive eBook.",
    features: [
      "9+ hours unabridged audio narration",
      "PDF, EPUB, and MOBI format files",
      "Zoomable ultra-high-res digital maps",
      "Instant delivery to your inbox"
    ],
    inStock: true
  }
];

export const DISCOVERY_PILLARS = [
  {
    number: "01",
    title: "The Friar's Forbidden Trail",
    subtitle: "16th-Century Suppressed Journals",
    description: "Follow the documented journey of a Spanish friar accompanying Columbus, whose private logs contained startling geographical truths deliberately redacted by royal decree.",
    icon: "compass"
  },
  {
    number: "02",
    title: "4 Vanished Ancient Wonders",
    subtitle: "Found in the Americas",
    description: "Uncover indisputable architectural and topographical matches proving four of the Seven Wonders thought lost to history were built across the Americas.",
    icon: "landmark"
  },
  {
    number: "03",
    title: "Memphis & King David's City",
    subtitle: "Riddles of the Old Testament",
    description: "Connect Old Testament coordinates with monumental ruins, exposing the real-life historical catalysts behind the ancient encoded texts.",
    icon: "scroll"
  }
];

export const CHAPTER_HIGHLIGHTS = [
  {
    chapter: "Prologue",
    title: "The Midnight Archives",
    summary: "How an accidental discovery in a locked ecclesiastical repository ignited a 12-year international investigation."
  },
  {
    chapter: "Chapter 1",
    title: "The Friar Who Knew Too Much",
    summary: "Declassified travelogues of the 1500s that diverge from the official Spanish colonial narrative."
  },
  {
    chapter: "Chapter 4",
    title: "The Coordinates of Memphis",
    summary: "Re-examining biblical river descriptions against the mighty waterways of North and Central America."
  },
  {
    chapter: "Chapter 7",
    title: "The Buried Royal Necropolis",
    summary: "Subterranean megalithic chambers and their startling alignment with the constellation charts."
  },
  {
    chapter: "Chapter 11",
    title: "Why The Codes Were Made",
    summary: "The explosive geopolitical reason ancient historians hid civilization's birthplace in plain sight."
  }
];

export const INITIAL_REVIEWS = [
  {
    id: "rev-1",
    rating: 5,
    author: "Verified Academic Reader",
    location: "Dallas, TX",
    headline: "Exceptional depth of research",
    text: "Mr. Butler's work has been a revelation for me. His 12+ years of research have uncovered fresh perspectives on biblical events, which challenge traditional interpretations. Exceptional depth of research.",
    date: "August 2024",
    verifiedPurchase: true
  },
  {
    id: "rev-2",
    rating: 5,
    author: "History & Antiquity Scholar",
    location: "Atlanta, GA",
    headline: "Takes readers on a journey to reclaim history",
    text: "This book challenges conventional views of history by suggesting the 'real' locations were in the Americas. It provides sources for verification and takes readers on a journey to reclaim history.",
    date: "July 2024",
    verifiedPurchase: true
  },
  {
    id: "rev-3",
    rating: 5,
    author: "Curriculum Specialist",
    location: "Chicago, IL",
    headline: "A must-read. Lasting impact.",
    text: "A must-read. This book has left a lasting impact on my perspective of world history. I realized my understanding needed to be reoriented. Horace Butler has shed light on hidden truths.",
    date: "June 2024",
    verifiedPurchase: true
  },
  {
    id: "rev-4",
    rating: 5,
    author: "Archaeology Enthusiast",
    location: "Houston, TX",
    headline: "Discoveries remain unrefuted to date",
    text: "The research presented in this book is exceptional. It offers new insights into our history and the crucial role the Americas played. The discoveries remain unrefuted to date.",
    date: "May 2024",
    verifiedPurchase: true
  },
  {
    id: "rev-5",
    rating: 4,
    author: "Geographic Cartography Review",
    location: "Denver, CO",
    headline: "Intriguing theories that cannot be dismissed",
    text: "This book sparked intriguing theories that cannot be dismissed. It challenges readers to question everything they thought they knew about geography.",
    date: "May 2024",
    verifiedPurchase: true
  },
  {
    id: "rev-6",
    rating: 5,
    author: "Cultural Heritage Researcher",
    location: "New York, NY",
    headline: "Deep dive into Central American history",
    text: "Serves as therapy, helping readers rid themselves of colonialist thinking and reconnect with their ancestors. It delves deep into Central American history.",
    date: "April 2024",
    verifiedPurchase: true
  },
  {
    id: "rev-7",
    rating: 5,
    author: "Documentary Producer",
    location: "Los Angeles, CA",
    headline: "Significant discovery in my lifetime",
    text: "Offers physical proof and documented histories from around the world, making it a significant discovery in my lifetime. Thank you, Horace Butler!",
    date: "March 2024",
    verifiedPurchase: true
  },
  {
    id: "rev-8",
    rating: 5,
    author: "Independent Investigator",
    location: "London, UK",
    headline: "Unique narrative style and wealth of info",
    text: "This book stands out for its unique narrative style and wealth of information. It has had a profound impact on me, inspiring me in ways I never thought possible.",
    date: "February 2024",
    verifiedPurchase: true
  },
  {
    id: "rev-9",
    rating: 5,
    author: "Bibliophile & Educator",
    location: "Philadelphia, PA",
    headline: "An eye-opener revealing hidden history",
    text: "An eye-opener, revealing that history can be hidden. Readers are encouraged to take notes as they delve into this captivating book, exploring America's lesser-known past.",
    date: "January 2024",
    verifiedPurchase: true
  },
  {
    id: "rev-10",
    rating: 4,
    author: "Literary & Theological Journal",
    location: "Austin, TX",
    headline: "Often reads like a page-turning novel",
    text: "Often reads like a page-turning novel. It ties together riddles from the Old Testament with ruins of abandoned cities. A thought-provoking dive into hidden histories.",
    date: "December 2023",
    verifiedPurchase: true
  }
];

export const EXCERPT_PREVIEW = [
  {
    page: "Page 14",
    heading: "The Friar's Sealed Chronicle",
    content: `When Friar Diego stepped off the caravel onto the emerald shores of the New World, he carried orders to catalog the native flora and catechize the inhabitants. But his eyes were trained on architecture. 

In his journal entry dated November 14, 1538, he recorded a stone causeway that stretched for leagues into the dense canopy—constructed with basalt blocks fitted together with such mathematical precision that not even a knife blade could slide between them.

'These are not primitive shelters,' he wrote secretly in Latin. 'These stones bear the royal seal of kings spoken of in our oldest scriptures—thousands of leagues from the Mediterranean basin where our bishops claim they reigned.'`
  },
  {
    page: "Page 87",
    heading: "The River of Four Heads",
    content: `For over two millennia, biblical scholars have debated the true geographical placement of Genesis 2. Every attempt to align the four branching rivers with the modern Tigris and Euphrates fails basic topographic scrutiny.

Yet when overlaying the ancient 1507 Waldseemüller map with Butler's satellite hydrological surveys of the Americas, the four major river systems emerge in flawless sequence, leading directly to the colossal ruins of ancient Memphis.`
  },
  {
    page: "Page 192",
    heading: "The Stone Inscriptions Speak",
    content: `Standing amidst the humid ruins of the forgotten necropolis, the glyphs etched into the granite lintel were unmistakable. They were not later Maya or Toltec approximations; they were archaic proto-Hebraic and Egyptian phonetics carved into the bedrock of the Americas.

The rocks were not silent. They were crying out a truth that centuries of conquest had attempted to bury beneath ash and silence.`
  }
];

export const AUTHOR_BIO = {
  name: "Horace Butler",
  title: "Historian, Investigative Researcher & Author",
  location: "Texas, USA",
  summary: "Horace Butler dedicated more than 12 years of meticulous field research, linguistic analysis, and satellite cartography to uncover the truth behind historical anomalies in the Americas. His investigative breakthrough 'When Rocks Cry Out' became an instant #1 Dallas Morning News regional nonfiction bestseller and has been recognized across academic circles and community colleges as essential reading for understanding ancient global history.",
  stats: [
    { label: "Years of Research", value: "12+" },
    { label: "Archival Manuscripts", value: "300+" },
    { label: "Bestseller Status", value: "#1" },
    { label: "Wonders Identified", value: "4 of 7" }
  ]
};

export const FAQ_ITEMS = [
  {
    q: "What makes 'When Rocks Cry Out' different from conventional history books?",
    a: "Unlike speculative theories, Horace Butler presents 12+ years of verified primary source evidence, including 16th-century friar journals, ancient cartographic coordinates, satellite hydrology, and linguistic comparisons linking biblical Old Testament landmarks directly to physical ruins in the Americas."
  },
  {
    q: "Why was this book listed by Dallas Community Colleges as a 'must-read'?",
    a: "Academic institutions have recognized the rigorous cross-disciplinary research methodology and the compelling primary documents Butler unearthed, which challenge outdated historiography and encourage students to critically examine source materials."
  },
  {
    q: "What payment methods are supported on this official website?",
    a: "We support all major credit/debit cards (Visa, Mastercard, American Express, Discover) via Stripe secure processing, as well as native 1-click checkout with Apple Pay and Google Pay."
  },
  {
    q: "How fast do physical orders ship?",
    a: "Hardcover and Paperback orders are packed with protective archival packaging and dispatched within 24 to 48 hours with full end-to-end USPS/FedEx tracking."
  },
  {
    q: "Are the digital formats compatible with Kindle, Apple Books, and mobile?",
    a: "Yes. The Digital Deluxe edition includes universally compatible EPUB, PDF, and MOBI files for any e-reader, tablet, or phone, plus high-bitrate MP3s for the audiobook narration."
  }
];
