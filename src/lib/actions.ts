"use server";

import { z } from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Mock data, in a real app this would be a database
import { projects, jobs } from "./data";
import type { Project, Job } from "./definitions";

// In a real app, you'd want to revalidate paths after data mutation
// import { revalidatePath } from 'next/cache';

const FormSchema = z.object({
  password: z.string(),
});

export async function login(prevState: { error: string | undefined } | undefined, formData: FormData) {
  const parsed = FormSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!parsed.success) {
    return { error: "Invalid form data." };
  }
  
  // In a real app, you would hash and compare the password against a stored hash
  if (parsed.data.password === "admin123") {
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000 * 7); // 7 days
    cookies().set("session", "loggedIn", { expires, httpOnly: true });
    redirect("/admin");
  }

  return { error: "Invalid password." };
}

export async function logout() {
  cookies().delete("session");
  redirect("/admin/login");
}


// --- Mock Data Management ---
// These functions simulate database operations.

export async function getProjects(): Promise<Project[]> {
  // Simulate DB fetch
  return Promise.resolve(projects);
}

export async function getJobs(): Promise<Job[]> {
  // Simulate DB fetch
  return Promise.resolve(jobs);
}

export async function addProject(project: Omit<Project, 'id'>) {
    const newProject: Project = { ...project, id: new Date().toISOString() };
    projects.unshift(newProject);
    console.log("Project added. Current count:", projects.length);
    // revalidatePath('/admin/portfolio');
    return { success: true, message: 'Project added successfully' };
}

export async function deleteProject(id: string) {
    const index = projects.findIndex(p => p.id === id);
    if (index > -1) {
        projects.splice(index, 1);
        console.log("Project deleted. Current count:", projects.length);
        // revalidatePath('/admin/portfolio');
        return { success: true, message: 'Project deleted successfully' };
    }
    return { success: false, message: 'Project not found' };
}

export async function addJob(job: Omit<Job, 'id'>) {
    const newJob: Job = { ...job, id: new Date().toISOString() };
    jobs.unshift(newJob);
    console.log("Job added. Current count:", jobs.length);
    // revalidatePath('/admin/careers');
    return { success: true, message: 'Job added successfully' };
}

export async function deleteJob(id: string) {
    const index = jobs.findIndex(j => j.id === id);
    if (index > -1) {
        jobs.splice(index, 1);
        console.log("Job deleted. Current count:", jobs.length);
        // revalidatePath('/admin/careers');
        return { success: true, message: 'Job deleted successfully' };
    }
    return { success: false, message: 'Job not found' };
}
