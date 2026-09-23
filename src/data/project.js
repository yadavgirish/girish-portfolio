const projects = [
  {
    number: "01",
    slug: "max-arena",
    title: "MAX ARENA",

    shortDescription:
      "A production-style full-stack fitness platform with authentication, memberships, program discovery, contact management, and a dedicated admin dashboard.",

    description:
      "MAX ARENA is a full-stack fitness platform built with React, Node.js, Express, and MongoDB. It includes user authentication, membership and joining flows, program and trainer discovery, contact enquiries, protected routes, and a dedicated admin dashboard for managing users and enquiries.",

    image: "/images/Project1.png",

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST API",
      "Vercel",
    ],

    features: [
      "User registration and authentication",
      "Protected user routes",
      "Membership plan selection",
      "Program and trainer discovery",
      "Join and free-trial flows",
      "Contact enquiry system",
      "Dedicated admin dashboard",
      "User and contact management",
      "Contact status management",
      "Admin authentication and protected routes",
      "REST API integration",
      "Production deployment",
    ],

    github: "https://github.com/yadavgirish/max-arena-frontend",
    live: "https://max-arena-frontend.vercel.app",
  },

  {
    number: "02",
    slug: "whatsapp-clone",
    title: "WhatsApp Clone",

    shortDescription:
      "A real-time messaging application focused on private conversations, authentication, and live communication.",

    description:
      "A real-time messaging application designed around private conversations, authentication and live communication using Socket.IO.",

    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80",

    technologies: [
      "React",
      "Node.js",
      "Socket.IO",
      "MongoDB",
      "Express",
      "JWT",
    ],

    features: [
      "User authentication",
      "Private messaging",
      "Real-time communication",
      "Online communication events",
      "Protected API routes",
      "MongoDB data storage",
    ],

    github: "#",
    live: "#",
  },

  {
    number: "03",
    slug: "fake-news-detection",
    title: "Fake News Detection",

    shortDescription:
      "A machine-learning based application that analyzes news content and predicts whether it is likely to be real or fake.",

    description:
      "A machine-learning based application that uses natural language processing and classification techniques to analyze news content and predict whether it is likely to be real or fake.",

    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",

    technologies: ["Python", "NLP", "TF-IDF", "Naive Bayes", "SVM", "Flask"],

    features: [
      "News text processing",
      "NLP pipeline",
      "TF-IDF feature extraction",
      "Naive Bayes classification",
      "SVM classification",
      "Flask API",
    ],

    github: "#",
    live: "#",
  },
];

export default projects;
