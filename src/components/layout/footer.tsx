import Link from "next/link";
import { Code, Github, Linkedin, Twitter } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careers", label: "Careers" },
  { href: "/admin", label: "Admin" },
];

export function Footer() {
  return (
    <footer className="bg-card/20 border-t border-border/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Code className="h-8 w-8 text-primary text-glow-primary" />
              <span className="text-xl font-bold font-headline tracking-tighter text-white">
                ZAYA CODE HUB
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Innovating the future, one line of code at a time.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Github size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold font-headline mb-4 text-white">Navigation</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold font-headline mb-4 text-white">Contact Us</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Subramania Nagar</li>
                <li>Salem, Tamil Nadu – 636005</li>
                <li className="pt-2">
                    <a href="tel:7033399183" className="hover:text-primary">Phone: 7033399183</a>
                </li>
                <li>
                    <a href="mailto:info@zayacodehub.com" className="hover:text-primary">info@zayacodehub.com</a>
                </li>
              </ul>
            </div>
             <div>
              <h3 className="font-semibold font-headline mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">Privacy Policy</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ZAYA CODE HUB. All rights reserved. Founded by Rahul Kumar Yadav.</p>
        </div>
      </div>
    </footer>
  );
}
