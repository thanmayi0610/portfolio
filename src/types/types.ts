export interface WorkExperience {
    id: number;
    title: string;
    company: string;
    duration: string;
    description: string;
  }
  
  export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
  }
  
  export interface Education {
    id: number;
    degree: string;
    institution: string;
    duration: string;
    description?: string;
  }
  
  export interface Interest {
    id: number;
    title: string;
    description: string;
  }
  
  export interface SocialLink {
    id: number;
    name: string;
    url: string;
    icon: string;
  }
  
  export interface ProfileData {
    name: string;
    title: string;
    socialLinks: SocialLink[];
    about: string;
    experiences: WorkExperience[];
    projects: Project[];
    interests: Interest[];
    education: Education[];
    contact: {
      email: string;
      phone?: string;
      address?: string;
    };
  }