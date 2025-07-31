"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "@/components/user-avatar";
import {
  CheckIcon,
  DoorOpenIcon,
  MonitorIcon,
  MoonIcon,
  SunIcon,
  SunMoonIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { generateFallbackProfile } from "@/lib/string";
import { authClient, Session } from "@/server/auth/auth-client";

interface UserDropdownProps {
  session: Session;
}

export const UserDropdown = ({ session }: UserDropdownProps) => {
  const router = useRouter();
  const { setTheme, theme } = useTheme();

  const { user } = session;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          imageUrl={user.image ?? undefined}
          fallbackText={generateFallbackProfile(user.name)}
          className="size-10"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={15}
        align="end"
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
      >
        <DropdownMenuLabel>
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <UserAvatar
              imageUrl={user.image ?? undefined}
              fallbackText={generateFallbackProfile(user.name)}
              className="size-10"
            />
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="text-muted-foreground truncate text-xs">
                {user.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <SunMoonIcon className="mr-2 h-4 w-4" />
              Theme
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  onSelect={() => setTheme("light")}
                  className="flex items-center justify-between"
                  disabled={theme === "light"}
                >
                  <div className="flex items-center">
                    <SunIcon className="mr-2 h-4 w-4" />
                    Light
                  </div>
                  <CheckIcon
                    className={`ml-2 h-4 w-4 ${
                      theme === "light" ? "visible" : "invisible"
                    }`}
                  />
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => setTheme("dark")}
                  className="flex items-center justify-between"
                  disabled={theme === "dark"}
                >
                  <div className="flex items-center">
                    <MoonIcon className="mr-2 h-4 w-4" />
                    Dark
                  </div>
                  <CheckIcon
                    className={`ml-2 h-4 w-4 ${
                      theme === "dark" ? "visible" : "invisible"
                    }`}
                  />
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => setTheme("system")}
                  className="flex items-center justify-between"
                  disabled={theme === "system"}
                >
                  <div className="flex items-center">
                    <MonitorIcon className="mr-2 h-4 w-4" />
                    System
                  </div>
                  <CheckIcon
                    className={`ml-2 h-4 w-4 ${
                      theme === "system" ? "visible" : "invisible"
                    }`}
                  />
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem
            variant="destructive"
            onSelect={async () => {
              await authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    router.push("/login");
                  },
                },
              });
            }}
          >
            <DoorOpenIcon className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
