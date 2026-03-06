"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@/lib/auth-client";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const SignupForm = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    const { data, error } = await authClient.signIn.email({
      ...values,
      callbackURL: "/",
    });

    console.log(data);
    console.log("ERROR ", error);
  };
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <h1 className="text-2xl font-bold text-center">Login</h1>

      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        placeholder="Email"
        {...form.register("email")}
      />
      <Label htmlFor="password">Password</Label>
      <Input
        id="password"
        type="password"
        placeholder="Password"
        {...form.register("password")}
      />
      <Button>Register</Button>
    </form>
  );
};
