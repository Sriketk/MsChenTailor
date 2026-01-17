import * as React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface GoogleReviewProps {
  name: string;
  stars: number;
  date: string;
  description: string;
  href?: string;
  className?: string;
}

export default function GoogleReview({
  name,
  stars,
  date,
  description,
  href,
  className,
}: GoogleReviewProps) {
  const content = (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            alt="Google"
            className="h-5 w-12"
            height={20}
            src="/icons/google-review.png"
            width={48}
          />
          <h3 className="font-semibold text-foreground">{name}</h3>
        </div>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "size-4",
                i < stars
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-muted text-muted-foreground"
              )}
            />
          ))}
        </div>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className="block transition-opacity hover:opacity-80"
      >
        {content}
      </a>
    );
  }

  return content;
}
