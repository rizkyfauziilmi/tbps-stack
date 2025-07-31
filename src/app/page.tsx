import BetterAuth from "@/components/svgs/better-auth";
import Prisma from "@/components/svgs/prisma";
import TRPC from "@/components/svgs/trpc";
import Shadcnui from "@/components/svgs/shadcn";

export default function Home() {
  return (
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
      <p className="text-muted-foreground text-xl">
        A Modern Solution for Your Next Project with Next.js 15, TRPC, Prisma,
        BetterAuth, and Shadcn UI
      </p>
    </div>
  );
}
