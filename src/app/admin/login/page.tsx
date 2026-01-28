"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Code, LogIn } from "lucide-react";
import { useState, useEffect, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import { useAuth, useUser } from "@/firebase";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const auth = useAuth();
  const router = useRouter();
  const { user, isUserLoading } = useUser();

  useEffect(() => {
    if (!isUserLoading && user) {
      router.push("/admin");
    }
  }, [user, isUserLoading, router]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, "zayacodehub@gmail.com", password);
      // onAuthStateChanged in provider will handle redirect
      router.push("/admin");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: error.message || "An unexpected error occurred.",
      });
      setIsLoading(false);
    }
  };

  if (isUserLoading || user) {
    // Show a loading spinner or a blank page while redirecting
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
    );
  }


  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-sm glassmorphism">
        <CardHeader className="text-center">
           <div className="flex justify-center items-center gap-2 mb-4">
            <Code className="h-8 w-8 text-primary text-glow-primary" />
            <span className="text-xl font-bold font-headline tracking-tighter text-white">
                ZAYA CODE HUB
            </span>
          </div>
          <CardTitle className="text-2xl font-headline">Admin Login</CardTitle>
          <CardDescription>Enter your password to access the dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : <> <LogIn className="mr-2 h-4 w-4" /> Sign In</>}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
