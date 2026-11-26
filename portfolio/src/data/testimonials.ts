export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Engineering Team Lead",
    role: "Software Development Internship",
    company: "Cognifyz Technologies",
    content: "Abhishek demonstrated exceptional problem-solving acumen and delivered clean, modular code during his internship. His ability to quickly master new technologies, coordinate across milestones, and maintain high standards made him a standout contributor.",
    featured: true,
  },
  {
    id: "2",
    name: "AI & ML Research Peer",
    role: "Multimodal Forensics Collaboration",
    company: "Applied AI Research",
    content: "Collaborating with Abhishek on multimodal deepfake forensics was an incredible experience. He brought deep technical rigor to both model pipelines and REST API integration, consistently optimizing for inference accuracy and speed.",
    featured: true,
  },
  {
    id: "3",
    name: "Faculty Academic Guide",
    role: "Department of Computer Science & Engineering",
    company: "Vishwakarma University",
    content: "A dedicated engineer maintaining an 8.2 CGPA with a rare blend of theoretical mastery and practical full-stack execution. Abhishek consistently demonstrates high initiative and architectural clarity in complex software projects.",
    featured: true,
  },
];
