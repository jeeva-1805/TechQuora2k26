export const technicalEvents = [
  {
    id: "T-01",
    slug: "paper-presentation",
    title: "NEUROVERSE",
    description: "Share your ideas. Shape the future.",
    tags: ["Ideas", "Research", "Impact"],
    image: "/images/events/paper.png",
    accent: "cyan",

    duration: "5 Minutes",
    team: "2 - 3 Members",
    venue: "Loyola Auditorium",

    rules: [
      "Maximum slide limit of 8.",
      "Presentation duration is 5 minutes.",
      "Send your presentations on neuroverse.aiml@gmail.com",
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
      "Find The error in the code.",
      "phones are not allowed.",
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
      "Participants must bring their own laptop.",
      "Topic will be announced on the spot.",
      "Tools: Canva,Picsart,Photoshop.",
      "No AI allowed.",
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

    duration: "30 Minutes",
    team: "Individual",
    venue: "Computer Lab",

    rules: [
      "Question based on AIML.",
      "Participants must solve the given problems.",
      "Internet usage is not allowed.",
      "Participants should follow the rules.",
    ],
  },
];

export const nonTechnicalEvents = [
  {
    id: "N-01",
    slug: "Pixel-Hunt",
    title: "Creative Mark",
    description: "Think fast. Answer faster.",
    tags: ["Capture", "Speed", "Fun"],
    image: "/images/events/snapshot.png",
    accent: "cyan",

    duration: "30 Minutes",
    team: "2 Members",
    venue: "Loyola Auditorium",

    rules: [
      "no repated image",
      "no images download from any site, only capture the raw image .",
      "color theme will be provide in on the spot.",
      "within 15minutes give the result, time extension got rejected.",
    ],
  },

  {
    id: "N-02",
    slug: "on-the-spot-debate",
    title: "Instant Verdict",
    description: "Speak. Argue. Impress.",
    tags: ["Speak", "Think", "Persuade"],
    image: "/images/events/debate.png",
    accent: "pink",

    duration: "1 hour",
    team: "2 Members",
    venue: "Loyola Auditorium",

    rules: [
      "Topic will be given on the spot.",
      "Participation must speak only in english.",
      "Preparation time 1 minute.",
      "Judges decision will be final.",
    ],
  },

  {
    id: "N-03",
    slug: "guess-the-lyrics",
    title: "Cinetunes",
    description: "Feel the beat. Guess the line.",
    tags: ["Music", "Listen", "Guess"],
    image: "/images/events/lyrics.png",
    accent: "purple",

    duration: "30 Minutes",
    team: "3 - 4 Members",
    venue: "Loyola Auditorium",

    rules: [
      "One should rise hands in each team.",
      "No mobile phones are allowed.",
      "Wrong answer will reduce in 1 mark.",
      "Coordinator decision will be final.",
    ],
  },

  {
    id: "N-04",
    slug: "puzzle difference",
    title: "Mind Arena",
    description: "find the clues.",
    tags: ["Explore", "Think", "Surprise"],
    image: "/images/events/mystery.png",
    accent: "orange",

    duration: "30 Minutes",
    team: "2 Members",
    venue: "Loyola Auditorium",

    rules: [
      "no photos should take while projecting the image .",
      "One should rise hands in each team.",
      "no argument , answer need to say within time,",
      "image display in screen for 45 second and relable question ask.",
    ],
  },
];

export const allEvents = [
  ...technicalEvents,
  ...nonTechnicalEvents,
];