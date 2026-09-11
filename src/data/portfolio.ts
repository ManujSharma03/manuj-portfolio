// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE with your real information. Everything the
// desktop, dock, windows, search, and AI assistant show comes
// from this single file — you shouldn't need to touch component
// code just to update your content.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Manuj',
  role: 'Data Science & AI/ML Enthusiast',
  tagline: 'Turning raw data into real impact',
  location: 'Gurugram, Haryana, India',
  email: 'manujsharma2004@gmail.com',
  avatarUrl: '/avatar.jpg', // put a square photo in /public/avatar.jpg
  bio: [
  "Hi👋🏻, I'm Manuj a results-driven Data Science and Analytics enthusiast who loves working with Python, Java, and SQL. I enjoy diving into statistical analysis, data wrangling, machine learning model development, and data visualization, turning complex datasets into actionable insights.",
  "I'm a fast learner and an innovative thinker with strong problem-solving skills, always excited to apply data science and AI/ML techniques to build predictive models and solve real, practical problems in a collaborative, growth-oriented environment.",
  ],
  links: {
    github: 'https://github.com/ManujSharma03',
    linkedin: 'https://www.linkedin.com/in/manujsharma03/',
    resumeUrl: '/resume.pdf', // put your resume PDF in /public/resume.pdf
  },
  skills: [
    'Java',
    'Python',
    'SQL',
    'HTML',
    'CSS',
    'C#',
    'Artificial Intelligence',
    'Machine Learning',
    'Generative AI',
    'Statistics',
    'EDA',
    'MongoDB',
    'Advance Excel', 
    'Tableau',
    'KNIME',
    'RESTful APIs',
    'Business Intelligence and Data Visualization', 
    'Big Data',
    'Database Management System',
    'Object-Oriented Programming',
    'Operating System',
    'Computer Networking',
    'SDLC',
    'Pandas',
    'Numpy',
    'Matplotlib',
    'Seaborn',
    'Git/GitHub',
    'Microsoft Azure'
    
  ],
  education: [
    {
      school: 'The NorthCap University',
      degree: 'B.Tech CSE specialization in Data Science',
      period: '2023 — 2027',
    },
    {
      school: 'Indian Institute of Technology, Madras',
      degree: 'Bachelor of Science - BS (Foundation)',
      period: '2023 — 2025',
    },
    {
      school: 'S.D. Adarsh Vidyalaya',
      degree: 'Higher Education',
      period: '2022 — 2023',
    },
  ],
}

export interface Project {
  id: string
  name: string
  category: string
  purpose: string
  stack: string[]
  status: 'Live' | 'In progress' | 'Archived'
  githubUrl?: string
  demoUrl?: string
  limitations?: string
}

