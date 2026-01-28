import type { Service, Project, Job } from './definitions';
import { PlaceHolderImages } from './placeholder-images';

export const services: Service[] = [
  {
    title: 'Custom Software Development',
    description: 'We build bespoke software solutions tailored to your unique business needs. From enterprise applications to specialized tools, our software is scalable, secure, and built for performance.',
  },
  {
    title: 'Web Development',
    description: 'Our team creates stunning, responsive, and high-performing websites. We leverage modern frameworks like Next.js to deliver fast, SEO-friendly web experiences that engage your audience.',
  },
  {
    title: 'Mobile App Development',
    description: 'We design and develop native and cross-platform mobile applications for iOS and Android. Our apps offer intuitive user experiences and robust functionality to keep your users engaged.',
  },
  {
    title: 'IT Consulting',
    description: 'Leverage our expertise to solve your toughest technology challenges. We provide strategic guidance on IT infrastructure, cloud adoption, cybersecurity, and digital transformation.',
  },
  {
    title: 'Digital Solutions',
    description: 'We offer a suite of digital solutions including UI/UX design, cloud services, and DevOps to help you innovate faster and stay ahead of the competition. Streamline your operations with our expertise.',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    name: 'Project Neon',
    description: 'An advanced data analytics dashboard for a fintech startup, featuring real-time data visualization and predictive modeling.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'D3.js', 'PostgreSQL'],
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-1')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-1')?.imageHint || '',
    liveLink: '#',
    category: 'Web',
  },
  {
    id: '2',
    name: 'ConnectSphere',
    description: 'A cross-platform social networking mobile app with features like instant messaging, stories, and a dynamic news feed.',
    technologies: ['React Native', 'Firebase', 'Node.js', 'GraphQL'],
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-2')?.imageHint || '',
    category: 'Mobile',
  },
  {
    id: '3',
    name: 'QuantumLeap CRM',
    description: 'A custom CRM software for enterprise clients, designed to manage sales pipelines, customer relationships, and marketing automation.',
    technologies: ['Angular', 'Spring Boot', 'Java', 'MongoDB'],
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-3')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-3')?.imageHint || '',
    liveLink: '#',
    category: 'Software',
  },
  {
    id: '4',
    name: 'E-Shop Genesis',
    description: 'A fully-featured e-commerce platform with a custom CMS, payment gateway integration, and advanced inventory management.',
    technologies: ['Next.js', 'Stripe', 'Sanity.io', 'Vercel'],
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-4')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-4')?.imageHint || '',
    category: 'Web',
  },
   {
    id: '5',
    name: 'GameOn Arena',
    description: 'A mobile gaming application with multiplayer support and in-app purchases, built for both iOS and Android.',
    technologies: ['Unity', 'C#', 'Photon Engine'],
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-5')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-5')?.imageHint || '',
    category: 'Mobile',
  },
  {
    id: '6',
    name: 'Logistics Pro',
    description: 'An enterprise software for a logistics company to track shipments, manage fleet, and optimize routes in real-time.',
    technologies: ['Vue.js', 'Python (Django)', 'PostgreSQL', 'AWS'],
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-6')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-6')?.imageHint || '',
    category: 'Software',
  },
];

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    type: 'Fresher',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    location: 'Salem, Tamil Nadu (On-site)',
    applyLink: 'mailto:hr@zayacodehub.com?subject=Application for Frontend Developer (Fresher)',
  },
  {
    id: '2',
    title: 'Backend Developer Intern',
    type: 'Internship',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
    location: 'Remote',
    applyLink: 'mailto:hr@zayacodehub.com?subject=Application for Backend Developer Intern',
  },
  {
    id: '3',
    title: 'UI/UX Design Intern',
    type: 'Internship',
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
    location: 'Remote',
    applyLink: 'mailto:hr@zayacodehub.com?subject=Application for UI/UX Design Intern',
  },
   {
    id: '4',
    title: 'Full-Stack Developer',
    type: 'Fresher',
    skills: ['React', 'Node.js', 'SQL', 'Docker', 'CI/CD'],
    location: 'Salem, Tamil Nadu (On-site)',
    applyLink: 'mailto:hr@zayacodehub.com?subject=Application for Full-Stack Developer (Fresher)',
  },
];
