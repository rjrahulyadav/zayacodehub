"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/data';
import type { Project } from '@/lib/definitions';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Web', 'Mobile', 'Software'];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (filter === 'All') {
      return projects;
    }
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <div>
      <PageHeader
        title="Our Portfolio"
        subtitle="Explore a selection of our finest work. Each project is a testament to our commitment to quality, innovation, and client success."
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="flex justify-center items-center gap-2 md:gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'ghost'}
                onClick={() => setFilter(category)}
                className={`transition-all duration-300 ${filter === category ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: Project, index: number) => (
              <Card
                key={project.id}
                className="glassmorphism group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
                style={{ animation: `fade-in-up 0.5s ease-out ${index * 100}ms forwards`, opacity: 0 }}
              >
                <div className="overflow-hidden relative">
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={project.imageHint}
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-headline mb-2 text-white">{project.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 h-20 overflow-hidden">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-gray-300">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent/50 text-accent/80 font-mono text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {project.liveLink && (
                    <Button asChild variant="link" className="p-0 text-accent hover:text-glow-accent">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        View Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
