export interface Skill {
  name: string;
  icon: string;
  level: number;
  color: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Core Languages & Runtimes",
    icon: "FaCode",
    description: "Foundational programming languages & core syntax",
    skills: [
      { name: "Python", icon: "FaPython", level: 88, color: "#3776AB", tag: "Advanced" },
      { name: "TypeScript", icon: "SiTypescript", level: 85, color: "#3178C6", tag: "Primary" },
      { name: "JavaScript (ES6+)", icon: "SiJavascript", level: 90, color: "#F7DF1E", tag: "Primary" },
      { name: "C++", icon: "SiCplusplus", level: 78, color: "#00599C", tag: "DSA / Systems" },
      { name: "C", icon: "SiC", level: 75, color: "#A8B9CC", tag: "System Logic" },
      { name: "SQL", icon: "SiPostgresql", level: 82, color: "#4479A1", tag: "Databases" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend & Architecture",
    icon: "FaGlobe",
    description: "Modern UI frameworks, state management & design systems",
    skills: [
      { name: "React.js", icon: "SiReact", level: 90, color: "#61DAFB", tag: "Framework" },
      { name: "Next.js 14/15", icon: "SiNextdotjs", level: 86, color: "#000000", tag: "SSR & App Router" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", level: 92, color: "#06B6D4", tag: "Styling" },
      { name: "Framer Motion", icon: "SiFramer", level: 80, color: "#0055FF", tag: "Animations" },
      { name: "HTML5 / CSS3", icon: "SiHtml5", level: 95, color: "#E34F26", tag: "Standards" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Databases",
    icon: "FaServer",
    description: "Server architecture, API design & relational/NoSQL data persistence",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs", level: 84, color: "#339933", tag: "Runtime" },
      { name: "Express.js", icon: "SiExpress", level: 82, color: "#000000", tag: "REST APIs" },
      { name: "PostgreSQL", icon: "SiPostgresql", level: 80, color: "#4479A1", tag: "Relational DB" },
      { name: "MySQL", icon: "SiMysql", level: 82, color: "#00758F", tag: "Relational DB" },
      { name: "RESTful APIs", icon: "FaNetworkWired", level: 88, color: "#6366F1", tag: "API Design" },
    ],
  },
  {
    id: "ai-ml",
    label: "AI & Data Science Stack",
    icon: "FaBrain",
    description: "Applied Machine Learning, Data Analytics & Neural Networks",
    skills: [
      { name: "PyTorch", icon: "SiPytorch", level: 75, color: "#EE4C2C", tag: "Deep Learning" },
      { name: "Scikit-Learn", icon: "SiScikitlearn", level: 80, color: "#F7931E", tag: "ML Models" },
      { name: "Pandas & NumPy", icon: "SiPandas", level: 85, color: "#150458", tag: "Data Analysis" },
      { name: "OpenCV", icon: "SiOpencv", level: 72, color: "#5C3EE8", tag: "Computer Vision" },
    ],
  },
  {
    id: "devops-tools",
    label: "DevOps, Cloud & Tools",
    icon: "FaTools",
    description: "Version control, deployment pipelines & modern developer tooling",
    skills: [
      { name: "Git & GitHub", icon: "SiGit", level: 88, color: "#F05032", tag: "Version Control" },
      { name: "Docker", icon: "SiDocker", level: 70, color: "#2496ED", tag: "Containerization" },
      { name: "Linux / Bash", icon: "SiLinux", level: 78, color: "#FCC624", tag: "OS & Terminal" },
      { name: "Vercel", icon: "SiVercel", level: 88, color: "#000000", tag: "CI/CD Deployment" },
      { name: "VS Code", icon: "SiVscode", level: 92, color: "#007ACC", tag: "IDE Environment" },
    ],
  },
];
