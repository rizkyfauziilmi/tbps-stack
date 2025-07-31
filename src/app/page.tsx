import BetterAuth from "@/components/svgs/better-auth";
import Prisma from "@/components/svgs/prisma";
import TRPC from "@/components/svgs/trpc";
import Shadcnui from "@/components/svgs/shadcn";
import { UploadPost } from "./_components/upload-post";
import { HydrateClient, prefetch, trpc } from "@/server/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { headers } from "next/headers";
import { auth } from "@/server/auth/auth";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    prefetch(trpc.post.latestPost.queryOptions());
  }

  return (
    <HydrateClient>
      <div className="flex flex-col items-center justify-center h-screen gap-2">
        <div className="flex items-center justify-center gap-4 mb-2">
          <TRPC className="size-10" />
          <BetterAuth className="size-10" />
          <Prisma className="size-10" />
          <Shadcnui className="size-10" />
        </div>
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          TBPS Stack Template
        </h1>
        <p className="text-muted-foreground text-xl mb-4">
          A Modern Solution for Your Next Project with Next.js 15, TRPC, Prisma,
          BetterAuth, and Shadcn UI
        </p>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <UploadPost />
          </Suspense>
        </ErrorBoundary>
      </div>
    </HydrateClient>
  );
}
