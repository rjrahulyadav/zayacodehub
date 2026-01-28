import { getProjects, deleteProject } from "@/lib/actions";
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
import Image from "next/image";
import { MoreVertical, PlusCircle, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function AdminPortfolioPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold font-headline">Manage Portfolio</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Project
        </Button>
      </div>

      <div className="border rounded-lg glassmorphism">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Technologies</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    width={50}
                    height={50}
                    className="rounded-md object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{project.category}</Badge>
                </TableCell>
                <TableCell className="max-w-xs truncate">
                  {project.technologies.join(', ')}
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
                          await deleteProject(project.id);
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
