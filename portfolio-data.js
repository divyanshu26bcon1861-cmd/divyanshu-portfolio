/**
 * Portfolio Data File - Divyanshu Jain
 * 
 * Centralized, data-driven configuration for Divyanshu Jain's personal portfolio.
 * You can easily update your personal details, education, skills, projects, and achievements
 * here without touching the HTML markup.
 */

const PORTFOLIO_DATA = {
  personalInfo: {
    fullName: "DIVYANSHU JAIN",
    displayName: "Divyanshu Jain",
    shortName: "DJ",
    professionalTitle: "Aspiring Software Developer | B.Tech Student",
    college: "JECRC UNIVERSITY",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "BTECH CSE (AI ML)",
    currentYear: "First Year",
    batch: "2025 – 2029",
    location: "Jaipur, Rajasthan, India",
    email: "divyanshujaindj777@gmail.com",
    github: "https://github.com/divyanshu26bcon1861-cmd",
    githubUsername: "divyanshu26bcon1861-cmd",
    linkedin: "https://www.linkedin.com/in/divyanshu-jain-placeholder",
    isLinkedinPlaceholder: true,
    avatar: "assets/profile.jpg",
    availabilityBadge: "OPEN TO LEARNING, COLLABORATION & OPPORTUNITIES",
    heroHeadline: "Hi, I'm",
    heroHighlightedName: "Divyanshu Jain",
    heroSubheading: "I build ideas into meaningful digital experiences.",
    heroDescription: "I'm a first-year B.Tech student passionate about technology, software development, problem-solving, and building projects that turn creative ideas into practical solutions.",
    typingTitles: [
      "Aspiring Software Developer",
      "Tech Enthusiast",
      "Problem Solver",
      "Future Full-Stack Developer",
      "AI & ML Explorer"
    ],
    resumeDownloadUrl: "#resume-preview",
    closingTagline: "Designed with curiosity. Built with purpose."
  },

  about: {
    heading: "A Little About Me",
    subheading: "Curiosity-driven, code-focused, and always building.",
    introParagraphs: [
      "I am a first-year B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning at JECRC University, Jaipur. My passion lies in understanding how complex software systems operate under the hood and building intuitive, resilient applications.",
      "As an early-stage developer, I focus intensely on solidifying my fundamentals in programming, problem-solving with data structures, and exploring modern web architectures. I actively seek out challenges that push me out of my comfort zone and help me evolve from writing code to engineering real-world solutions."
    ],
    highlights: [
      {
        icon: "sparkles",
        title: "Curious Learner",
        description: "Constantly exploring computer science fundamentals, algorithm paradigms, and modern software architectures with an open mind."
      },
      {
        icon: "code-2",
        title: "Project-Oriented Mindset",
        description: "Believing that true technical proficiency comes from building real applications, testing edge cases, and learning through hands-on debugging."
      },
      {
        icon: "trending-up",
        title: "Continuous Growth",
        description: "Committed to disciplined daily coding practice, expanding analytical problem-solving skills, and collaborating with developer communities."
      }
    ],
    whatDrivesMe: {
      quote: "Every great engineer once stared at their first compiler error. The difference is persisting until curiosity turns into mastery.",
      points: [
        "Mastering object-oriented principles and computational thinking",
        "Exploring how Artificial Intelligence and Machine Learning transform practical software",
        "Developing clean, responsive, and accessible user interfaces that make an impact"
      ]
    },
    quickFacts: [
      { label: "Institution", value: "JECRC University" },
      { label: "Degree & Major", value: "B.Tech CSE (AI & ML)" },
      { label: "Academic Standing", value: "First Year (2025–2029)" },
      { label: "Current Location", value: "Jaipur, Rajasthan" },
      { label: "Core Interests", value: "Full-Stack Web, AI/ML, DSA" },
      { label: "Primary Language", value: "English & Hindi" }
    ]
  },

  education: [
    {
      id: "btech-jecrc",
      degree: "Bachelor of Technology (B.Tech)",
      institution: "JECRC UNIVERSITY",
      branch: "Computer Science & Engineering (AI & ML)",
      duration: "2025 – 2029 (Expected)",
      currentStatus: "Currently Pursuing (First Year)",
      location: "Jaipur, Rajasthan",
      isCurrent: true,
      icon: "graduation-cap",
      highlights: "First Year Student · Specialization in AI & ML",
      description: "Building strong foundational competence in algorithm design, object-oriented programming, mathematical analysis, and software engineering principles.",
      coursework: [
        "Programming in C & C++",
        "Engineering Mathematics & Discrete Logic",
        "Computer Organization & Architecture",
        "Problem Solving with Computational Thinking",
        "Web Technologies & Digital Systems"
      ]
    },
    {
      id: "higher-secondary",
      degree: "Senior Secondary Education (Class XII)",
      institution: "[Senior Secondary School Name - Editable Placeholder]",
      branch: "Science Stream (PCM)",
      duration: "2023 – 2025",
      currentStatus: "Completed",
      location: "Jaipur, Rajasthan",
      isCurrent: false,
      icon: "book-open",
      highlights: "Academic Excellence in Mathematics & Sciences",
      description: "Completed higher secondary curriculum with intensive focus on analytical reasoning, physics, chemistry, and calculus foundations.",
      coursework: [
        "Mathematics & Calculus",
        "Physics & Electronics Principles",
        "Chemistry",
        "Computer Science Foundations"
      ]
    }
  ],

  skills: {
    note: "All listed skills reflect current academic coursework, hands-on labs, and active self-study projects. No arbitrary progress bars or fabricated percentages.",
    categories: [
      {
        name: "Programming Languages",
        icon: "terminal",
        items: [
          { name: "C", status: "Active Coursework", level: "Foundation" },
          { name: "C++", status: "Active Learning", level: "OOP & DSA" },
          { name: "Python", status: "Active Practice", level: "Scripting & AI Basics" },
          { name: "JavaScript (ES6+)", status: "Active Practice", level: "Modern Web" },
          { name: "Java", status: "Learning Roadmap", level: "Core Concepts" }
        ]
      },
      {
        name: "Frontend Development",
        icon: "layout",
        items: [
          { name: "HTML5", status: "Proficient", level: "Semantic Markup" },
          { name: "CSS3", status: "Proficient", level: "Flexbox / Grid / Animation" },
          { name: "Tailwind CSS", status: "Active Practice", level: "Utility-First Styling" },
          { name: "Responsive Design", status: "Proficient", level: "Mobile-First" },
          { name: "React Basics", status: "Learning Roadmap", level: "Components & State" }
        ]
      },
      {
        name: "Backend Development",
        icon: "server",
        items: [
          { name: "Node.js", status: "Learning Roadmap", level: "Runtime Basics" },
          { name: "Express.js", status: "Learning Roadmap", level: "Routing & Middleware" },
          { name: "REST APIs", status: "Active Practice", level: "API Consumption" },
          { name: "HTTP Protocols", status: "Foundational", level: "Client-Server Model" }
        ]
      },
      {
        name: "Databases",
        icon: "database",
        items: [
          { name: "MySQL", status: "Active Coursework", level: "Relational Queries / SQL" },
          { name: "Database Design", status: "Foundational", level: "ER Diagrams & Keys" },
          { name: "MongoDB", status: "Learning Roadmap", level: "Document Store Basics" }
        ]
      },
      {
        name: "Developer Tools",
        icon: "wrench",
        items: [
          { name: "Git", status: "Active Daily", level: "Version Control" },
          { name: "GitHub", status: "Active Daily", level: "Repo Collaboration" },
          { name: "VS Code", status: "Primary IDE", level: "Extensions & Workflows" },
          { name: "Terminal / Bash", status: "Active Daily", level: "CLI Navigation" },
          { name: "Chrome DevTools", status: "Active Practice", level: "Debugging & Auditing" }
        ]
      },
      {
        name: "Core Computer Science",
        icon: "cpu",
        items: [
          { name: "Data Structures", status: "Active Coursework", level: "Arrays, Lists, Stacks, Queues" },
          { name: "Algorithms", status: "Active Coursework", level: "Searching & Sorting" },
          { name: "Object-Oriented Programming", status: "Active Learning", level: "Classes, Inheritance, Polymorphism" },
          { name: "AI & ML Concepts", status: "Academic Focus", level: "Introductory Paradigms" }
        ]
      }
    ]
  },

  projects: {
    categories: ["All", "Web Development", "Applications", "Tools & Experiments"],
    items: [
      {
        id: "portfolio-website",
        title: "Personal Portfolio Website",
        category: "Web Development",
        isPlaceholder: false,
        featured: true,
        tag: "Real & Live",
        shortDescription: "A modern, high-performance personal portfolio engineered with dark-mode glassmorphism, responsive architecture, and dynamic data binding.",
        fullDescription: "Built from scratch to establish a sleek digital footprint for recruiters and peers. Features interactive canvas particle lighting, dynamic typing rotation, category-based project filtering, printable resume preview, and an accessible contact form with fallback resilience.",
        techStack: ["HTML5", "Tailwind CSS", "JavaScript ES6+", "Lucide Icons", "Glassmorphism"],
        githubUrl: "https://github.com/divyanshu26bcon1861-cmd",
        liveDemoUrl: "#home",
        previewImage: "portfolio",
        highlights: [
          "100% responsive across mobile, tablet, and ultra-wide screens",
          "Zero build dependencies needed — runs immediately in any browser",
          "Single-source data file for effortless updates to bio, skills, and links"
        ]
      },
      {
        id: "student-task-manager",
        title: "Student Task & Study Manager",
        category: "Applications",
        isPlaceholder: true,
        featured: true,
        tag: "Editable Sample",
        shortDescription: "[Editable Example Project] A productivity dashboard designed for college students to track assignments, semester deadlines, and daily study sprints.",
        fullDescription: "Designed to help undergraduate students conquer semester deadlines. Supports categorized assignment tagging, priority status badges, local storage persistence, and visual completion counters to maintain academic momentum.",
        techStack: ["JavaScript", "HTML5", "CSS3 / Tailwind", "LocalStorage API"],
        githubUrl: "https://github.com/divyanshu26bcon1861-cmd",
        liveDemoUrl: "",
        previewImage: "taskmanager",
        highlights: [
          "Deadline proximity countdown and priority filtering",
          "Persistent client-side storage without external database overhead",
          "Clean minimalist interface optimized for fast keyboard entry"
        ]
      },
      {
        id: "weather-dashboard",
        title: "Real-Time Weather Information Dashboard",
        category: "Web Development",
        isPlaceholder: true,
        featured: false,
        tag: "Editable Sample",
        shortDescription: "[Editable Example Project] An interactive weather monitoring app featuring real-time city forecasts, dynamic conditions, and responsive meteorological metrics.",
        fullDescription: "A hands-on API integration project fetching live atmospheric data. Displays temperature, humidity, wind velocity, and UV index with adaptive visual themes responding to weather condition states.",
        techStack: ["JavaScript", "OpenWeather API", "REST Fetch", "CSS Grid"],
        githubUrl: "https://github.com/divyanshu26bcon1861-cmd",
        liveDemoUrl: "",
        previewImage: "weather",
        highlights: [
          "Asynchronous REST API data fetching with debounced city search",
          "Dynamic SVG weather state icons reflecting cloudiness and precipitation",
          "Graceful offline and invalid city error state handling"
        ]
      },
      {
        id: "algorithm-visualizer",
        title: "Algorithm Visualizer & Playground",
        category: "Tools & Experiments",
        isPlaceholder: true,
        featured: false,
        tag: "Editable Sample",
        shortDescription: "[Editable Example Project] An educational tool visually animating sorting algorithms and search heuristics to reinforce foundational DSA intuition.",
        fullDescription: "An interactive computer science teaching experiment. Illustrates bubble sort, selection sort, and binary search step-by-step with adjustable execution speeds and comparison counters.",
        techStack: ["Python / JS", "Algorithms", "DSA Foundations", "Canvas"],
        githubUrl: "https://github.com/divyanshu26bcon1861-cmd",
        liveDemoUrl: "",
        previewImage: "algorithm",
        highlights: [
          "Step-by-step animation controls with pause, play, and speed slider",
          "Real-time visual comparison and swap counter",
          "Clear breakdown of Best, Average, and Worst case complexities"
        ]
      }
    ]
  },

  achievements: {
    emptyStateMessage: "Every expert starts as a beginner. This space will grow as I learn, build, and achieve more.",
    items: [
      {
        id: "milestone-jecrc",
        title: "Admitted to B.Tech CSE (AI & ML)",
        organization: "JECRC University, Jaipur",
        date: "2025",
        category: "Academic Milestone",
        badgeColor: "violet",
        isPlaceholder: false,
        description: "Enrolled in the B.Tech Computer Science and Engineering program with specialization in Artificial Intelligence & Machine Learning, embarking on a 4-year engineering journey.",
        credentialId: "",
        verificationUrl: ""
      },
      {
        id: "placeholder-cert",
        title: "[Editable] Programming Foundations & Problem Solving",
        organization: "[Issuing Platform - e.g., HackerRank / Coursera / NPTEL]",
        date: "Target: 2025",
        category: "Certification Placeholder",
        badgeColor: "cyan",
        isPlaceholder: true,
        description: "Placeholder entry for upcoming certifications in Data Structures, Object-Oriented Programming, and algorithmic problem-solving.",
        credentialId: "[ADD_YOUR_CREDENTIAL_ID]",
        verificationUrl: ""
      },
      {
        id: "placeholder-hackathon",
        title: "[Editable] University Hackathon / Code Sprint Participation",
        organization: "[Hackathon / Coding Event Name]",
        date: "Upcoming Milestone",
        category: "Hackathon Placeholder",
        badgeColor: "emerald",
        isPlaceholder: true,
        description: "Placeholder entry for upcoming campus hackathons, open-source sprints, and coding challenges.",
        credentialId: "[ADD_EVENT_DETAILS]",
        verificationUrl: ""
      }
    ]
  },

  socialPresence: {
    github: {
      url: "https://github.com/divyanshu26bcon1861-cmd",
      username: "divyanshu26bcon1861-cmd",
      cta: "Explore My Repositories",
      description: "Follow my open-source exploration, learning commits, and software repositories on GitHub."
    },
    linkedin: {
      url: "https://www.linkedin.com/in/divyanshu-jain-placeholder",
      isPlaceholder: true,
      cta: "Connect on LinkedIn",
      description: "Connect with me to talk about software engineering, student collaborations, and tech opportunities."
    },
    email: {
      address: "divyanshujaindj777@gmail.com",
      cta: "Copy Email Address",
      description: "Feel free to reach out directly for collaborations, questions, or informal tech conversations."
    }
  },

  contact: {
    heading: "Have an Idea? Let's Talk.",
    subheading: "I'm always interested in learning from others, exploring new ideas, and collaborating on meaningful projects. Feel free to reach out.",
    email: "divyanshujaindj777@gmail.com",
    location: "Jaipur, Rajasthan, India",
    availabilityText: "Available for internships, mentorship & peer collaborations",
    // To enable direct form forwarding without opening mail client,
    // paste your free Web3Forms access key (from web3forms.com) or Formspree key here:
    web3formsAccessKey: "", // Left empty by default; form gracefully uses mailto and honest instructions
    fields: {
      namePlaceholder: "Your Full Name (e.g. Alex Rivera)",
      emailPlaceholder: "Your Email Address (e.g. alex@example.com)",
      subjectPlaceholder: "Subject (e.g. Project Collaboration / Internship Inquiry)",
      messagePlaceholder: "Write your message here..."
    }
  }
};

// Export for module usage and attach to window for static browser usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
