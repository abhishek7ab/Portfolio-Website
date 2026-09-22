export interface LearningItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  color: string;
  resource: string;
  eta: string;
}

export const currentLearning: LearningItem[] = [
  {
    id: "nextjs",
    title: "Next.js 14 & App Router",
    description:
      "Mastering server components, streaming, server actions, and the new App Router paradigm for production-grade React apps.",
    icon: "SiNextdotjs",
    progress: 75,
    color: "#000000",
    resource: "https://nextjs.org/docs",
    eta: "August 2025",
  },
  {
    id: "typescript",
    title: "Advanced TypeScript",
    description:
      "Deep diving into generics, conditional types, mapped types, and building type-safe APIs at scale.",
    icon: "SiTypescript",
    progress: 60,
    color: "#3178C6",
    resource: "https://typescriptlang.org",
    eta: "September 2025",
  },
  {
    id: "docker",
    title: "Docker & Kubernetes",
    description:
      "Containerizing applications and orchestrating microservices with Docker Compose and Kubernetes deployments.",
    icon: "SiDocker",
    progress: 40,
    color: "#2496ED",
    resource: "https://docker.com",
    eta: "October 2025",
  },
  {
    id: "langchain",
    title: "LangChain & LLM Apps",
    description:
      "Building production LLM applications using LangChain, RAG pipelines, and vector databases like Pinecone.",
    icon: "SiOpenai",
    progress: 35,
    color: "#10A37F",
    resource: "https://langchain.com",
    eta: "November 2025",
  },
  {
    id: "rust",
    title: "Rust Programming",
    description:
      "Exploring systems programming with Rust — ownership model, lifetimes, and building memory-safe, blazing-fast software.",
    icon: "SiRust",
    progress: 20,
    color: "#CE422B",
    resource: "https://rust-lang.org",
    eta: "December 2025",
  },
];
