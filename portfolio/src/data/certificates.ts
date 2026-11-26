export interface Certificate {
  id: string;
  name: string;
  title?: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  verifyUrl?: string;
  skills?: string[];
  description?: string;
  color?: string;
}

export const certificates: Certificate[] = [
  {
    id: "cert-cognifyz",
    name: "Software Development Internship",
    title: "Software Development Internship",
    issuer: "Cognifyz Technologies",
    date: "April 2026",
    credentialId: "CTI/A1/C325710",
    link: "/certs/cognifyz-intern.pdf",
    verifyUrl: "/certs/cognifyz-intern.pdf",
    skills: ["Software Engineering", "Full-Stack Development", "Problem Solving", "Attention to Detail"],
    description: "Hands-on software development internship focusing on building real-world web applications, software architecture, and practical problem solving.",
    color: "#2563eb",
  },
  {
    id: "cert-kasnet",
    name: "6-Week Industrial Training (MSBTE I-Scheme)",
    title: "6-Week Industrial Training (MSBTE I-Scheme)",
    issuer: "KasNet Technologies Pvt. Ltd",
    date: "August 2022",
    credentialId: "U72900PN2014PTC15149",
    link: "/certs/kasnet-industrial.pdf",
    verifyUrl: "/certs/kasnet-industrial.pdf",
    skills: ["Industrial Software Workflow", "Systems & Engineering Fundamentals", "Technical Documentation", "MSBTE Practical Training"],
    description: "Completed an intensive 6-week MSBTE I-Scheme industrial training program with KasNet Technologies Pvt. Ltd, focusing on industrial workflow, software engineering fundamentals, and practical technical implementation.",
    color: "#8b5cf6",
  },
  {
    id: "cert-aws",
    name: "AWS Academy Graduate - Cloud Architecting",
    title: "AWS Academy Graduate - Cloud Architecting",
    issuer: "Amazon Web Services (AWS)",
    date: "January 2026",
    credentialId: "AWS-ACADEMY-CLOUD-2026",
    link: "/certs/aws-academy.pdf",
    verifyUrl: "/certs/aws-academy.pdf",
    skills: ["AWS", "Cloud Architecture", "EC2", "S3", "IAM", "VPC"],
    description: "In-depth cloud architecture curriculum by AWS covering cloud deployment models, security, scalable architecture patterns, and cloud storage.",
    color: "#FF9900",
  },
  {
    id: "cert-ai-tools",
    name: "AI Tools Mastery Program",
    title: "AI Tools Mastery Program",
    issuer: "be10x",
    date: "June 2024",
    credentialId: "BE10X-AI-2024",
    link: "/certs/be10x-ai.pdf",
    verifyUrl: "/certs/be10x-ai.pdf",
    skills: ["Generative AI", "Prompt Engineering", "Productivity Automation", "LLM Workflows"],
    description: "Practical program focused on leveraging cutting-edge Artificial Intelligence tools, LLMs, and prompt engineering to automate workflows and solve engineering tasks.",
    color: "#8b5cf6",
  },
  {
    id: "cert-python",
    name: "100 Days of Code: The Complete Python Pro Bootcamp",
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    issuer: "Udemy / Dr. Angela Yu",
    date: "March 2024",
    credentialId: "UC-PYTHON-PRO-2024",
    link: "/certs/udemy-python.pdf",
    verifyUrl: "/certs/udemy-python.pdf",
    skills: ["Python", "Object-Oriented Programming", "Automation", "Data Structures", "Web Scraping"],
    description: "Comprehensive 100-day Python certification covering advanced object-oriented programming, web scraping, data processing, and backend development.",
    color: "#3776AB",
  },
  {
    id: "cert-data",
    name: "Data Processing and Visualisation",
    title: "Data Processing and Visualisation",
    issuer: "Accenture / FutureSkills Prime",
    date: "February 2026",
    credentialId: "FSP-ACCENTURE-DATA-2026",
    link: "/certs/accenture-data.pdf",
    verifyUrl: "/certs/accenture-data.pdf",
    skills: ["Data Analytics", "Visualization", "SQL", "Pandas", "Statistical Analysis"],
    description: "Industry-standard data analytics certification exploring exploratory data analysis, data cleaning, visualization techniques, and insight reporting.",
    color: "#a100ff",
  },
  {
    id: "cert-linkedin-management",
    name: "Project Management, HR & Risk Strategies (22 Certs)",
    title: "Project Management, HR & Risk Strategies (22 Certs)",
    issuer: "LinkedIn Learning",
    date: "January 2025",
    credentialId: "LINKEDIN-PM-2025",
    link: "/certs/linkedin-management.pdf",
    verifyUrl: "/certs/linkedin-management.pdf",
    skills: ["Project Management", "Team Leadership", "Agile Principles", "Risk Strategy", "Execution"],
    description: "Comprehensive leadership & management foundation series covering project execution, agile workflows, risk mitigation, and team leadership.",
    color: "#0a66c2",
  },
  {
    id: "cert-azure",
    name: "Microsoft Azure Learning Certification",
    title: "Microsoft Azure Learning Certification",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "MSFT-AZURE-2024",
    verifyUrl: "https://learn.microsoft.com",
    skills: ["Microsoft Azure", "Cloud Services", "Virtual Machines", "Cloud Security"],
    description: "Cloud fundamentals certification covering Microsoft Azure core services, security compliance, and cloud computing principles.",
    color: "#0078d4",
  },
];
