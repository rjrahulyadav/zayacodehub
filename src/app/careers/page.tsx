import { PageHeader } from '@/components/page-header';
import { jobs } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, Code, ArrowRight } from 'lucide-react';

export default function CareersPage() {
  return (
    <div>
      <PageHeader
        title="Join Our Team"
        subtitle="We're looking for talented and passionate individuals to join us on our mission to build the future of technology. Explore our open positions."
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <Card key={job.id} className="glassmorphism group transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge variant={job.type === 'Fresher' ? 'default' : 'secondary'} className={`mb-2 ${job.type === 'Fresher' ? 'bg-primary' : ''}`}>{job.type}</Badge>
                        <CardTitle className="text-2xl font-headline text-white">{job.title}</CardTitle>
                      </div>
                       <Button asChild variant="ghost" className="text-accent hover:text-accent-foreground hover:bg-accent shrink-0">
                          <a href={job.applyLink}>Apply Now <ArrowRight className="ml-2 h-4 w-4" /></a>
                        </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-accent" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                     <div>
                        <h4 className="text-sm font-semibold mb-2 text-gray-300 flex items-center gap-2">
                           <Code className="h-4 w-4 text-accent"/>
                           Skills Required
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill) => (
                                <Badge key={skill} variant="outline" className="font-mono text-xs">{skill}</Badge>
                            ))}
                        </div>
                     </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="text-center p-12">
                <CardContent>
                  <h3 className="text-2xl font-bold mb-2">No Openings Currently</h3>
                  <p className="text-muted-foreground">
                    We are not actively hiring at the moment, but we are always interested in talented individuals. <br />
                    Feel free to send your resume to <a href="mailto:hr@zayacodehub.com" className="text-primary hover:underline">hr@zayacodehub.com</a>.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
