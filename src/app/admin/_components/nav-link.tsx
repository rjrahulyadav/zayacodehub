"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
};

export function NavLink({ href, children, icon }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button
      asChild
      variant={isActive ? "secondary" : "ghost"}
      className={cn("w-full justify-start", isActive && "bg-primary/20 text-primary hover:bg-primary/20 hover:text-primary")}
    >
      <Link href={href}>
        <span className="mr-2">{icon}</span>
        {children}
      </Link>
    </Button>
  );
}
