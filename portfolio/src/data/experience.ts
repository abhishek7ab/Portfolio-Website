export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Internship" | "Industrial Training" | "Full-time" | "Contract";
  credentialId?: string;
  certificateUrl?: string;
  companyUrl?: string;
  description: string;
  highlights: string[];
  skills: string[];
  color: string;
  badge?: string;
}

export const experiences: Experience[] = [
  {
    id: "cognifyz-internship",
    role: "Software Development Intern",
    company: "Cognifyz Technologies",
    location: "Nagpur, Maharashtra, India (Remote)",
    period: "March 2026 – April 2026",
    type: "Internship",
    credentialId: "CTI/A1/C325710",
    certificateUrl: "/certs/cognifyz-intern.pdf",
    companyUrl: "https://www.cognifyz.com",
    badge: "Featured Internship",
    color: "#6366f1",
    description:
      "Served as a Software Development Intern contributing to real-world software engineering tasks, web application features, and backend logic while maintaining high code quality and software standards.",
    highlights: [
      "Assisted in full-stack software development workflows, implementing user-centric features and modular application components.",
      "Recognized for strong coordination abilities, effective communication, and exceptional attention to detail across assigned technical milestones.",
      "Solved practical algorithmic and engineering challenges, continuously acquiring and implementing modern software development practices.",
      "Collaborated in team environments following agile methodologies, version control (Git), and structured code reviews."
    ],
    skills: [
      "Software Development",
      "Full-Stack Engineering",
      "Python",
      "JavaScript",
      "Problem Solving",
      "Git & GitHub",
      "Agile Collaboration"
    ]
  },
  {
    id: "kasnet-industrial-training",
    role: "Industrial Trainee (MSBTE I-Scheme)",
    company: "KasNet Technologies Pvt. Ltd",
    location: "Pune, Maharashtra, India",
    period: "June 2022 – August 2022",
    type: "Industrial Training",
    credentialId: "U72900PN2014PTC15149",
    certificateUrl: "/certs/kasnet-industrial.pdf",
    companyUrl: "https://www.kasnettechnologies.com",
    badge: "MSBTE Certified",
    color: "#8b5cf6",
    description:
      "Completed an intensive 6-week MSBTE I-Scheme industrial training program during diploma studies at MIT Polytechnic, Pune, gaining direct exposure to practical software engineering and industry workflows.",
    highlights: [
      "Underwent rigorous 6-week industry-oriented technical training adhering to MSBTE I-Scheme curriculum standards.",
      "Gained hands-on exposure to practical software development workflows, system requirements, and industrial computing environments.",
      "Developed technical documentation, system specifications, and strengthened core object-oriented software logic.",
      "Applied computer engineering fundamentals from academic curriculum to practical corporate technological scenarios."
    ],
    skills: [
      "Industrial Workflows",
      "Software Engineering Fundamentals",
      "System Architecture",
      "Technical Documentation",
      "Object-Oriented Programming"
    ]
  }
];
