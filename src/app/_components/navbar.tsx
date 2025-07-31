"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { LogInIcon } from "lucide-react";
import Link from "next/link";
import { UserDropdown } from "./user-dropdown";
import { authClient } from "@/server/auth/auth-client";

export const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  return (
    <nav className="sticky top-0 flex items-center justify-between py-2 px-6 bg-background h-14 border-b">
      <Link href="/">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Navbar
        </h3>
      </Link>
      {isPending ? (
        <Skeleton className="size-10 rounded-full" />
      ) : session ? (
        <UserDropdown session={session} />
      ) : (
        <Button asChild variant="outline">
          <Link href="/login">
            <LogInIcon />
            Login
          </Link>
        </Button>
      )}
    </nav>
  );
};
