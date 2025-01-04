import { LuUser2 } from "react-icons/lu";
import { fetchProfileImage } from "@/utils/actions";
import Image from "next/image";

export default async function UserIcon() {
  const profileImage = await fetchProfileImage();
  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="Profile Image"
        width={24}
        height={24}
        className="rounded-full"
      />
    );
  }
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}
