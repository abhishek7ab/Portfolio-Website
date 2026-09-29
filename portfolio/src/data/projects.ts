export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  techStack: string[];
  github: string;
  liveDemo?: string;
  category: string[];
  timeline: string;
  featured: boolean;
  image?: string;
  impact?: {
    metric: string;
    value: string;
    description?: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "multimodal-deepfake-detection",
    title: "Multimodal Deepfake Detection System",
    subtitle: "AI Forensics across Image, Audio & Video Modalities",
    description:
      "End-to-end deepfake detection and synthetic media forensics platform featuring a unified FastAPI backend, interactive Streamlit frontend, and deep learning classification across images, audio, and video.",
    longDescription:
      "Engineered a production-ready multimodal deepfake detection system capable of classifying digital media as REAL or FAKE with calibrated confidence scores. Built with a unified FastAPI REST service (/image/predict, /audio/predict, /video/predict), an interactive Streamlit forensic analysis web app, EfficientNet/CNN image models, MFCC audio feature extraction, and video frame-sampling ensembles.",
    highlights: [
      "Unified FastAPI REST API providing /image/predict, /audio/predict, and /video/predict endpoints with Swagger documentation",
      "Interactive Streamlit web application deployed live for real-time media upload and deepfake forensic analysis",
      "Deep learning classification powered by EfficientNet & CNN architectures with probability & confidence metrics",
      "Audio forensics using MFCC & log-mel feature extraction; video forensics with temporal frame-level ensemble inference",
      "Robust model fallback mechanisms supporting legacy and modern Keras formats"
    ],
    techStack: ["Python", "FastAPI", "Streamlit", "TensorFlow", "Keras", "OpenCV", "Librosa", "REST APIs"],
    github: "https://github.com/abhishek7ab/Multimodal_Deepfake_Detection",
    liveDemo: "https://multimodaldeepfakedetection-fwyv3uecaawyswbwcais8c.streamlit.app/",
    category: ["AI & ML", "Web App"],
    timeline: "2025",
    featured: true,
    image: "/images/project-deepfake.jpg",
    impact: [
      { metric: "Modalities", value: "Image, Audio, Video", description: "Comprehensive 3-way forensic classification" },
      { metric: "Live Deployment", value: "Streamlit Cloud", description: "Publicly accessible interactive forensics app" },
      { metric: "Architecture", value: "FastAPI + Streamlit", description: "Microservices backend with interactive UI" }
    ],
  },
  {
    id: "giving-tree",
    title: "Giving Tree — Charity Marketplace Platform",
    subtitle: "Connecting Donors with People in Need",
    description:
      "Full-stack charity marketplace platform independently designed and developed end-to-end, featuring a modular Node.js/PostgreSQL backend and verified authentication.",
    longDescription:
      "A complete charity marketplace connecting community donors directly with recipients. Features a modular Node.js backend (server.js, itemModel.js, reqModel.js, authRoute.js, itemRoute.js, reqRoute.js) backed by PostgreSQL, secure email verification login, and location-based coordination planning.",
    highlights: [
      "Modular Node.js REST API with dedicated models for items, requests, and auth",
      "PostgreSQL relational database persistence for transactions & items",
      "Secure user authentication with login ID and email verification",
      "Location-based map coordination planned for donor-recipient matching"
    ],
    techStack: ["JavaScript", "Node.js", "PostgreSQL", "HTML", "CSS", "REST APIs"],
    github: "https://github.com/abhishek7ab/giving-tree-project",
    liveDemo: "https://giving-tree-project.vercel.app/",
    category: ["Full Stack", "Web App", "Social Impact"],
    timeline: "2025",
    featured: true,
    image: "/images/project-webapp.jpg",
    impact: [
      { metric: "Database", value: "PostgreSQL", description: "Relational persistence for transactions" },
      { metric: "Authentication", value: "Email Verified", description: "Secure user verification system" }
    ],
  },
  {
    id: "smart-nutrition-assistant",
    title: "Smart Nutrition Assistant",
    subtitle: "AI-Powered Personalized Nutrition Guidance",
    description:
      "Full-stack nutrition recommendation assistant featuring a React front end, Node.js backend, and Python core recommendation engine integrated with IBM Watson APIs.",
    longDescription:
      "Built a full-stack nutrition assistant that leverages IBM Watson APIs to deliver intelligent, personalized dietary recommendations based on user input. Uses Python for complex core recommendation logic and Node.js for backend API orchestration.",
    highlights: [
      "Integrated IBM Watson APIs for intelligent, personalized nutrition guidance",
      "Full-stack architecture with React front end and Node.js backend",
      "Python core recommendation logic tailored to user metrics & dietary needs",
      "Fast production bundling powered by Parcel"
    ],
    techStack: ["Python", "React", "Node.js", "IBM Watson", "REST APIs", "Parcel", "Java (JDK)"],
    github: "https://github.com/abhishek7ab/Smart-Nutrition-Assistant",
    liveDemo: "",
    category: ["AI & ML", "Full Stack", "Web App"],
    timeline: "2025",
    featured: true,
    image: "/images/project-ai.jpg",
    impact: [
      { metric: "API Integration", value: "IBM Watson", description: "Advanced NLP for personalized recommendations" },
      { metric: "Architecture", value: "Full-Stack", description: "React + Node.js + Python" }
    ],
  },
  {
    id: "laundry-management",
    title: "Laundry Management System",
    subtitle: "Streamlining Laundry Operations",
    description:
      "Web-based application streamlining laundry service scheduling and order tracking. Achieved a 30% increase in operational efficiency and user satisfaction.",
    longDescription:
      "Designed and developed a complete laundry service application allowing users to schedule pickups, track order status in real time, and manage service requests seamlessly.",
    highlights: [
      "Streamlined pickup scheduling & order tracking workflow",
      "Lead developer managing full-stack application lifecycle",
      "30% operational efficiency improvement based on user feedback"
    ],
    techStack: ["Python", "JavaScript", "HTML", "CSS", "SQL"],
    github: "https://github.com/abhishek7ab",
    liveDemo: "",
    category: ["Web App", "Full Stack"],
    timeline: "2024",
    featured: false,
    image: "/images/project-cloud.jpg",
    impact: [
      { metric: "Efficiency", value: "+30%", description: "Operational improvement" },
      { metric: "Type", value: "Full-Stack", description: "End-to-end application" }
    ],
  },
];
