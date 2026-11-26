export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  date: string;
  category: string;
}

export const achievements: Achievement[] = [
  {
    id: "hackathon-5th",
    title: "College-Level Hackathon — Ranked 5th",
    description:
      "Participated in a college-level Hackathon at B.Tech Vishwakarma University and achieved 5th rank (team) out of overall college participants.",
    icon: "FaTrophy",
    color: "#f59e0b",
    date: "2025",
    category: "Hackathon / Competition",
  },
  {
    id: "sports-cohead",
    title: "Co-Head, Sports Activity Committee",
    description:
      "Served as Co-Head of the Sports Activity Committee during Diploma at MIT Pune, leading student coordination, event organization, and sports administration.",
    icon: "FaUsers",
    color: "#3b82f6",
    date: "2023 – 2024",
    category: "Leadership & Extra-Curricular",
  },
  {
    id: "debate-competition",
    title: "College-Level Debate Competition",
    description:
      "Represented and participated in the college-level Debate Competition during B.Tech at Vishwakarma University, demonstrating strong public communication and analytical skills.",
    icon: "FaComments",
    color: "#8b5cf6",
    date: "2024",
    category: "Extracurricular",
  },
  {
    id: "hackerrank-java",
    title: "HackerRank 5-Star Java Rating",
    description:
      "Achieved a 5-Star rating in Java on HackerRank by demonstrating strong proficiency in problem solving, algorithms, and data structures.",
    icon: "FaStar",
    color: "#10b981",
    date: "2025",
    category: "Coding Platform",
  },
];
