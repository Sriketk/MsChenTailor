import * as React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface RedditReviewProps {
  author: string;
  date: string;
  description: string;
  upvotes?: number;
  href?: string;
  className?: string;
}

export default function RedditReview({
  author,
  date,
  description,
  upvotes,
  href,
  className,
}: RedditReviewProps) {
  const content = (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center gap-2">
        <Image
          alt="Reddit"
          className="size-5"
          height={20}
          src="/icons/reddit.png"
          width={20}
        />
        <span className="text-sm font-medium text-foreground">{author}</span>
        {upvotes !== undefined && (
          <>
            <span className="text-sm text-muted-foreground">•</span>
            <div className="flex items-center gap-1">
              <ArrowUp className="size-3 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{upvotes}</span>
            </div>
          </>
        )}
      </div>
      <p className="text-sm leading-relaxed text-foreground">{description}</p>
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
