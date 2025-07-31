"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/server/auth/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/server/trpc/client";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";

const uploadPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
});

export const UploadPost = () => {
  const { data: session } = authClient.useSession();
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const latestPostQueryOptions = trpc.post.latestPost.queryOptions();
  const { data: post } = useSuspenseQuery(latestPostQueryOptions);

  const uploadPostMutationOptions = trpc.post.uploadPost.mutationOptions({
    onSuccess: () => {
      toast.success("Post uploaded successfully!");
      queryClient.invalidateQueries({
        queryKey: trpc.post.latestPost.queryKey(),
      });
    },
    onError: (error) => {
      toast.error(`Failed to upload post: ${error.message}`);
    },
  });
  const uploadPostMutation = useMutation(uploadPostMutationOptions);

  const form = useForm<z.infer<typeof uploadPostSchema>>({
    resolver: zodResolver(uploadPostSchema),
    defaultValues: {
      title: "",
    },
  });

  async function onSubmit(values: z.infer<typeof uploadPostSchema>) {
    await uploadPostMutation.mutateAsync(values);
    form.reset();
  }

  if (!session) {
    return (
      <Button asChild>
        <Link href="/login">Login to upload post</Link>
      </Button>
    );
  }

  return (
    <div>
      <div className="text-lg font-semibold mb-1">
        {post ? (
          <p>Latest Post: {post.title}</p>
        ) : (
          <p>No posts available yet.</p>
        )}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter post title"
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full"
            disabled={uploadPostMutation.isPending}
          >
            {uploadPostMutation.isPending && (
              <Loader2Icon className="animate-spin" />
            )}
            {uploadPostMutation.isPending ? "Uploading..." : "Upload Post"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
