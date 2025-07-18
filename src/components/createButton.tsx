"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface createButtonProps {
  text: string;
  href: string;
  className?: string;
}

export default function CreateButton({ text, href, className = "" }: createButtonProps) {
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
