"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface ClientButtonProps {
  text: string;
  href: string;
  className?: string;
}

export default function ClientButton({ text, href, className = "" }: ClientButtonProps) {
  const router = useRouter();

  return (
    <button
      className={className}
      onClick={() => router.push(href)}
    >
      {text}
    </button>
  );
}
