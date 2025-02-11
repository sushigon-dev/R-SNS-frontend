import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AccountProps {
  username: string;
  userlink: string;
  avatarSrc: string;
  avaterAlt: string;
  avaterFallback: string;
}

const omittedNumber = 12;

export function Account({
  username,
  userlink,
  avatarSrc,
  avaterAlt,
  avaterFallback,
}: AccountProps) {
  const omittedName =
    username.length > omittedNumber
      ? `${username.slice(0, omittedNumber)}...`
      : username;

  return (
    <Link
      href={userlink}
      className="flex items-center gap-2 w-auto py-0 px-4 border border-border rounded-full"
    >
      <Avatar>
        <AvatarImage
          src={avatarSrc}
          alt={avaterAlt}
          className="w-7 h-7 m-auto"
        />
        <AvatarFallback>{avaterFallback}</AvatarFallback>
      </Avatar>
      <span className="text-xs text-accent-foreground hidden sm:block">
        {omittedName}
      </span>
    </Link>
  );
}

export default Account;
