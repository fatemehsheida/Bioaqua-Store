"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";

interface CreateButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  src?: StaticImageData;
  icon?: React.ReactNode; 
  href: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function CreateButton({
  text,
  href,
  className,
  src,
  icon,
  height,
  width,
  ...props
}: CreateButtonProps) {
  const router = useRouter();

  return (
    <button
      className={className}
      onClick={() => router.push(href)}
      {...props}
    >
      {src && (
        <Image
          src={src}
          alt={text ?? "icon"}
          {...(width ? { width } : {})}
          {...(height ? { height } : {})}
        />
      )}
      {icon && (
        <span className="inline-flex items-center justify-center">
          {icon}
        </span>
      )}
      {text}
    </button>
  );
}
