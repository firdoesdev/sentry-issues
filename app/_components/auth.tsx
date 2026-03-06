"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const AuthSection = () => {
  const { data, isPending, error } = authClient.useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  if (isPending) {
    return <div>Loading . . </div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (data) {
    return (
      <div>
        <div>{data.user.email}</div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    );
  }

  return (
    <div>
      <Link href="/login">Login</Link>
      <Link href="/signup">Register</Link>
    </div>
  );
};
