import { PageHeader } from '@/components/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Map } from '@/components/map';

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Have a project in mind or just want to say hello? We'd love to hear from you. Fill out the form below or reach out to us directly."
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="glassmorphism p-8">
              <h2 className="text-3xl font-bold font-headline mb-6 text-white">Get in Touch</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">Name</Label>
                  <Input id="name" placeholder="Your Name" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px] bg-background/50" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/80 text-lg py-6">
                  Send Message
                </Button>
              </form>
            </Card>
            <div className="space-y-8">
              <Card className="glassmorphism p-8">
                <h3 className="text-2xl font-bold font-headline mb-4 text-white">Contact Information</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <span className="font-semibold text-gray-300">Address</span>
                      <p>Subramania Nagar, Salem, Tamil Nadu – 636005</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <span className="font-semibold text-gray-300">Phone</span>
                      <p><a href="tel:7033399183" className="hover:text-primary">7033399183</a></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <span className="font-semibold text-gray-300">Email</span>
                      <p><a href="mailto:contact@zayacodehub.com" className="hover:text-primary">contact@zayacodehub.com</a></p>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="glassmorphism overflow-hidden h-80">
                <Map />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