export const projects: Project[] = [
  /*{
    id: 'project-one',
    name: 'Project One',
    category: 'Category (e.g. Web App)',
    purpose: 'One or two sentences on what this project does and why you built it.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    status: 'Live',
    githubUrl: 'https://github.com/your-username/project-one',
    demoUrl: 'https://project-one.example.com',
    limitations: 'Anything it doesn\'t do yet, stated plainly.',
  },*/
  
  {
  id: 'ai-text-to-image-generator',
  name: 'AI Text-to-Image Generator',
  category: 'Desktop App',
  purpose: 'A Windows Forms desktop app that converts text prompts into images using Runway ML\'s API. Built to explore AI-powered image generation with a simple interface, async API calls, image preview, and saving.',
  stack: ['C#', 'Windows Forms', 'Runway ML API'],
  status: 'Live',
  githubUrl: 'https://github.com/ManujSharma03/AI-Text-to-Image-Generator-using-C-Sharp-and-Runway-ML',
  },

  {
  id: 'invoice-reader',
  name: 'Invoice Reader',
  category: 'CLI Tool',
  purpose: 'A command-line tool that extracts text from scanned or digital PDF invoices using Tesseract OCR and Poppler, then saves the results as .txt files. Automates reading the first page of each invoice in a folder.',
  stack: ['Python', 'Tesseract OCR', 'Poppler', 'pdf2image', 'pytesseract'],
  status: 'Live',
  githubUrl: 'https://github.com/ManujSharma03/Invoice-Reader',
  limitations: 'Only processes the first page of each PDF, and requires Tesseract/Poppler to be installed separately.',
  },

  {
  id: 'hr-analytics-dashboard',
  name: 'HR Analytics Dashboard',
  category: 'Data Visualization',
  purpose: 'An interactive Tableau dashboard analyzing employee attrition across 1,470 records — covering department trends, gender and age breakdowns, job satisfaction ratings, and education field insights, all filterable in real time.',
  stack: ['Tableau', 'Data Analysis'],
  status: 'Live',
  githubUrl: 'https://github.com/ManujSharma03/HR-analytics-dashboard-tableau',
  demoUrl: 'https://public.tableau.com/views/HR_Analytics_Dashboard_17887190297350/HRANALYSTICSDASHBOARD?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  },

  {
  id: 'flipkart-review-analyzer',
  name: 'Flipkart Review Intelligence',
  category: 'AI / Data Dashboard',
  purpose: 'An interactive analytics dashboard that turns raw Flipkart product reviews into actionable insight using Azure AI Language for sentiment analysis and key-phrase extraction, visualized through live, filterable charts covering sentiment, ratings, and product feedback.',
  stack: ['HTML5', 'CSS3', 'JavaScript', 'Azure AI Language', 'Chart.js'],
  status: 'Live',
  githubUrl: 'https://github.com/ManujSharma03/flipkart-review-analyzer',
  demoUrl: 'https://flipkartreview2026abc.z7.web.core.windows.net/',
  },
  {
  id: 'reading-habits-dashboard',
  name: 'Reading Habits: A Data-Driven Story',
  category: 'Data Visualization',
  purpose: 'A 7-page interactive Tableau story exploring what, how, and why 2,831 people read — covering demographics, format preferences, acquisition methods, socioeconomic factors, and an executive drill-down dashboard for comparing reading habits across groups.',
  stack: ['Tableau', 'Data Analysis'],
  status: 'Live',
  githubUrl: 'https://github.com/ManujSharma03/reading-habits-dashboard-tableau',
  demoUrl: 'https://public.tableau.com/views/ReadingHabitsAnalysisDashboard/Story1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  },
  {
  id: 'sales-dashboard-excel',
  name: 'Sales Dashboard',
  category: 'Data Visualization',
  purpose: 'An interactive Excel dashboard analyzing 4 years (2014–2017) of retail sales data — category trends, state-wise sales via a heat map, top customers by profit, and monthly seasonality — built with PivotTables, PivotCharts, and slicers for real-time filtering by category and year.',
  stack: ['Excel', 'PivotTables', 'PivotCharts'],
  status: 'Live',
  githubUrl: 'https://github.com/ManujSharma03/sales-dashboard-excel',
  },

  {
  id: 'spotify-web-player-clone',
  name: 'Spotify Web Player UI Clone',
  category: 'Frontend Practice',
  purpose: 'A pixel-inspired recreation of Spotify\'s Web Player interface built with pure HTML and CSS — sidebar navigation, a responsive card grid for playlists/recommendations, and a sticky player bar. Built as a frontend practice project; not affiliated with Spotify.',
  stack: ['HTML5', 'CSS3'],
  status: 'Live',
  githubUrl: 'https://github.com/ManujSharma03/Spotify_Clone',
  limitations: 'Static UI only — playback, search, and navigation are visual, not functional yet (no JavaScript).',
  },
  {
  id: 'fifa-worldcup-dashboard',
  name: 'FIFA World Cup Dashboard',
  category: 'Data Visualization',
  purpose: 'An interactive Tableau dashboard exploring 90+ years of FIFA World Cup history (1930–2022) — attendance trends, tournament growth in teams and matches, goals scored over time, titles by country, and all-time top scorers.',
  stack: ['Tableau', 'Data Analysis'],
  status: 'Live',
  githubUrl: 'https://github.com/ManujSharma03/fifa-worldcup-dashboard-tableau',
  demoUrl: 'https://public.tableau.com/views/Fifa-WorldcupDashboard/FIFAWorldcupDashboard?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  }
]

export interface ExperienceItem {
  id: string
  title: string
  organization: string
  period: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  /*{
    id: 'exp-one',
    title: 'Your Job Title',
    organization: 'Company / Organization',
    period: 'Mon 20XX — Present',
    points: [
      'One concrete thing you did or shipped.',
      'Another concrete result, ideally with a number.',
    ],
  },
  */
 {
  id: 'publicis-resources-genai-intern',
  title: 'Generative AI Intern',
  organization: 'Publicis Re:Sources',
  period: 'Jun 2025 — Jul 2025',
  points: [
    'Designed and built a production-grade Generative AI application in C#, integrating the RunwayML REST API with asynchronous polling and robust exception handling to deliver reliable, real-time performance.',
    'Applied core CS fundamentals (OOP, data structures, DBMS) to structure clean, maintainable production-level code and efficient application logic.',
    'Built an OCR-based invoice text extraction tool in Python, automating the reading and summarization of large invoice batches and reducing manual document-processing effort.',
    'Guided fellow interns through the codebase and development workflows, supporting smoother onboarding, while giving regular project updates and incorporating technical feedback from mentors.',
  ],
  },
  {
  id: 'google-student-ambassador',
  title: 'Google Student Ambassador',
  organization: 'Google',
  period: 'May 2026 — Jul 2026',
  points: [
    'Explored and gained in-depth knowledge of new Google technologies and application features, applying them practically in academic projects and daily use.',
    'Participated in weekly progress meetings, sharing ideas and collaborating on decision-making to identify better solutions and improve program outcomes.',
    'Hosted online events and interactive activities for students, fostering interest in emerging technologies and driving active participation within the campus community.',
  ],
  },
  {
  id: 'unique-training-solutions-azure-intern',
  title: 'Intern, Microsoft Azure Fundamentals',
  organization: 'Unique Training Solutions (in partnership with Microsoft)',
  period: 'Jun 2026 — Jul 2026',
  points: [
    'Completed a 6-week Microsoft Azure Fundamentals internship, gaining hands-on experience with Azure cloud services and foundational knowledge of AI/ML/LLM concepts and Azure\'s AI offerings.',
    'Built a Product Review Analyzer using the Flipkart reviews dataset to perform sentiment analysis (positive/negative/neutral) on customer feedback across product categories.',
  ],
  },
  {
  id: 'india-space-lab-intern',
  title: 'Space Technology Intern',
  organization: 'India Space Lab',
  period: 'Jun 2026 — Jul 2026',
  points: [
    'Completed a Summer Internship & Technical Training Program with specialized modules in Advanced Drone Technology, CanSat and CubeSat Satellite Programs, Rocketry Science, Remote Sensing & GIS, and Disaster Management.',
  ],
  },
  {
  id: 'yukti-project-head',
  title: 'Project Head',
  organization: 'Yukti, The NorthCap University',
  period: '2024 — 2025',
  points: [
    'Proposed and executed college-wide social impact initiatives, coordinating cross-functional teams to ensure effective planning, organization, and timely execution.',
    'Managed project workflows and resources, driving successful outcomes and measurable community engagement.',
    'Led the planning and execution of motivational events, workshops, and awareness drives, reaching students and participants.',
    'Fostered a culture of teamwork, creativity, and proactive problem-solving within the club\'s project teams.',
  ],
  },

]

export interface Achievement {
  id: string
  title: string
  detail: string
  year: string
}

export const achievements: Achievement[] = [
  /*{ id: 'ach-one', title: 'Award or recognition', detail: 'Short context for it.', year: '20XX' }*/
  {
  id: 'iit-madras-bs-qualifier',
  title: 'Qualified for IIT Madras B.S. in Data Science and Applications',
  detail: 'Passed the qualifier exam and was admitted to the Foundation level of the B.S. Degree in Data Science and Applications, IIT Madras (pursued alongside main degree, later discontinued).',
  year: '2023',
  },
  {
  id: 'microsoft-azure-ai-fundamental',
  title: 'Microsoft Certified: Azure AI Fundamentals (AI-901)',
  detail: 'Passed the Microsoft AI-900 certification exam, validating foundational knowledge of AI and machine learning concepts on Microsoft Azure.',
  year: '2026',
},
  {
  id: 'smart-india-hackathon-2025',
  title: 'Selected for Smart India Hackathon 2025 (University Level)',
  detail: 'Our team was selected to participate in the university-level round of the Smart India Hackathon, held 16–19 September 2025 at The NorthCap University\'s Incubation Centre.',
  year: '2025',
  },
  {
  id: 'nptel-education-sustainable-development',
  title: 'NPTEL Elite — Education for Sustainable Development',
  detail: 'Earned Elite certification from IIT Kharagpur (NPTEL) with a 90% consolidated score across online assignments and a proctored exam, out of 7,423 candidates certified.',
  year: '2025',
  },
  {
  id: 'cisco-learn-a-thon-2025',
  title: 'Learner Achievement Award — Cisco Learn-A-Thon 2025',
  detail: 'Recognized by Cisco Networking Academy for exceptional learning achievement during the Learn-A-Thon 2025 program.',
  year: '2025',
  },
  {
  id: 'community-service-30-hours',
  title: 'Completed 30 Hours of Community Service',
  detail: 'Volunteered across NGO work, teaching underprivileged students, blood donation drives, environmental awareness campaigns, and Gaushala (cow shelter) volunteering.',
  year: '2025',
},
]

export interface Certification {
  id: string
  name: string
  issuer: string
  year: string
}

export const certifications: Certification[] = [
  /*{ id: 'cert-one', name: 'Certification Name', issuer: 'Issuing Platform', year: '20XX' },*/
  {
  id: 'oracle-agentic-ai-foundations-associate',
  name: 'Oracle Certified Foundations Associate — Agentic AI',
  issuer: 'Oracle University',
  year: '2026',
  },
  {
  id: 'microsoft-azure-ai-fundamentals',
  name: 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
  issuer: 'Microsoft',
  year: '2026',
  },
  
  {
  id: 'linkedin-career-skills-data-analytics',
  name: 'Introduction to Career Skills in Data Analytics',
  issuer: 'LinkedIn Learning',
  year: '2025',
  },
  {
  id: 'cisco-intro-cybersecurity',
  name: 'Introduction to Cybersecurity',
  issuer: 'Cisco Networking Academy',
  year: '2025',
  },
  {
  id: 'oracle-database-foundations',
  name: 'Database Foundations',
  issuer: 'Oracle Academy',
  year: '2025',
  },
  {
  id: 'mongodb-introduction',
  name: 'Introduction to MongoDB',
  issuer: 'MongoDB',
  year: '2025',
  },
  {
  id: 'google-cloud-intro-generative-ai',
  name: 'Introduction to Generative AI',
  issuer: 'Google Cloud',
  year: '2025',
  },
  {
  id: 'tcs-ion-master-data-management',
  name: 'Master Data Management for Beginners',
  issuer: 'TCS iON',
  year: '2025',
  },
  {
  id: 'aws-academy-cloud-foundations',
  name: 'AWS Academy Graduate - Cloud Foundations',
  issuer: 'AWS Academy',
  year: '2023',
  },
  
]

// Flattened text blob the AI assistant uses as its factual context.
// Keep it in sync with the structured data above.
export function buildAssistantContext(): string {
  return `
Name: ${profile.name}
Role: ${profile.role}
Location: ${profile.location}
Bio: ${profile.bio.join(' ')}
Skills: ${profile.skills.join(', ')}

Education:
${profile.education.map((e) => `- ${e.degree}, ${e.school} (${e.period})`).join('\n')}

Projects:
${projects
  .map(
    (p) =>
      `- ${p.name} (${p.category}, ${p.status}): ${p.purpose} Stack: ${p.stack.join(', ')}.`
  )
  .join('\n')}

Experience:
${experience
  .map((e) => `- ${e.title} at ${e.organization} (${e.period}): ${e.points.join(' ')}`)
  .join('\n')}

Achievements:
${achievements.map((a) => `- ${a.title} (${a.year}): ${a.detail}`).join('\n')}

Certifications:
${certifications.map((c) => `- ${c.name}, ${c.issuer} (${c.year})`).join('\n')}

Contact: ${profile.email}
`.trim()
}
