import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import { ArrowRight, Code, Monitor, Smartphone, Cpu, Share2, Cloud, Briefcase } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const serviceIcons: { [key: string]: React.ElementType } = {
  'Custom Software Development': Code,
  'Web Development': Monitor,
  'Mobile App Development': Smartphone,
  'AI & Machine Learning': Cpu,
  'IoT & Embedded Systems': Share2,
  'Cloud & DevOps Engineering': Cloud,
  'IT Consulting': Briefcase,
};

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <div className="flex flex-col items-center">
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-white mb-4 animate-fade-in-down">
            ZAYA <span className="text-primary neon-glow">CODE</span> HUB
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Delivering Scalable, Secure, and Innovative Technology Solutions to Propel Your Business Forward.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-105">
              <Link href="/portfolio">Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-2">Our Services</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We provide a wide range of IT services to help your business thrive in the digital age.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => {
              const Icon = serviceIcons[service.title] || Code;
              return (
                <Card key={service.title} className="glassmorphism group overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/20">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Icon className="w-10 h-10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:text-glow-accent" />
                      <CardTitle className="text-xl font-headline font-semibold">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description.substring(0, 100)}...</p>
                    <Link href="/services" className="flex items-center text-accent font-semibold group-hover:text-glow-accent">
                      Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
           <div className="text-center mt-12">
            <Button asChild variant="link" className="text-lg text-primary hover:text-primary/80">
                <Link href="/services">View All Services <ArrowRight className="ml-2 h-5 w-5"/></Link>
            </Button>
        </div>
        </div>
      </section>
    </div>
  );
}
