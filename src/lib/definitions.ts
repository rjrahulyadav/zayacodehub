export type Service = {
  title: string;
  description: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageHint: string;
  liveLink?: string;
  category: 'Web' | 'Mobile' | 'Software';
};

export type Job = {
  id: string;
  title: string;
  type: 'Fresher' | 'Internship';
  skills: string[];
  location: string;
  applyLink: string;
};
