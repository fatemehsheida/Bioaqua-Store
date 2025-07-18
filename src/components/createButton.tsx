"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface CreateButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  src?:string;
  alt?:string;
  href: string;
  className?: string;
}

export default function CreateButton({ text, href, className,src,alt = "", ...props }: CreateButtonProps) {
  const router = useRouter();

  return (
    <button
      className={className}
      onClick={() => router.push(href)}
      {...props}
    >
      <img src={src} alt={alt}/>
      {text}
    </button>
  );
}
