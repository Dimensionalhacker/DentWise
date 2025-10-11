import { Button } from "@/components/ui/button";

import { SignUpButton, SignedOut, SignedIn, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <SignedOut>
        <SignUpButton mode="modal">Sign Up</SignUpButton>
      </SignedOut>

      <SignedIn>
          Logout
      </SignedIn>
    </div>
  );
}
