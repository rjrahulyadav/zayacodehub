import { getJobs, getProjects } from "@/lib/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function AdminDashboard() {
  const projects = await getProjects();
  const jobs = await getJobs();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold font-headline">Dashboard</h1>
        <Button asChild>
            <Link href="/" target="_blank">View Site <LinkIcon className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <Card className="glassmorphism">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Portfolio Projects
            </CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projects.length}</div>
            <p className="text-xs text-muted-foreground">
              Total projects currently showcased.
            </p>
          </CardContent>
        </Card>
        <Card className="glassmorphism">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Job Openings
            </CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{jobs.length}</div>
            <p className="text-xs text-muted-foreground">
              Active fresher and internship positions.
            </p>
          </CardContent>
        </Card>
      </div>

       <Card className="glassmorphism">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button asChild>
              <Link href="/admin/portfolio">Manage Portfolio</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/admin/careers">Manage Careers</Link>
            </Button>
          </CardContent>
        </Card>
    </div>
  );
}
