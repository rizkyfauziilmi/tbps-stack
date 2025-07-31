import { createTRPCRouter, protectedProcedure } from "../init";
import { uploadPostSchema } from "../schemas/post.schema";

export const postRouter = createTRPCRouter({
  uploadPost: protectedProcedure
    .input(uploadPostSchema)
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
