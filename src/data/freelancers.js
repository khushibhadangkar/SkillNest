export const freelancers = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Full-Stack Developer",
    avatar: null,
    initials: "AM",
    location: "San Francisco, CA",
    rating: 4.9,
    reviews: 47,
    hourlyRate: 45,
    skills: ["React", "Node.js", "TypeScript", "MongoDB"],
    bio: "CS senior at Stanford with 3+ years of freelance experience building scalable web applications. Passionate about clean architecture and performance optimization.",
    availability: "Available",
    completedProjects: 52,
    portfolio: [
      { title: "E-Commerce Platform", description: "Built a full-stack marketplace with real-time inventory management", tech: ["React", "Node.js", "PostgreSQL"] },
      { title: "SaaS Dashboard", description: "Analytics dashboard with real-time data visualization", tech: ["Next.js", "D3.js", "Tailwind"] },
      { title: "Social Media App", description: "Cross-platform social app with real-time messaging", tech: ["React Native", "Firebase", "Redux"] }
    ],
    projectHistory: [
      { title: "Startup MVP Development", client: "TechVenture Inc", duration: "3 months", status: "Completed" },
      { title: "API Integration Suite", client: "DataFlow Systems", duration: "6 weeks", status: "Completed" },
      { title: "Mobile App Backend", client: "AppFirst", duration: "2 months", status: "Completed" }
    ],
    clientReviews: [
      { name: "Sarah Chen", company: "TechVenture", rating: 5, comment: "Arjun delivered exceptional work on our MVP. His code quality and communication were outstanding.", date: "2024-11-15" },
      { name: "Mike Ross", company: "DataFlow", rating: 5, comment: "Incredibly talented developer. Completed the project ahead of schedule with zero bugs.", date: "2024-10-02" }
    ]
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "UI/UX Designer",
    avatar: null,
    initials: "PS",
    location: "New York, NY",
    rating: 5.0,
    reviews: 63,
    hourlyRate: 55,
    skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
    bio: "Award-winning design student at Parsons with a passion for creating intuitive and beautiful digital experiences. Specialized in SaaS and mobile app design.",
    availability: "Available",
    completedProjects: 71,
    portfolio: [
      { title: "FinTech App Redesign", description: "Complete redesign resulting in 40% increase in user engagement", tech: ["Figma", "Principle", "User Testing"] },
      { title: "Health & Wellness Platform", description: "End-to-end design for a wellness tracking application", tech: ["Figma", "Framer", "Design System"] },
      { title: "EdTech Dashboard", description: "Student analytics dashboard with accessibility-first approach", tech: ["Figma", "Adobe XD", "Miro"] }
    ],
    projectHistory: [
      { title: "Product Design - Health App", client: "WellnessLab", duration: "4 months", status: "Completed" },
      { title: "Design System Creation", client: "ScaleUp Co", duration: "2 months", status: "Completed" }
    ],
    clientReviews: [
      { name: "David Kim", company: "WellnessLab", rating: 5, comment: "Priya's design sense is incredible. She transformed our product's entire user experience.", date: "2024-12-01" },
      { name: "Lisa Wang", company: "ScaleUp", rating: 5, comment: "Best designer I've worked with. Her attention to detail is unmatched.", date: "2024-09-20" }
    ]
  },
  {
    id: 3,
    name: "James Wilson",
    role: "AI/ML Engineer",
    avatar: null,
    initials: "JW",
    location: "Boston, MA",
    rating: 4.8,
    reviews: 31,
    hourlyRate: 65,
    skills: ["Python", "TensorFlow", "NLP", "Computer Vision"],
    bio: "PhD candidate at MIT working on cutting-edge AI research. Specialized in NLP and computer vision applications for startups.",
    availability: "Limited",
    completedProjects: 34,
    portfolio: [
      { title: "AI Chatbot Platform", description: "Built an intelligent chatbot with 95% accuracy in intent recognition", tech: ["Python", "BERT", "FastAPI"] },
      { title: "Image Recognition System", description: "Real-time object detection for retail analytics", tech: ["PyTorch", "OpenCV", "AWS"] },
      { title: "Recommendation Engine", description: "Personalized content recommendation system for a media company", tech: ["TensorFlow", "Spark", "Redis"] }
    ],
    projectHistory: [
      { title: "NLP Model Development", client: "ChatGenius", duration: "5 months", status: "Completed" },
      { title: "Computer Vision Pipeline", client: "RetailAI", duration: "3 months", status: "Completed" }
    ],
    clientReviews: [
      { name: "Tom Bradley", company: "ChatGenius", rating: 5, comment: "James built an AI solution that exceeded all our expectations. Brilliant engineer.", date: "2024-11-28" }
    ]
  },
  {
    id: 4,
    name: "Sofia Rodriguez",
    role: "Graphic Designer",
    avatar: null,
    initials: "SR",
    location: "Los Angeles, CA",
    rating: 4.9,
    reviews: 89,
    hourlyRate: 40,
    skills: ["Illustrator", "Photoshop", "Branding", "Motion Design"],
    bio: "Creative design student at ArtCenter with a distinctive visual style. Specialized in brand identity, illustration, and motion graphics.",
    availability: "Available",
    completedProjects: 95,
    portfolio: [
      { title: "Brand Identity - TechStart", description: "Complete brand system including logo, typography, and guidelines", tech: ["Illustrator", "Photoshop", "InDesign"] },
      { title: "Social Media Campaign", description: "Visual campaign that increased engagement by 200%", tech: ["Photoshop", "After Effects", "Canva"] },
      { title: "Product Packaging Design", description: "Eco-friendly packaging design for a D2C brand", tech: ["Illustrator", "Dimension", "Photoshop"] }
    ],
    projectHistory: [
      { title: "Brand Identity Project", client: "TechStart", duration: "6 weeks", status: "Completed" },
      { title: "Marketing Collateral", client: "GreenLeaf", duration: "1 month", status: "Completed" }
    ],
    clientReviews: [
      { name: "Alex Turner", company: "TechStart", rating: 5, comment: "Sofia created a brand identity that perfectly captures our vision. Exceptional talent!", date: "2024-10-15" }
    ]
  },
  {
    id: 5,
    name: "Ryan Park",
    role: "Video Editor",
    avatar: null,
    initials: "RP",
    location: "Austin, TX",
    rating: 4.7,
    reviews: 42,
    hourlyRate: 35,
    skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics"],
    bio: "Film school graduate and YouTube creator with 100K+ subscribers. Expert in cinematic editing, color grading, and motion graphics.",
    availability: "Available",
    completedProjects: 48,
    portfolio: [
      { title: "Startup Promo Video", description: "60-second cinematic brand video that went viral", tech: ["Premiere Pro", "After Effects", "Cinema 4D"] },
      { title: "Course Content Series", description: "20-episode educational series with animations", tech: ["DaVinci Resolve", "After Effects", "Illustrator"] },
      { title: "Product Launch Campaign", description: "Multi-platform video campaign for product launch", tech: ["Premiere Pro", "After Effects", "Photoshop"] }
    ],
    projectHistory: [
      { title: "Brand Video Production", client: "LaunchPad", duration: "3 weeks", status: "Completed" },
      { title: "YouTube Series Editing", client: "EduChannel", duration: "3 months", status: "Completed" }
    ],
    clientReviews: [
      { name: "Jenny Liu", company: "LaunchPad", rating: 5, comment: "Ryan's editing brought our brand story to life. The quality was cinema-grade.", date: "2024-11-10" }
    ]
  },
  {
    id: 6,
    name: "Emma Thompson",
    role: "Content Writer",
    avatar: null,
    initials: "ET",
    location: "Chicago, IL",
    rating: 4.9,
    reviews: 56,
    hourlyRate: 30,
    skills: ["SEO Writing", "Blog Posts", "Copywriting", "Technical Writing"],
    bio: "English & Marketing double major with published work in TechCrunch and Forbes. Specialized in SaaS content strategy and SEO-driven blog posts.",
    availability: "Available",
    completedProjects: 62,
    portfolio: [
      { title: "SaaS Blog Strategy", description: "Content strategy that increased organic traffic by 300%", tech: ["SEO", "WordPress", "Ahrefs"] },
      { title: "Technical Documentation", description: "API documentation for a developer tools company", tech: ["Markdown", "GitBook", "Swagger"] },
      { title: "Email Marketing Campaign", description: "Drip campaign with 45% open rate and 12% conversion", tech: ["Mailchimp", "Copywriting", "A/B Testing"] }
    ],
    projectHistory: [
      { title: "Content Strategy", client: "SaaSFlow", duration: "6 months", status: "Completed" },
      { title: "Technical Documentation", client: "DevTools Inc", duration: "2 months", status: "Completed" }
    ],
    clientReviews: [
      { name: "Mark Johnson", company: "SaaSFlow", rating: 5, comment: "Emma's content strategy completely transformed our organic presence. Incredible ROI.", date: "2024-12-05" }
    ]
  },
  {
    id: 7,
    name: "Daniel Kim",
    role: "Digital Marketing Specialist",
    avatar: null,
    initials: "DK",
    location: "Seattle, WA",
    rating: 4.8,
    reviews: 38,
    hourlyRate: 50,
    skills: ["Google Ads", "Meta Ads", "Analytics", "Growth Hacking"],
    bio: "Marketing student turned growth hacker. Managed $500K+ in ad spend across multiple startups. Data-driven approach to scaling businesses.",
    availability: "Available",
    completedProjects: 41,
    portfolio: [
      { title: "D2C Growth Campaign", description: "Scaled revenue from $50K to $500K in 6 months", tech: ["Google Ads", "Meta Ads", "TikTok Ads"] },
      { title: "SaaS Lead Generation", description: "Built a lead gen funnel producing 1000+ MQLs monthly", tech: ["HubSpot", "LinkedIn Ads", "Landing Pages"] },
      { title: "App Install Campaign", description: "Achieved 100K installs at $0.30 CPI", tech: ["Apple Search Ads", "Google UAC", "Analytics"] }
    ],
    projectHistory: [
      { title: "Growth Marketing", client: "ShopDirect", duration: "6 months", status: "Completed" },
      { title: "Performance Marketing", client: "AppLaunch", duration: "4 months", status: "Completed" }
    ],
    clientReviews: [
      { name: "Rachel Green", company: "ShopDirect", rating: 5, comment: "Daniel's marketing expertise 10x'd our revenue. His analytical approach is unmatched.", date: "2024-11-22" }
    ]
  },
  {
    id: 8,
    name: "Aisha Patel",
    role: "Mobile App Developer",
    avatar: null,
    initials: "AP",
    location: "Denver, CO",
    rating: 4.9,
    reviews: 29,
    hourlyRate: 55,
    skills: ["React Native", "Flutter", "Swift", "Kotlin"],
    bio: "Computer Science student at CU Boulder building cross-platform mobile experiences. Published 5 apps on both App Store and Google Play.",
    availability: "Available",
    completedProjects: 33,
    portfolio: [
      { title: "Fitness Tracking App", description: "Cross-platform fitness app with 50K+ downloads", tech: ["React Native", "Firebase", "HealthKit"] },
      { title: "Food Delivery App", description: "Full-featured delivery app with real-time tracking", tech: ["Flutter", "Google Maps", "Stripe"] },
      { title: "Social Networking App", description: "Niche social app with real-time messaging and stories", tech: ["React Native", "Socket.io", "AWS"] }
    ],
    projectHistory: [
      { title: "iOS App Development", client: "FitLife", duration: "4 months", status: "Completed" },
      { title: "Cross-Platform App", client: "FoodDash", duration: "5 months", status: "Completed" }
    ],
    clientReviews: [
      { name: "Chris Martin", company: "FitLife", rating: 5, comment: "Aisha built a beautiful, performant app that our users love. Highly skilled developer.", date: "2024-10-30" }
    ]
  },
  {
    id: 9,
    name: "Lucas Chen",
    role: "Backend Developer",
    avatar: null,
    initials: "LC",
    location: "Portland, OR",
    rating: 4.7,
    reviews: 35,
    hourlyRate: 50,
    skills: ["Go", "AWS", "Docker", "PostgreSQL"],
    bio: "Systems engineering student with a focus on distributed systems and cloud architecture. Built backend services handling millions of requests.",
    availability: "Limited",
    completedProjects: 38,
    portfolio: [
      { title: "Microservices Platform", description: "Event-driven microservices architecture for fintech", tech: ["Go", "Kafka", "Kubernetes"] },
      { title: "Real-time API", description: "High-throughput API handling 10K+ requests/second", tech: ["Go", "Redis", "PostgreSQL"] },
      { title: "Cloud Infrastructure", description: "Automated CI/CD pipeline with 99.9% uptime", tech: ["AWS", "Terraform", "Docker"] }
    ],
    projectHistory: [
      { title: "Backend Architecture", client: "FinTechPro", duration: "6 months", status: "Completed" },
      { title: "API Development", client: "DataStream", duration: "3 months", status: "Completed" }
    ],
    clientReviews: [
      { name: "Anna Williams", company: "FinTechPro", rating: 5, comment: "Lucas architected a rock-solid backend that scales effortlessly. Top-tier engineering.", date: "2024-09-15" }
    ]
  },
  {
    id: 10,
    name: "Maya Johnson",
    role: "Data Scientist",
    avatar: null,
    initials: "MJ",
    location: "Atlanta, GA",
    rating: 4.8,
    reviews: 22,
    hourlyRate: 60,
    skills: ["Python", "R", "SQL", "Machine Learning"],
    bio: "Data science master's student at Georgia Tech. Passionate about turning complex data into actionable business insights.",
    availability: "Available",
    completedProjects: 25,
    portfolio: [
      { title: "Customer Churn Prediction", description: "ML model reducing churn by 25% for a SaaS company", tech: ["Python", "Scikit-learn", "Pandas"] },
      { title: "Revenue Forecasting", description: "Time series forecasting with 92% accuracy", tech: ["Python", "Prophet", "Tableau"] },
      { title: "A/B Testing Framework", description: "Statistical testing framework for product experiments", tech: ["Python", "R", "BigQuery"] }
    ],
    projectHistory: [
      { title: "Predictive Analytics", client: "RetentionAI", duration: "4 months", status: "Completed" },
      { title: "Data Pipeline", client: "InsightHub", duration: "2 months", status: "Completed" }
    ],
    clientReviews: [
      { name: "Steve Roberts", company: "RetentionAI", rating: 5, comment: "Maya's analysis directly impacted our bottom line. Her insights were invaluable.", date: "2024-11-05" }
    ]
  },
  {
    id: 11,
    name: "Noah Williams",
    role: "DevOps Engineer",
    avatar: null,
    initials: "NW",
    location: "Miami, FL",
    rating: 4.6,
    reviews: 19,
    hourlyRate: 55,
    skills: ["Kubernetes", "Terraform", "CI/CD", "AWS"],
    bio: "Infrastructure enthusiast building reliable, scalable systems. Certified AWS Solutions Architect with expertise in container orchestration.",
    availability: "Available",
    completedProjects: 22,
    portfolio: [
      { title: "K8s Migration", description: "Migrated monolith to Kubernetes reducing costs by 40%", tech: ["Kubernetes", "Docker", "Helm"] },
      { title: "CI/CD Pipeline", description: "Zero-downtime deployment pipeline with automated testing", tech: ["GitHub Actions", "ArgoCD", "Terraform"] },
      { title: "Monitoring Stack", description: "Comprehensive observability platform for microservices", tech: ["Prometheus", "Grafana", "ELK"] }
    ],
    projectHistory: [
      { title: "Cloud Migration", client: "CloudFirst", duration: "5 months", status: "Completed" },
      { title: "DevOps Setup", client: "StartupXYZ", duration: "2 months", status: "Completed" }
    ],
    clientReviews: [
      { name: "Paul Davis", company: "CloudFirst", rating: 5, comment: "Noah transformed our infrastructure. Deployments went from hours to minutes.", date: "2024-10-20" }
    ]
  },
  {
    id: 12,
    name: "Zara Ahmed",
    role: "UI/UX Designer",
    avatar: null,
    initials: "ZA",
    location: "Washington, DC",
    rating: 5.0,
    reviews: 44,
    hourlyRate: 50,
    skills: ["Figma", "User Research", "Design Systems", "Accessibility"],
    bio: "Human-centered design advocate studying at RISD. Focused on creating inclusive, accessible digital products that delight users.",
    availability: "Available",
    completedProjects: 49,
    portfolio: [
      { title: "Accessibility Audit & Redesign", description: "Made a fintech app WCAG 2.1 AA compliant", tech: ["Figma", "Axe", "Screen Readers"] },
      { title: "Design System", description: "Built a comprehensive design system with 200+ components", tech: ["Figma", "Storybook", "Tokens"] },
      { title: "Mobile Banking App", description: "End-to-end design for a neo-bank targeting Gen Z", tech: ["Figma", "Principle", "Maze"] }
    ],
    projectHistory: [
      { title: "Product Design", client: "NeoBank", duration: "5 months", status: "Completed" },
      { title: "Design System", client: "TechCorp", duration: "3 months", status: "Completed" }
    ],
    clientReviews: [
      { name: "Emily Zhang", company: "NeoBank", rating: 5, comment: "Zara's design work was phenomenal. She brought empathy and precision to every screen.", date: "2024-12-10" }
    ]
  }
];

export const getFreelancerById = (id) => freelancers.find(f => f.id === parseInt(id));
