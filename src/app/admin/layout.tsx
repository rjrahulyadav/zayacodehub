import { NavLink } from "./_components/nav-link";
import { logout } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Code, LayoutDashboard, Briefcase, GraduationCap, LogOut } from "lucide-react";
import Link from "next/link";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 flex-shrink-0 border-r border-border/40 bg-card/20 p-4 flex flex-col">
        <div className="mb-8">
            <Link href="/admin" className="flex items-center gap-2 mb-4">
                <Code className="h-8 w-8 text-primary text-glow-primary" />
                <span className="text-lg font-bold font-headline tracking-tighter text-white">
                    ZCH ADMIN
                </span>
            </Link>
        </div>
        <nav className="flex-grow space-y-2">
            <NavLink href="/admin" icon={<LayoutDashboard />}>Dashboard</NavLink>
            <NavLink href="/admin/portfolio" icon={<Briefcase />}>Portfolio</NavLink>
            <NavLink href="/admin/careers" icon={<GraduationCap />}>Careers</NavLink>
        </nav>
        <form action={logout}>
          <Button type="submit" variant="ghost" className="w-full justify-start text-muted-foreground hover:text-primary">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </form>
      </aside>
      <main className="flex-1 p-6 lg:p-8 bg-background">
        {children}
      </main>
    </div>
  );
}
