import { PageHeader } from '@/components/page-header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { services } from '@/lib/data';
import { Code, Monitor, Smartphone, Briefcase, BarChart, Settings } from 'lucide-react';

const serviceIcons: { [key: string]: React.ElementType } = {
  'Custom Software Development': Code,
  'Web Development': Monitor,
  'Mobile App Development': Smartphone,
  'IT Consulting': Briefcase,
  'Digital Solutions': BarChart,
};

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Our Services"
        subtitle="We offer a comprehensive suite of IT services designed to elevate your business, from custom software to strategic consulting."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.title] || Settings;
              return (
                <Card 
                  key={service.title} 
                  className="glassmorphism group flex flex-col overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="mb-4">
                      <Icon className="w-12 h-12 text-accent transition-all duration-300 group-hover:scale-110 group-hover:text-glow-accent" />
                    </div>
                    <CardTitle className="text-2xl font-headline font-semibold text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
