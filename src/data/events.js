export const technicalEvents = [
  {
    id: "T-01",
    slug: "paper-presentation",
    title: "NEUROVERSE",
    description: "Share your ideas. Shape the future.",
    tags: ["Ideas", "Research", "Impact"],
    image: "/images/events/paper.png",
    accent: "cyan",

    duration: "10 Minutes",
    team: "1 - 2 Members",
    venue: "Loyola Auditorium",

    rules: [
      "Maximum 2 participants per team.",
      "Presentation duration is 10 minutes.",
      "Participants must bring their presentation file.",
      "Judges decision will be final.",
    ],
  },

  {
    id: "T-02",
    slug: "debugging",
    title: "BUGSLAYER",
    description: "Find it. Fix it. Prove your skills.",
    tags: ["Logic", "Analyze", "Solve"],
    image: "/images/events/debugging.png",
    accent: "pink",

    duration: "30 Minutes",
    team: "Individual",
    venue: "Computer Lab",

    rules: [
      "This is an individual event.",
      "Participants will be given buggy code.",
      "Fix maximum errors within the given time.",
      "Judges decision will be final.",
    ],
  },

  {
    id: "T-03",
    slug: "poster-making",
    title: "NEUROCANVAS",
    description: "Design your thoughts. Make an impact.",
    tags: ["Creativity", "Design", "Express"],
    image: "/images/events/poster.png",
    accent: "purple",

    duration: "45 Minutes",
    team: "Individual",
    venue: "Loyola Auditorium",

    rules: [
      "Poster must be created within the given time.",
      "Topic will be announced on the spot.",
      "Originality and creativity will be evaluated.",
      "Judges decision will be final.",
    ],
  },

  {
    id: "T-04",
    slug: "Output to Code",
    title: "BYTEBATTLE",
    description: "Code. Compete. Conquer.",
    tags: ["Develop", "Think", "Win"],
    image: "/images/events/codex.png",
    accent: "blue",

    duration: "45 Minutes",
    team: "Individual",
    venue: "Computer Lab",

    rules: [
      "This is an individual coding event.",
      "Participants must solve the given problems.",
      "Internet usage is not allowed.",
      "Fastest correct submissions will score higher.",
    ],
  },
];

export const nonTechnicalEvents = [
  {
    id: "N-01",
    slug: "Pixel-Hunt",
    title: "SnapShot",
    description: "Think fast. Answer faster.",
    tags: ["Knowledge", "Speed", "Fun"],
    image: "/images/events/snapshot.png",
    accent: "cyan",

    duration: "30 Minutes",
    team: "2 Members",
    venue: "Loyola Auditorium",

    rules: [
      "Maximum 2 members per team.",
      "Multiple rounds may be conducted.",
      "No mobile phones are allowed.",
      "Quiz master's decision will be final.",
    ],
  },

  {
    id: "N-02",
    slug: "on-the-spot-debate",
    title: "On the Spot Debate",
    description: "Speak. Argue. Impress.",
    tags: ["Speak", "Think", "Persuade"],
    image: "/images/events/debate.png",
    accent: "pink",

    duration: "5 Minutes",
    team: "Individual",
    venue: "Loyola Auditorium",

    rules: [
      "Topic will be given on the spot.",
      "Preparation time will be limited.",
      "Participants must stay within the time limit.",
      "Judges decision will be final.",
    ],
  },

  {
    id: "N-03",
    slug: "guess-the-lyrics",
    title: "Guess the Lyrics",
    description: "Feel the beat. Guess the line.",
    tags: ["Music", "Listen", "Guess"],
    image: "/images/events/lyrics.png",
    accent: "purple",

    duration: "30 Minutes",
    team: "2 Members",
    venue: "Loyola Auditorium",

    rules: [
      "Participants must identify songs or lyrics.",
      "No mobile phones are allowed.",
      "Points depend on correct answers.",
      "Coordinator decision will be final.",
    ],
  },

  {
    id: "N-04",
    slug: "mystery-box",
    title: "Mystery Box",
    description: "Unbox the unexpected.",
    tags: ["Explore", "Think", "Surprise"],
    image: "/images/events/mystery.png",
    accent: "orange",

    duration: "30 Minutes",
    team: "2 Members",
    venue: "Loyola Auditorium",

    rules: [
      "Instructions will be revealed during the event.",
      "Participants must complete the given challenge.",
      "Teamwork and creativity will be evaluated.",
      "Coordinator decision will be final.",
    ],
  },
];

export const allEvents = [
  ...technicalEvents,
  ...nonTechnicalEvents,
];