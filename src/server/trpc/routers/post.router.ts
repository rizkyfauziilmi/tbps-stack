import z from "zod";
import { createTRPCRouter, protectedProcedure } from "../init";
import { TRPCError } from "@trpc/server";

export const postRouter = createTRPCRouter({
  uploadPost: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1, "Title is required"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { title } = input;
      const userId = ctx.session.user.id;

      const post = await ctx.db.post.create({
        data: {
          title,
          userId,
        },
      });

      return post;
    }),
  latestPost: protectedProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      where: { userId: ctx.session.user.id },
      orderBy: { createdAt: "desc" },
    });

    return post;
  }),
});
