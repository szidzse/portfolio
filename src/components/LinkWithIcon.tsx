import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LinkWithIconProps = {
  href: string;
  icon?: React.ReactNode;
  position: "left" | "right";
  text?: string;
  className?: string;
};

const LinkWithIcon = ({
  href,
  icon,
  position,
  text,
  className,
}: LinkWithIconProps) => {
  return (
    <Link
      href={href}
      className={cn("link flex items-center gap-2 font-light", className)}
    >
      {position === "left" && icon}
      <span>{text}</span>
      {position === "right" && icon}
    </Link>
  );
};

export default LinkWithIcon;
