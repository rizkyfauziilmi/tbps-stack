"use client";

import Google from "@/components/svgs/google";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authClient } from "@/server/auth/auth-client";

export default function LoginPage() {
  const loginWithSocial = async (provider: "google") => {
    await authClient.signIn.social({
      provider,
    });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Please login to continue using our services.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => loginWithSocial("google")}
          >
            <Google />
            Login with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
