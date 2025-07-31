import { createTRPCRouter } from "../init";
import { postRouter } from "./post.router";

export const appRouter = createTRPCRouter({
  post: postRouter,
});

export type AppRouter = typeof appRouter;
