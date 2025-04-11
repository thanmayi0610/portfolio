import { ProfileData } from '../types/types';

const portfolioData: ProfileData = {
  name: "Thanmayi J R",
  title: "Fullstack Developer",
  socialLinks: [
    {
      id: 1,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/thanmayi-j-r-a0965224b/",
      icon: "linkedin"
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://www.instagram.com/thanmayi.jr?igsh=MXQxOGF5b3R0MTFqeA==",
      icon: "twitter"
    },
    {
      id: 3,
      name: "GitHub",
      url: "https://github.com",
      icon: "github"
    },
   
    
  ],
  about: " I’m Thanmayi — a passionate full-stack development intern at Stacklane. I'm currently honing my skills in both frontend and backend technologies.Beyond tech, I’m a keen learner who enjoys exploring new perspectives and experiences. I love diving into books, having meaningful conversations, and discovering the little things that make life interesting. Curiosity drives me, and I believe growth comes from staying open, humble, and always willing to learn.",
  experiences: [
    {
      id: 1,
      title: "Fullstack Developer Intern",
      company: "StackLane",
      duration: "2025",
      description: "Currently learning Fullstack Development ."
    },

  ],
  projects: [
    {
      id: 1,
      title: "Hacker-news",
      description: "A social media-like backend service built using Node.js and Express",
      technologies: ["React", "TypeScript", "CSS"],
       link:"https://github.com/thanmayi0610/hackernews-server"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with user authentication and payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      
    },
   
  ],
  interests: [
    {
      id: 1,
      title: "Mobile Development",
      description: "Building cross-platform mobile applications with React Native"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Creating intuitive and aesthetically pleasing user interfaces"
    },
    {
      id: 3,
      title: "Open Source",
      description: "Contributing to open source projects and communities"
    }
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Engineering",
      institution: "Information Science",
      duration: "2021 - 2025",
      description: "8.58 CGPA"
    }
  ],
  contact: {
    email: "thanmayithanmayi81@gmail.com",
    phone: "+91 8431946464",
    address: "Tumkur, Karnataka, India"
  }
};

export default portfolioData;