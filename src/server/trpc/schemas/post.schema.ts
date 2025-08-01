import z from "zod";

export const uploadPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
});
