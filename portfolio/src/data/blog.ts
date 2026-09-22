export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  date: string;
  readTime: string;
  image: string;
  published: boolean;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "react-performance",
    title: "10 React Performance Patterns Every Developer Should Know",
    excerpt:
      "Deep dive into useMemo, useCallback, code splitting, and virtualization techniques that made my app 3x faster.",
    content: "Coming soon...",
    tags: ["React", "Performance", "JavaScript"],
    date: "Coming Soon",
    readTime: "8 min read",
    image: "/images/project-webapp.jpg",
    published: false,
    slug: "react-performance-patterns",
  },
  {
    id: "ml-production",
    title: "Deploying ML Models to Production: A Pragmatic Guide",
    excerpt:
      "Everything I learned about model serving, monitoring drift, A/B testing, and avoiding the most common pitfalls.",
    content: "Coming soon...",
    tags: ["ML", "Python", "Cloud", "DevOps"],
    date: "Coming Soon",
    readTime: "12 min read",
    image: "/images/project-ai.jpg",
    published: false,
    slug: "ml-models-production",
  },
  {
    id: "sql-optimization",
    title: "SQL Query Optimization: From 10s to 50ms",
    excerpt:
      "Real-world techniques: indexes, query plans, partitioning, and caching strategies that transformed a slow app.",
    content: "Coming soon...",
    tags: ["SQL", "PostgreSQL", "Backend", "Performance"],
    date: "Coming Soon",
    readTime: "6 min read",
    image: "/images/project-cloud.jpg",
    published: false,
    slug: "sql-query-optimization",
  },
];
