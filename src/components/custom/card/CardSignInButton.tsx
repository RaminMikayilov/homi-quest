import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { FaRegHeart } from "react-icons/fa";

export const CardSignInButton = () => {
  return (
    <SignInButton mode="modal">
      <Button
        type="button"
        size="icon"
        variant="outline"
        className="p-2 cursor-pointer"
        asChild
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  );
};
