'use client';
import { SignInButton, SignUpButton } from '@clerk/clerk-react';
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

export const SignButtons = () => {
  return (
    <>
      <DropdownMenuItem>
        <SignInButton mode="modal">
          <button className="w-full text-left">Login</button>
        </SignInButton>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <SignUpButton mode="modal">
          <button className="w-full text-left">Register</button>
        </SignUpButton>
      </DropdownMenuItem>
    </>
  );
};
