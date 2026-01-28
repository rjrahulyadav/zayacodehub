"use client";

import { useFormStatus } from "react-dom";
import { login } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Code, LogIn } from "lucide-react";
import { useActionState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function LoginPage() {
  const [state, formAction] = useActionState(login, undefined);
  const { toast } = useToast();

   useEffect(() => {
    if (state?.error) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: state.error,
      });
    }
  }, [state, toast]);

  function LoginButton() {
    const { pending } = useFormStatus();
    return (
      <Button type="submit" className="w-full" aria-disabled={pending}>
        {pending ? "Signing in..." : <> <LogIn className="mr-2 h-4 w-4" /> Sign In</>}
      </Button>
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
          <CardDescription>Enter your credentials to access the dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
            <LoginButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
