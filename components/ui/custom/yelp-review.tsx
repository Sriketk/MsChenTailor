import * as React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface YelpReviewProps {
  name: string;
  stars: number;
  date: string;
  description: string;
  location?: string;
  href?: string;
  className?: string;
}

export default function YelpReview({
  name,
  stars,
  date,
  description,
  location,
  href,
  className,
}: YelpReviewProps) {
  const content = (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            alt="Yelp"
            className="h-5 w-12"
            height={20}
            src="/icons/yelp.png"
            width={48}
          />
          <div>
            <h3 className="font-semibold text-foreground">{name}</h3>
            {location && (
              <p className="text-xs text-muted-foreground">{location}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "size-4",
                  i < stars
                    ? "fill-red-500 text-red-500"
                    : "fill-muted text-muted-foreground"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">{date}</span>
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
