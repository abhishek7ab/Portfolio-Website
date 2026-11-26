export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  description: string;
  highlights: string[];
  icon: string;
  color: string;
}

export const education: Education[] = [
  {
    id: "btech",
    degree: "B.Tech in Computer Science",
    field: "Computer Science and Engineering",
    institution: "Vishwakarma University",
    location: "Pune, Maharashtra",
    period: "2024 – 2027",
    grade: "Pursuing (Final Year)",
    description:
      "Final-year Computer Science and Engineering undergraduate pursuing B.Tech with strong focus on software development, full-stack application development, applied AI/ML, and cloud engineering.",
    highlights: [
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Cloud Computing",
      "Machine Learning",
    ],
    icon: "FaUniversity",
    color: "#2563eb",
  },
  {
    id: "diploma",
    degree: "Diploma in Computer Engineering",
    field: "Computer Engineering",
    institution: "MIT",
    location: "Pune, Maharashtra",
    period: "2021 – 2024",
    grade: "Completed (2021 – 2024)",
    description:
      "Completed a 3-year Diploma in Computer Engineering at MIT Pune, building strong core fundamentals in computer systems, programming, and software engineering.",
    highlights: [
      "Programming Fundamentals",
      "System Software",
      "Software Engineering",
      "Database Administration",
      "6-Week MSBTE Industrial Training (KasNet Technologies)",
    ],
    icon: "FaGraduationCap",
    color: "#7c3aed",
  },
];
