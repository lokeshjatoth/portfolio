import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "better-stack",
    title: "Better Stack",
    description:
      "An application built using NextJs and Redis for real-time monitoring, logging, and incident tracking to ensure system reliability and performance.",
    icon: "/skills/redis.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/lokeshjatoth/betterstack",
    url: "https://github.com/lokeshjatoth/betterstack",
    tags: ["NextJs", "Redis", "ShadCN", "Tailwind"],
  },
  {
    id: "event-management-systme",
    title: "Event Management System",
    description:
      "A RESTful API developed using Node.js, Express.js, and MongoDB to integrate backend and frontend with ease.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/lokeshjatoth/event-management-system",
    url: "https://event-management-system-gilt.vercel.app",
    tags: ["Node.js", "Express.js", "MongoDB", "React"],
  },
  {
    id: "medium-blog",
    title: "Medium Blog",
    description:
      "A high-performance blogging platform API built with Hono and Node.js, leveraging Prisma ORM with PostgreSQL and deployed on Cloudflare Workers using Wrangler.",
    icon: "/skills/hono.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/lokeshjatoth/Medium-Blog",
    url: "https://medium-blog-gules-psi.vercel.app/",
    tags: ["Node.js", "Hono", "PostgreSQL", "Cloudflare", "Prisma ORM"],
  },
  {
    id: "e-learning",
    title: "E-Learning",
    description:
      "A full-stack e-learning platform featuring secure course enrollment, integrated Razorpay payments, and state management via Redux Toolkit.",
    icon: "/skills/mongodb.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/lokeshjatoth/E-Learning",
    url: "https://e-learning-80kp.onrender.com/",
    tags: ["React", "Redux Toolkit", "MongoDB", "Razorpay", "Zod"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This repository contains the source code for a portfolio website built using Next.js and Sass.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/lokeshjatoth/portfolio",
    url: "",
    tags: ["Next.js", "Sass", "Web Development"],
  },
  {
    id: "linkedIn-clone",
    title: "LinkedIn Clone",
    description:
      "A full-stack social media web application developed using React, Node.js, and MongoDB with a focus on responsive UI and RESTful architecture.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/lokeshjatoth/LinkedIn-clone",
    url: "https://linkedin-clone-ttl9.onrender.com/",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
];
export default projects;
