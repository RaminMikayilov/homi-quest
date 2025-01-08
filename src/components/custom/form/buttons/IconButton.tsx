"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { LuTrash2, LuPenSquare } from "react-icons/lu";

type actionType = "edit" | "delete";
export const IconButton = ({ actionType }: { actionType: actionType }) => {
  const { pending } = useFormStatus();

  const renderIcon = () => {
    let icon;
    switch (actionType) {
      case "edit":
        icon = <LuPenSquare />;
        break;
      case "delete":
        icon = <LuTrash2 />;
        break;
      default:
        const never: never = actionType;
        throw new Error(`Invalid action type: ${never}`);
    }
    return icon;
  };

  return (
    <Button
      type="submit"
      size="icon"
      variant="link"
      className="p-2 cursor-pointer"
    >
      {pending ? <Loader2 className=" animate-spin" /> : renderIcon()}
    </Button>
  );
};
