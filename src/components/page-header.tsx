import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <section className={cn("py-16 md:py-20 text-center bg-card/10", className)}>
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary text-glow-primary mb-4 animate-fade-in-down">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
