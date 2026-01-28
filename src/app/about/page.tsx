import Image from 'next/image';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const ceoImage = PlaceHolderImages.find(p => p.id === 'ceo-photo');
  const timelineEvents = [
    { year: 2020, event: 'Company Founded', description: 'ZAYA CODE HUB was born with a vision to revolutionize the IT services industry.' },
    { year: 2021, event: 'First Major Project', description: 'Successfully delivered a complex enterprise solution for a leading logistics firm.' },
    { year: 2022, event: 'Team Expansion', description: 'Grew our team of passionate developers and designers to 20+ members.' },
    { year: 2023, event: 'New Office', description: 'Inaugurated our new state-of-the-art development center in Salem.' },
    { year: 2024, event: 'Global Reach', description: 'Expanded our services to international clients across three continents.' },
  ];

  return (
    <div>
      <PageHeader
        title="About ZAYA CODE HUB"
        subtitle="We are a team of passionate creators, thinkers, and innovators dedicated to building the future of technology."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline mb-4 text-primary">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              To empower businesses with transformative technology solutions that drive growth, efficiency, and innovation. We strive to be a trusted partner for our clients, delivering excellence and value in every project.
            </p>
            <h2 className="text-3xl font-bold font-headline mb-4 text-primary">Our Vision</h2>
            <p className="text-muted-foreground mb-6">
              To be a globally recognized leader in IT services, renowned for our technical expertise, creative solutions, and unwavering commitment to client success.
            </p>
             <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="font-medium">Client-Centric Approach</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="font-medium">Innovation and Creativity</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="font-medium">Integrity and Transparency</span>
              </li>
            </ul>
          </div>
          <Card className="glassmorphism p-8">
            <CardContent className="p-0">
               <h3 className="text-2xl font-bold font-headline mb-6 text-center text-accent">Our Journey</h3>
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
                {timelineEvents.map((item, index) => (
                  <div key={item.year} className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                        <p className="font-bold font-headline text-lg text-primary">{item.year}</p>
                        <h4 className="font-semibold text-white">{item.event}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 z-10">
                        <div className="bg-primary rounded-full w-4 h-4 border-4 border-background"></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/10">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Meet Our Founder</h2>
          <Card className="max-w-4xl mx-auto glassmorphism overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                {ceoImage && (
                  <Image
                    src={ceoImage.imageUrl}
                    alt={ceoImage.description}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover md:w-64"
                    data-ai-hint={ceoImage.imageHint}
                  />
                )}
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-accent font-semibold">CEO & Founder</div>
                <h3 className="mt-1 text-3xl leading-tight font-headline font-bold text-white">Rahul Kumar Yadav</h3>
                <p className="mt-4 text-muted-foreground">
                  Rahul is a visionary leader with over a decade of experience in the software industry. His passion for technology and commitment to excellence are the driving forces behind ZAYA CODE HUB's success. He believes in building strong client relationships and fostering a culture of continuous innovation within the team.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
