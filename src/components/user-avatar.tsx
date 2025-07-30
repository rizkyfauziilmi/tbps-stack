"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  imageUrl?: string;
  fallbackText: string;
  className?: string;
}

export const UserAvatar = ({
  imageUrl,
  fallbackText,
  className,
}: UserAvatarProps) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={imageUrl ?? "https://github.com/shadcn.png"} />
      <AvatarFallback>{fallbackText}</AvatarFallback>
    </Avatar>
  );
};
