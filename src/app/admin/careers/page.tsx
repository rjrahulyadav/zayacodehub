import { getJobs, deleteJob } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreVertical, PlusCircle, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function AdminCareersPage() {
  const jobs = await getJobs();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold font-headline">Manage Careers</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Job
        </Button>
      </div>

      <div className="border rounded-lg glassmorphism">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Skills</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell className="font-medium">{job.title}</TableCell>
                <TableCell>
                  <Badge variant={job.type === 'Fresher' ? 'default' : 'secondary'} className={`${job.type === 'Fresher' ? 'bg-primary' : ''}`}>
                    {job.type}
                  </Badge>
                </TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell className="max-w-xs truncate">
                  {job.skills.join(', ')}
                </TableCell>
                <TableCell className="text-right">
                   <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                       <form action={async () => {
                          "use server"
                          await deleteJob(job.id);
                          // In a real app with a DB, we'd revalidate
                       }}>
                         <button type="submit" className="w-full">
                           <DropdownMenuItem className="text-red-500">
                             <Trash2 className="mr-2 h-4 w-4" /> Delete
                           </DropdownMenuItem>
                         </button>
                       </form>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
